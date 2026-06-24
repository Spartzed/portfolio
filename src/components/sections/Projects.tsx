'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {projects} from '@/lib/data';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {ExternalLink} from 'lucide-react';
import {GithubIcon} from '@/components/ui/icons';

export function Projects() {
  const t = useTranslations('projects');

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {y: 30, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5},
    },
  };

  return (
    <section id="projects" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-100px'}}
          className="max-w-6xl mx-auto relative z-10"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{y: -5}}
              >
                <Card className="h-full border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm hover:border-green-500/30 transition-all group hover:shadow-lg hover:shadow-green-500/5">
                  <CardHeader>
                    <div className="h-48 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-700/20 mb-4 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-700/30 transition-all relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-6xl font-bold text-green-400/50 group-hover:text-green-400 transition-all relative z-10">
                        {String(project.id).padStart(2, '0')}
                      </span>
                    </div>
                    <CardTitle className="text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-zinc-800/50 bg-zinc-950/30 text-zinc-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-10 rounded-lg border border-zinc-800/50 bg-zinc-950/30 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/10 transition-all flex items-center justify-center gap-2 text-sm text-zinc-400"
                      >
                        <GithubIcon className="h-4 w-4" />
                        {t('github')}
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 h-10 rounded-lg border border-zinc-800/50 bg-zinc-950/30 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/10 transition-all flex items-center justify-center gap-2 text-sm text-zinc-400"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('demo')}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
