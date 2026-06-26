import { XCircle, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export function TrustBadge({ icon, text, className }: TrustBadgeProps) {
  return (
    <div className={cn(
      'inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-4 py-2 text-sm font-semibold text-foreground shadow-soft-panel backdrop-blur-xl',
      className
    )}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

export function TrustBadges({ language }: { language: Language }) {
  const lang = t(language);
  const badges = [
    { icon: <XCircle className="w-4 h-4 text-brand-orange" />, text: lang.global.trust.cancelAnytime },
    { icon: <CreditCard className="w-4 h-4 text-brand-pink" />, text: lang.global.trust.securePayment },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {badges.map((badge, i) => (
        <TrustBadge key={i} icon={badge.icon} text={badge.text} />
      ))}
    </div>
  );
}
