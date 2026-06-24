'use client';

import {useTranslations} from 'next-intl';
import {Mail} from 'lucide-react';
import {GithubIcon, LinkedinIcon} from '@/components/ui/icons';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Marcus Rodrigues. {t('rights')}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/marcusviniciusr"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 hover:text-purple-400 transition-colors flex items-center justify-center text-zinc-400"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-rodrigues-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 hover:text-purple-400 transition-colors flex items-center justify-center text-zinc-400"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:marcusr.dev@gmail.com"
              className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 hover:text-purple-400 transition-colors flex items-center justify-center text-zinc-400"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
