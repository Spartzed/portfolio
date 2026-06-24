'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {Link} from '@/i18n/routing';
import {Menu, X} from 'lucide-react';
import {LanguageToggle} from './LanguageToggle';
import {ThemeToggle} from './ThemeToggle';

export function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {href: '#about', label: t('about')},
    {href: '#skills', label: t('skills')},
    {href: '#experience', label: t('experience')},
    {href: '#projects', label: t('projects')},
    {href: '#contact', label: t('contact')},
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            <span className="text-purple-500">&lt;</span>MRC
            <span className="text-purple-500">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-zinc-400" />
              ) : (
                <Menu className="h-5 w-5 text-zinc-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
