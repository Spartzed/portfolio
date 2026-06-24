'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Badge} from '@/components/ui/badge';
import {Building2, Calendar, MapPin, ExternalLink} from 'lucide-react';
import {useData} from '@/lib/useData';

export function Experience() {
  const t = useTranslations('experience');
  const {experience} = useData();

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
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-500/50 to-transparent md:-translate-x-1/2" />

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
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-zinc-950 shadow-lg shadow-green-500/50 -translate-x-[7px] md:-translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0
                      ? 'md:pr-12'
                      : 'md:pl-12'
                  }`}
                >
                  <div className="border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/5 rounded-xl p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="h-5 w-5 text-green-400" />
                          <h3 className="text-xl font-semibold text-white">
                            {exp.position}
                          </h3>
                        </div>
                        <a
                          href={exp.companySite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-sm font-medium"
                        >
                          {exp.company}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-4 leading-relaxed text-left">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-zinc-800/50 bg-zinc-950/30 text-zinc-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
