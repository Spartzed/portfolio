'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {experience} from '@/lib/data';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Building2, Calendar} from 'lucide-react';

export function Experience() {
  const t = useTranslations('experience');

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {x: -50, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 0.5},
    },
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-100px'}}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent md:-translate-x-1/2" />

            {/* Experience Items */}
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-zinc-950 -translate-x-[7px] md:-translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0
                      ? 'md:pr-12'
                      : 'md:pl-12'
                  }`}
                >
                  <Card className="border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {exp.position}
                            </h3>
                            <p className="text-purple-400">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>

                      <p className="text-zinc-400 mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-zinc-800 bg-zinc-950/50 text-zinc-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
