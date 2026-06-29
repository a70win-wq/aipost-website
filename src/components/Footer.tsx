import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import type { Language } from '@/types';
import { t } from '@/i18n';

const WHATSAPP_NUMBER = '85265451747';
const WHATSAPP_MSG = '你根，查詢AIPOST服務';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const lang = t(language);

  return (
    <footer className="border-t border-border/70 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">AI</span>
              <span className="text-xl font-bold text-gradient">AIPOST</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{lang.global.footer.description}</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{lang.global.footer.product}</h3>
            <div className="flex flex-col gap-2">
              <Link to="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-brand-pink">{lang.global.footer.productLinks.pricing}</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-brand-pink">{lang.global.footer.productLinks.start}</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{lang.global.footer.company}</h3>
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-brand-pink">{lang.global.footer.companyLinks.terms}</Link>
              <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-brand-pink">{lang.global.footer.companyLinks.privacy}</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-brand-pink">{lang.global.footer.companyLinks.contact}</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{language === 'zh' ? '信任與聯絡' : 'Trust & Contact'}</h3>
            <div className="mb-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-brand-orange" />
                {lang.global.trust.securePayment}
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-pink">
              <img src="/whatsapp-logo.png" alt="WhatsApp" className="h-4 w-4" />
              {language === 'zh' ? 'Whatsapp查詢' : 'WhatsApp Inquiry'}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          {lang.global.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
