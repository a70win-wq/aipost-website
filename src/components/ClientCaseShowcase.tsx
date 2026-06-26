import { Instagram, ExternalLink } from 'lucide-react';
import type { IgCase, Language } from '@/types';

interface ClientCaseShowcaseProps {
  cases: IgCase[];
  language: Language;
}

export function ClientCaseShowcase({ cases, language }: ClientCaseShowcaseProps) {
  if (!cases || cases.length === 0) return null;

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cases.map((item) => {
          const handleName = item.handle.startsWith('@') ? item.handle.slice(1) : item.handle;

          return (
            <a
              key={item.id}
              href={item.igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-brand-pink/30 transition-all duration-300 overflow-hidden"
            >
              {/* Header with gradient */}
              <div className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-brand-pink-light/30 via-orange-100/20 to-purple-100/20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-purple-600 p-[2.5px] shrink-0">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-brand-pink" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-foreground group-hover:text-brand-pink transition-colors">
                      {handleName}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" title="AIPOST 自動發佈中" />
                    <span className="px-2 py-0.5 rounded-full bg-brand-pink-light/80 text-[10px] font-semibold text-brand-pink">
                      AIPOST
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {language === 'zh' ? item.descriptionZh : item.descriptionEn}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-brand-pink shrink-0 transition-colors" />
              </div>

              {/* Category tag */}
              <div className="px-5 py-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Instagram className="w-3.5 h-3.5" />
                  instagram.com/{handleName}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-muted text-[10px] font-medium text-muted-foreground">
                  {language === 'zh' ? item.categoryZh : item.categoryEn}
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {language === 'zh'
          ? '點擊查看客戶真實 IG 主頁，每日由 AIPOST 自動發佈'
          : 'Click to view real client IG profile, auto-posted daily by AIPOST'}
      </p>
    </div>
  );
}
