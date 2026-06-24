'use client';

import {Moon, Sun} from 'lucide-react';
import {useEffect, useState} from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted) {
    return (
      <button
        className="relative h-10 w-10 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-green-500/50 hover:bg-green-500/10 transition-all"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-foreground dark:text-muted-foreground" />
      ) : (
        <Sun className="h-5 w-5 text-green-500 dark:text-foreground" />
      )}
    </button>
  );
}
