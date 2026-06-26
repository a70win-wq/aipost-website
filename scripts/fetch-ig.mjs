/**
 * Instagram 公開 Profile 數據抓取腳本 v3
 * 使用 Playwright 自動化瀏覽 IG 公開頁面，提取貼文數據，存為 JSON
 *
 * 用法: node scripts/fetch-ig.mjs
 * 輸出: public/data/ig-cases.json
 */

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const OUTPUT_PATH = resolve(PROJECT_ROOT, 'public', 'data', 'ig-cases.json');

const IG_HANDLES = [
  {
    id: 'choliverhk',
    handle: '@choliverhk',
    url: 'https://www.instagram.com/choliverhk/',
    categoryZh: '美容/個人品牌',
    categoryEn: 'Beauty / Personal Brand',
    descriptionZh: '穩定每日出 Story + Post，品牌形象一致，互動率提升',
    descriptionEn: 'Daily Stories & Posts with consistent branding and improved engagement',
  },
];

async function dismissDialogs(page) {
  try {
    const closeButtons = await page.$$('[role="button"]');
    for (const btn of closeButtons) {
      const text = await btn.textContent().catch(() => '');
      if (text && /not now|decline|only allow essential|cancel/i.test(text)) {
        await btn.click().catch(() => {});
        await page.waitForTimeout(500);
      }
    }
  } catch { /* ignore */ }
}

async function scrapeProfile(page) {
  return await page.evaluate(() => {
    const getMeta = (name) => {
      const el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      return el ? el.getAttribute('content') : '';
    };

    const headerEl = document.querySelector('header');
    const imgEl = headerEl?.querySelector('img[alt*="profile"]') || headerEl?.querySelector('img') || headerEl?.querySelector('canvas');
    const avatarUrl = imgEl ? (imgEl.src || '') : '';

    const bioText = getMeta('description') || '';

    const counts = {};
    const headerText = headerEl?.innerText || '';
    const numMatches = headerText.match(/([\d,.]+[KMB]?)\s*(posts?|followers?|following)/gi) || [];
    for (const m of numMatches) {
      const parts = m.match(/([\d,.]+[KMB]?)\s*(posts?|followers?|following)/i);
      if (parts) counts[parts[2].toLowerCase().replace(/s$/, '')] = parts[1];
    }

    const h2El = headerEl?.querySelector('h2') || headerEl?.querySelector('h1');
    const displayName = h2El?.innerText?.trim() || '';

    return {
      avatarUrl,
      displayName,
      bio: bioText.slice(0, 300),
      postCount: counts.post || 'N/A',
      followerCount: counts.follower || 'N/A',
      followingCount: counts.following || 'N/A',
    };
  });
}

async function scrapePostsFromGrid(page, maxPosts = 12) {
  await dismissDialogs(page);
  await page.waitForTimeout(2000);

  // Scroll to load more posts
  console.log('   🔄 滾動加載貼文...');
  let prevLinkCount = 0;
  let noChangeRounds = 0;

  for (let round = 0; round < 15; round++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.7));
    await page.waitForTimeout(800);

    const linkCount = await page.$$eval('a[href*="/p/"]', els => els.length);

    if (linkCount === prevLinkCount) {
      noChangeRounds++;
      if (noChangeRounds >= 5) break;
    } else {
      noChangeRounds = 0;
    }
    prevLinkCount = linkCount;

    if (linkCount >= maxPosts) break;
  }

  console.log(`   📋 找到 ${prevLinkCount} 個貼文鏈接`);

  // Extract posts from the <a> links
  const posts = await page.evaluate((max) => {
    const postLinks = document.querySelectorAll('a[href*="/p/"]');
    const seen = new Set();
    const results = [];

    for (const a of postLinks) {
      if (results.length >= max) break;

      const href = a.getAttribute('href') || '';
      const match = href.match(/\/(?:p|reel)\/([^/?]+)/);
      if (!match) continue;
      const shortcode = match[1];
      if (seen.has(shortcode)) continue;
      seen.add(shortcode);

      // Scroll into view
      a.scrollIntoView({ block: 'center' });

      // Find image
      const imgEl = a.querySelector('img');
      let imageUrl = '';
      if (imgEl) {
        imageUrl = imgEl.src || '';
        if (!imageUrl) {
          const srcset = imgEl.getAttribute('srcset');
          if (srcset) imageUrl = srcset.split(',')[0]?.trim()?.split(' ')[0] || '';
        }
      }

      // Get alt text as caption
      const caption = imgEl ? (imgEl.alt || '').slice(0, 300) : '';

      // Try to get overlay text (for reel/video indicators, like counts)
      const ariaLabel = a.getAttribute('aria-label') || '';
      const likeMatch = ariaLabel.match(/([\d,.]+[KMB]?)\s*(?:likes|讚好)/i);
      const likes = likeMatch ? likeMatch[1] : '';

      results.push({
        shortcode,
        imageUrl,
        caption,
        likes,
        postUrl: `https://www.instagram.com/p/${shortcode}/`,
      });
    }

    return results;
  }, maxPosts);

  return posts;
}

