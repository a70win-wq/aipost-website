import { chromium } from 'playwright';

const URL = 'http://localhost:5200/';
const OUTPUT = '/Users/chriswong/Library/CloudStorage/GoogleDrive-a70win@gmail.com/我的雲端硬碟/AIPOST.com/app/public/mobile-screenshot.png';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
});

const page = await context.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
// Scroll through the page to trigger lazy-loaded sections
await page.evaluate(async () => {
  await new Promise(resolve => {
    let totalHeight = 0;
    const distance = window.innerHeight;
    const timer = setInterval(() => {
      const scrollHeight = document.body.scrollHeight;
      window.scrollBy(0, distance);
      totalHeight += distance;
      if (totalHeight >= scrollHeight) {
        clearInterval(timer);
        resolve();
      }
    }, 300);
  });
});
// Scroll back to top
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
// Take full page screenshot
await page.screenshot({ path: OUTPUT, fullPage: true });
console.log(`Screenshot saved to: ${OUTPUT}`);
await browser.close();
