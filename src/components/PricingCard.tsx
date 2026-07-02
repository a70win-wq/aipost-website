import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GradientButton } from '@/components/GradientButton';
import { createCheckoutSession, getSubscriptionFallbackLink } from '@/config/payment';
import type { PricingPlan, Language } from '@/types';

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  language: Language;
  className?: string;
}

export function PricingCard({ plan, isAnnual, language, className }: PricingCardProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
  const priceSuffix = isAnnual
    ? (language === 'zh' ? '/年' : '/yr')
    : (language === 'zh' ? '/月' : '/mo');
  const name = language === 'zh' ? plan.nameZh : plan.nameEn;
  const features = language === 'zh' ? plan.featuresZh : plan.featuresEn;
  const target = language === 'zh' ? plan.targetZh : plan.targetEn;
  const tasks = language === 'zh' ? plan.tasksZh : plan.tasksEn;

  const handleSubscribe = async () => {
    if (isCheckingOut) return;

    setIsCheckingOut(true);
    try {
      const checkoutUrl = await createCheckoutSession(plan.id, isAnnual);
      window.location.assign(checkoutUrl);
    } catch (error) {
      console.error(error);
      window.location.assign(getSubscriptionFallbackLink(plan.id, isAnnual));
    }
  };

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
              ? `月費 HK$${plan.priceMonthly}，年繳 HK$${price.toLocaleString()}（買 11 個月送 1 個月）`
              : `HK$${plan.priceMonthly}/mo, HK$${price.toLocaleString()} billed yearly (pay 11 months, get 1 month free)`}
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
        <GradientButton
          variant={plan.popular ? 'gradient' : 'outline-black'}
          size="default"
          onClick={handleSubscribe}
          disabled={isCheckingOut}
          className="w-full"
        >
          {isCheckingOut
            ? (language === 'zh' ? '前往 Stripe...' : 'Opening Stripe...')
            : (language === 'zh' ? '立即訂閱' : 'Subscribe Now')}
        </GradientButton>
      </div>
    </div>
  );
}