async function enrichCaptions(page, posts, count = 3) {
  for (let i = 0; i < Math.min(count, posts.length); i++) {
    if (posts[i].caption && posts[i].likes) continue;

    try {
      console.log(`   📝 獲取貼文 ${i + 1} 詳細內容...`);
      await page.goto(posts[i].postUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2000);
      await dismissDialogs(page);

      const details = await page.evaluate(() => {
        const metaDesc = document.querySelector('meta[name="description"]');
        let caption = metaDesc ? metaDesc.getAttribute('content') || '' : '';
        caption = caption.replace(/^\d+[,\d]*\s*(likes?|Likes?|讚好).*?on Instagram:?\s*/i, '');
        caption = caption.replace(/"$/, '').replace(/^"/, '');

        const bodyText = document.body.innerText || '';
        const likeMatch = bodyText.match(/([\d,.]+[KMB]?)\s*(?:likes|Likes)\b/);
        const likes = likeMatch ? likeMatch[1] : '';

        return { caption: caption.slice(0, 350), likes };
      });

      if (details.caption) posts[i].caption = details.caption;
      if (details.likes) posts[i].likes = details.likes;
    } catch { /* keep existing */ }
  }
}

async function main() {
  console.log('🚀 啟動 IG 數據抓取 v3...\n');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
  });

  const page = await context.newPage();
  const results = [];

  for (const target of IG_HANDLES) {
    console.log(`📸 正在抓取: ${target.handle}`);

    try {
      await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(3000);
      await dismissDialogs(page);

      const profile = await scrapeProfile(page);
      const posts = await scrapePostsFromGrid(page, 12);

      // Fix URLs
      const postsFixed = posts.map(p => ({
        ...p,
        imageUrl: p.imageUrl.startsWith('//') ? `https:${p.imageUrl}` : p.imageUrl,
      }));

      // Enrich first few posts with captions
      await enrichCaptions(page, postsFixed, 3);

      results.push({
        ...target,
        profile,
        posts: postsFixed,
        fetchedAt: new Date().toISOString(),
      });

      console.log(`   ✅ 抓到 ${postsFixed.length} 篇貼文`);
      console.log(`   👤 ${profile.displayName || target.handle}`);
      console.log(`   📊 Follower: ${profile.followerCount} | Posts: ${profile.postCount}\n`);
    } catch (err) {
      console.error(`   ❌ 失敗: ${err.message}`);
      results.push({
        ...target,
        profile: { avatarUrl: '', displayName: '', bio: '', postCount: 'N/A', followerCount: 'N/A', followingCount: 'N/A' },
        posts: [],
        fetchedAt: new Date().toISOString(),
        error: err.message,
      });
    }
  }

  await browser.close();

  const outDir = dirname(OUTPUT_PATH);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`💾 數據已儲存至: ${OUTPUT_PATH}`);
  console.log(`📦 共 ${results.length} 個 IG 帳號`);
}

main().catch((err) => {
  console.error('FATAL:', err);
  process.exit(1);
});
