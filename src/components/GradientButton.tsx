import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  variant?: 'gradient' | 'outline-black' | 'ghost';
  size?: 'sm' | 'default' | 'lg' | 'xl';
  children: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function GradientButton({
  variant = 'gradient',
  size = 'default',
  children,
  href,
  to,
  className,
  onClick,
  disabled = false,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'h-9 px-4 text-sm rounded-full',
    default: 'h-11 px-6 text-base rounded-full',
    lg: 'h-12 px-8 text-base rounded-full',
    xl: 'h-14 px-10 text-lg rounded-full',
  };

  const variantClasses = {
    gradient: 'btn-gradient',
    'outline-black': 'bg-white text-brand-dark border border-brand-dark/20 shadow-soft-panel hover:border-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-200',
    ghost: 'bg-transparent text-brand-dark hover:bg-muted transition-colors duration-200',
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (to) {
    return <Link to={to} className={baseClasses}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={baseClasses}>{children}</a>;
  }

  return <button type="button" onClick={onClick} disabled={disabled} className={baseClasses}>{children}</button>;
}
