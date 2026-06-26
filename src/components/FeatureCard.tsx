import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: 'pink' | 'orange' | 'purple';
  size?: 'default' | 'large';
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  color = 'pink',
  size = 'default',
  className,
}: FeatureCardProps) {
  const colorMap = {
    pink: { bg: 'bg-brand-pink-light', icon: 'text-brand-pink' },
    orange: { bg: 'bg-brand-orange-light', icon: 'text-brand-orange' },
    purple: { bg: 'bg-brand-purple-light', icon: 'text-brand-purple' },
  };

  const { bg, icon: iconColor } = colorMap[color];

  return (
    <div className={cn(
      'rounded-[1.5rem] border border-border/70 bg-white/90 shadow-soft-panel backdrop-blur-xl card-lift',
      size === 'large' ? 'p-8 md:col-span-2' : 'p-6',
      className
    )}>
      <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl', bg)}>
        <div className={iconColor}>{icon}</div>
      </div>
      <h3 className={cn('mt-5 font-bold', size === 'large' ? 'text-2xl' : 'text-lg')}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
