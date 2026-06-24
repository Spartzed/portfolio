'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {personalInfo, skills, stats} from '@/lib/data';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent} from '@/components/ui/card';

export function About() {
  const t = useTranslations('about');
  const ts = useTranslations('skills');

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillsByCategory = [
    {key: 'frontend', label: ts('frontend'), items: skills.frontend},
    {key: 'backend', label: ts('backend'), items: skills.backend},
    {key: 'database', label: ts('database'), items: skills.database},
    {key: 'tools', label: ts('tools'), items: skills.tools},
    {key: 'soft', label: ts('soft'), items: skills.soft.map(s => ({name: s, level: 100}))},
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-100px'}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors"
              >
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            {skillsByCategory.map((category) => (
              <div key={category.key}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-1 w-8 bg-purple-500 rounded-full" />
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="border-zinc-800 bg-zinc-950/50 text-zinc-300 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
