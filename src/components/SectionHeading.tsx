import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  level = 'h2',
  className,
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      {label && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink-light/65 px-3 py-1">
          <span className="text-sm font-semibold text-brand-pink">{label}</span>
        </div>
      )}
      <Heading className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
        {title}
      </Heading>
      {subtitle && (
        <p className={cn('mt-4 text-lg leading-relaxed text-muted-foreground', align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
