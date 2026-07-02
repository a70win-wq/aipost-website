import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GradientButton } from '@/components/GradientButton';
import { getPaymentLink, isExternalLink } from '@/config/payment';
import type { PricingPlan, Language } from '@/types';

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  language: Language;
  className?: string;
}

export function PricingCard({ plan, isAnnual, language, className }: PricingCardProps) {
  const price = isAnnual ? plan.priceAnnual * 12 : plan.priceMonthly;
  const priceSuffix = isAnnual
    ? (language === 'zh' ? '/年' : '/yr')
    : (language === 'zh' ? '/月' : '/mo');
  const name = language === 'zh' ? plan.nameZh : plan.nameEn;
  const features = language === 'zh' ? plan.featuresZh : plan.featuresEn;
  const target = language === 'zh' ? plan.targetZh : plan.targetEn;
  const tasks = language === 'zh' ? plan.tasksZh : plan.tasksEn;

  return (
    <div className={cn(
      'relative rounded-[1.5rem] bg-white/90 p-8 shadow-soft-panel backdrop-blur-xl card-lift',
      plan.popular
        ? 'border border-brand-pink/50 ring-4 ring-brand-pink/10'
        : 'border border-border/70',
      className
    )}>
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 right-6 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-soft-panel">
          <Star className="w-3 h-3 inline mr-1" />
          {language === 'zh' ? '最受歡迎' : 'Most Popular'}
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{target}</p>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-brand-ink">HK${price.toLocaleString()}</span>
          <span className="text-muted-foreground text-sm">
            {priceSuffix}
          </span>
        </div>
        {isAnnual && (
          <p className="text-xs text-muted-foreground mt-1">
            {language === 'zh'
              ? `即 HK$${plan.priceAnnual}/月 ｜ 原價 HK$${plan.priceMonthly}/月，年費節省 20%`
              : `HK$${plan.priceAnnual}/mo ｜ Originally HK$${plan.priceMonthly}/mo, save 20% with annual`}
          </p>
        )}
      </div>

      {/* Tasks */}
      <div className="mt-4 rounded-2xl bg-muted/70 px-4 py-3 text-sm font-semibold">
        {tasks}
      </div>

      {/* Features */}
      <div className="mt-6 flex flex-col gap-3">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm leading-relaxed">
            <Check className={cn('h-4 w-4 shrink-0', plan.popular ? 'text-brand-pink' : 'text-brand-purple')} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8">
        {(() => {
          const link = getPaymentLink(plan.id, isAnnual);
          const external = isExternalLink(link);
          return (
            <GradientButton
              variant={plan.popular ? 'gradient' : 'outline-black'}
              size="default"
              {...(external ? { href: link } : { to: link })}
              className="w-full"
            >
              {language === 'zh' ? '立即訂閱' : 'Subscribe Now'}
            </GradientButton>
          );
        })()}
      </div>
    </div>
  );
}
