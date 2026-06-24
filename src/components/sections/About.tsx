'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent} from '@/components/ui/card';
import {GraduationCap, Languages} from 'lucide-react';
import {useData} from '@/lib/useData';

export function About() {
  const t = useTranslations('about');
  const ts = useTranslations('skills');
  const {skills, stats, education, languages} = useData();

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
    {key: 'frontend', label: ts('frontend'), items: skills.frontend, icon: '🎨'},
    {key: 'backend', label: ts('backend'), items: skills.backend, icon: '⚙️'},
    {key: 'database', label: ts('database'), items: skills.database, icon: '🗄️'},
    {key: 'tools', label: ts('tools'), items: skills.tools, icon: '🔧'},
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/5"
              >
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-500 dark:text-green-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-10 mb-16">
            {skillsByCategory.map((category) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.label}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="border-border/50 bg-card/30 text-foreground hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-500 dark:hover:text-green-400 transition-all cursor-default px-3 py-1.5"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="h-6 w-6 text-green-500 dark:text-green-400" />
                <h3 className="text-xl font-semibold text-foreground">Formação</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id} className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="pt-4">
                      <h4 className="text-foreground font-medium mb-1">{edu.degree}</h4>
                      <a
                        href={edu.institutionSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 dark:text-green-400 text-sm hover:text-green-400 dark:hover:text-green-300 transition-colors"
                      >
                        {edu.institution}
                      </a>
                      <p className="text-muted-foreground text-sm mt-2">{edu.period}</p>
                      <p className="text-muted-foreground/80 text-sm mt-1">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-5">
                <Languages className="h-6 w-6 text-green-500 dark:text-green-400" />
                <h3 className="text-xl font-semibold text-foreground">Idiomas</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground font-medium">{lang.name}</span>
                        <span className="text-muted-foreground text-sm">{lang.level}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
