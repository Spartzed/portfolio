'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {Globe} from 'lucide-react';
import {useTransition} from 'react';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === 'pt' ? 'en' : 'pt';
    startTransition(() => {
      router.replace(pathname, {locale: newLocale});
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="relative h-10 w-[70px] rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-green-500/50 transition-all disabled:opacity-50 group"
      aria-label="Toggle language"
    >
      <div className="flex items-center justify-center gap-1.5">
        <Globe className="h-4 w-4 text-muted-foreground group-hover:text-green-500 transition-colors" />
        <span className="text-sm font-semibold text-foreground">
          {locale === 'pt' ? 'PT' : 'EN'}
        </span>
      </div>
    </button>
  );
}
