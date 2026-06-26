
interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function StepCard({ step, title, description, icon }: StepCardProps) {
  return (
    <div className="relative flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-white/[0.88] p-6 shadow-soft-panel backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-bold text-brand-pink">
          {String(step).padStart(2, '0')}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft-panel">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export function StepConnector() {
  return (
    <div className="hidden items-center px-2 md:flex">
      <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple opacity-40" />
    </div>
  );
}
