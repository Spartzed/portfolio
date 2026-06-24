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
      className="relative h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors disabled:opacity-50"
      aria-label="Toggle language"
    >
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-zinc-400">
        {locale === 'pt' ? 'PT' : 'EN'}
      </span>
      <Globe className="h-5 w-5 text-zinc-400" />
    </button>
  );
}
