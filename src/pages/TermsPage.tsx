import { ScrollReveal } from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface TermsPageProps {
  language: Language;
}

export function TermsPage({ language }: TermsPageProps) {
  const lang = t(language);
  const terms = lang.terms;

  return (
    <main className="page-shell pt-24 pb-16">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl font-bold text-gradient">{terms.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{terms.lastUpdated}</p>
          </ScrollReveal>

          <div className="mt-10 flex flex-col gap-4">
            {terms.sections.map((section: { title: string; content: string }, i: number) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-[1.25rem] border border-border/70 bg-white/[0.85] p-6 shadow-soft-panel backdrop-blur-xl">
                  <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-8 text-center">
              <Link to="/" className="text-sm text-brand-pink hover:underline">
                {language === 'zh' ? '返回首頁' : 'Back to Home'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
