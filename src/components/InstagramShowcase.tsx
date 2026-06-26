import { useEffect, useRef, useState, useCallback } from 'react';
import { Instagram, ExternalLink, User } from 'lucide-react';
import type { Language } from '@/types';

// -----------------------------------------------------------
//  Types
// -----------------------------------------------------------

interface IgProfileData {
  handle: string;
  igUrl: string;
  avatarUrl?: string;
  postCount?: string;
  followerCount?: string;
}

interface Props {
  language: Language;
}

// -----------------------------------------------------------
//  Constants
// -----------------------------------------------------------
const DATA_URL = '/data/ig-cases.json';
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 min

// -----------------------------------------------------------
//  Utils
// -----------------------------------------------------------

function openInstagram(igUrl: string, handle: string) {
  const cleanHandle = handle.startsWith('@') ? handle : `@${handle}`;
  const username = cleanHandle.replace('@', '');

  // Try deep link first (opens IG app on mobile), fallback to web
  const deepLink = `instagram://user?username=${username}`;
  const webLink = igUrl || `https://www.instagram.com/${username}/`;

  const start = Date.now();
  window.open(deepLink, '_blank');

  // If deep link doesn't open within 500ms, open web
  setTimeout(() => {
    if (Date.now() - start < 600) {
      window.open(webLink, '_blank');
    }
  }, 500);
}

// -----------------------------------------------------------
//  Skeleton
// -----------------------------------------------------------

function Skeleton({ language }: { language: Language }) {
  return (
    <div className="animate-pulse">
      <div className="bg-white rounded-[1.5rem] border border-border/60 shadow-soft-panel p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-[96px] h-[96px] rounded-full bg-muted mx-auto" />
          <div className="mt-4 h-5 w-28 bg-muted rounded mx-auto" />
          <div className="mt-5 flex gap-6">
            <div className="h-4 w-16 bg-muted rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
          </div>
          <div className="mt-5 h-10 w-36 bg-muted rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------
//  Profile card (no data)
// -----------------------------------------------------------

function EmptyCard({ language }: { language: Language }) {
  return (
    <div className="bg-white rounded-[1.5rem] border border-border/60 shadow-soft-panel p-8 flex flex-col items-center text-center">
      <div className="w-[96px] h-[96px] rounded-full bg-gradient-to-br from-pink-400 via-orange-400 to-purple-500 p-[3px]">
        <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
          <User className="w-10 h-10 text-muted-foreground/40" />
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {language === 'zh' ? '載入中…' : 'Loading…'}
      </p>
    </div>
  );
}

// -----------------------------------------------------------
//  Profile card (with data)
// -----------------------------------------------------------

function ProfileCard({ data, language }: { data: IgProfileData; language: Language }) {
  const handleName = data.handle.startsWith('@') ? data.handle : `@${data.handle}`;
  const cleanName = handleName.replace('@', '');
  const avatarUrl = data.avatarUrl;

  return (
    <div className="bg-white rounded-[1.5rem] border border-border/60 shadow-soft-panel overflow-hidden">
      <div className="p-8 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-[96px] h-[96px] rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-purple-600 p-[3px] shrink-0">
          <div className="w-full h-full rounded-full bg-white overflow-hidden">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={cleanName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = (e.target as HTMLImageElement).nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
            ) : null}
            <div
              className="w-full h-full rounded-full bg-brand-pink-light/40 flex items-center justify-center"
              style={{ display: avatarUrl ? 'none' : 'flex' }}
            >
              <Instagram className="w-9 h-9 text-brand-pink/50" />
            </div>
          </div>
        </div>

        {/* Username */}
        <div className="mt-4 flex items-center gap-1.5">
          <span className="text-lg font-bold text-brand-ink">{handleName}</span>
        </div>

        {/* Stats row */}
        <div className="mt-5 flex items-center justify-center gap-6 text-center">
          <div>
            <div className="text-lg font-bold text-brand-ink">
              {data.postCount ?? '—'}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              {language === 'zh' ? '則帖子' : 'posts'}
            </div>
          </div>
          <div className="w-px h-8 bg-border/60" />
          <div>
            <div className="text-lg font-bold text-brand-ink">
              {data.followerCount ?? '—'}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              {language === 'zh' ? '位追踪者' : 'followers'}
            </div>
          </div>
        </div>

        {/* Follow button */}
        <button
          onClick={() => openInstagram(data.igUrl, data.handle)}
          className="mt-5 inline-flex items-center gap-2 px-8 py-2.5 rounded-full bg-[#0095F6] text-white text-sm font-semibold hover:bg-[#1877F2] transition-colors shadow-sm active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          {language === 'zh' ? '追蹤' : 'Follow'}
        </button>
      </div>

      {/* Bottom hint */}
      <div className="border-t border-border/40 bg-muted/30 px-4 py-2 flex items-center justify-center gap-1.5">
        <Instagram className="w-3 h-3 text-muted-foreground/50" />
        <span className="text-[10px] text-muted-foreground/50">
          instagram.com/{cleanName}
        </span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------
//  Main
// -----------------------------------------------------------

export function InstagramShowcase({ language }: Props) {
  const [profile, setProfile] = useState<IgProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch(DATA_URL);
      if (!res.ok) throw new Error('Failed to fetch');
      const cases = await res.json();
      if (!Array.isArray(cases) || cases.length === 0) {
        setError(true);
        return;
      }
      const first = cases[0];
      setProfile({
        handle: first.handle || '@choliverhk',
        igUrl: first.url || first.igUrl || 'https://www.instagram.com/choliverhk/',
        avatarUrl: first.profile?.avatarUrl || first.avatarUrl,
        postCount: first.profile?.postCount || first.postCount,
        followerCount: first.profile?.followerCount || first.followerCount,
      });
      setError(false);
    } catch {
      // Keep previous data on refresh failure
      if (!profile) setError(true);
    } finally {
      setLoading(false);
    }
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchProfile();
    intervalRef.current = setInterval(fetchProfile, REFRESH_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fetchProfile]);

  if (loading) {
    return (
      <div className="w-full max-w-[420px] mx-auto">
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-pink/20 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-pink shadow-sm backdrop-blur-xl">
            <Instagram className="w-3 h-3" />
            {language === 'zh' ? '真實客戶 IG 案例' : 'Real Client IG Cases'}
          </span>
        </div>
        <Skeleton language={language} />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="w-full max-w-[420px] mx-auto">
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-pink/20 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-pink shadow-sm backdrop-blur-xl">
            <Instagram className="w-3 h-3" />
            {language === 'zh' ? '真實客戶 IG 案例' : 'Real Client IG Cases'}
          </span>
        </div>
        <EmptyCard language={language} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[420px] mx-auto">
      {/* Section label */}
      <div className="mb-4 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-pink/20 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-pink shadow-sm backdrop-blur-xl">
          <Instagram className="w-3 h-3" />
          {language === 'zh' ? '真實客戶 IG 案例' : 'Real Client IG Cases'}
        </span>
      </div>

      {/* Profile card */}
      <ProfileCard data={profile} language={language} />

      {/* Data freshness */}
      <p className="mt-2 text-center text-[10px] text-muted-foreground/40">
        {language === 'zh' ? '追蹤者數字每 5 分鐘自動更新' : 'Follower count auto-refreshes every 5 min'}
      </p>
    </div>
  );
}
