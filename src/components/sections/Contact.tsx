'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Card, CardContent} from '@/components/ui/card';
import {Mail, MapPin, MessageCircle, Send} from 'lucide-react';
import {useData} from '@/lib/useData';

export function Contact() {
  const t = useTranslations('contact');
  const {personalInfo} = useData();

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

  const whatsappNumber = '5541995908607';
  const whatsappMessage = encodeURIComponent('Olá Marcus! Vi seu portfolio e gostaria de conversar.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailLink = `mailto:${personalInfo.email}?subject=Contato via Portfolio&body=Olá Marcus!`;

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-100px'}}
          className="max-w-4xl mx-auto relative z-10"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-zinc-400 text-lg">{t('description')}</p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-8">
            {/* WhatsApp Card */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-zinc-400 text-center text-sm mb-4">
                    {personalInfo.phone}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-medium">
                    <span>Start chat</span>
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Email Card */}
            <a
              href={emailLink}
              className="group"
            >
              <Card className="h-full border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Mail className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">
                    Email
                  </h3>
                  <p className="text-zinc-400 text-center text-sm mb-4">
                    {personalInfo.email}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-medium">
                    <span>Send email</span>
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="border-zinc-800/30 bg-zinc-950/30 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
