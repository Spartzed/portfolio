'use client';

import {useTranslations} from 'next-intl';
import {ArrowDown, Mail} from 'lucide-react';
import {motion} from 'framer-motion';
import {Link} from '@/i18n/routing';
import {GithubIcon, LinkedinIcon} from '@/components/ui/icons';
import {useData} from '@/lib/useData';

export function Hero() {
  const t = useTranslations('hero');
  const {personalInfo} = useData();

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5},
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-background to-background dark:via-zinc-950 dark:to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-green-500/40"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) + 500,
              opacity: 0,
            }}
            animate={{
              y: [null, -(typeof window !== 'undefined' ? window.innerHeight + 500 : 1500)],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 p-[2px] shadow-lg shadow-green-500/20 dark:shadow-green-500/20">
                <div className="h-full w-full rounded-2xl bg-background flex items-center justify-center">
                  <span className="text-5xl font-bold text-green-500">MR</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-green-500 border-4 border-background flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="text-xs">✓</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-zinc-400 text-lg mb-2 font-medium">
            {t('greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#skills"
              className="h-12 px-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:from-green-600 hover:to-emerald-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
            >
              {t('cta')}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="h-12 px-8 rounded-full border border-green-500/50 text-green-400 font-medium hover:bg-green-500/10 transition-all flex items-center gap-2"
            >
              {t('contact')}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-green-500/50 hover:text-green-500 hover:scale-110 transition-all flex items-center justify-center text-muted-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-green-500/50 hover:text-green-500 hover:scale-110 transition-all flex items-center justify-center text-muted-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="h-12 w-12 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-green-500/50 hover:text-green-500 hover:scale-110 transition-all flex items-center justify-center text-muted-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{
          opacity: [0, 1, 0],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#skills" className="text-muted-foreground hover:text-green-500 transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}
