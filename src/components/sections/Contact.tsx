'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {motion} from 'framer-motion';
import {personalInfo} from '@/lib/data';
import {Card, CardContent} from '@/components/ui/card';
import {Mail, MapPin, CheckCircle} from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');
  const tf = useTranslations('contact.form');
  const ti = useTranslations('contact.info');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({name: '', email: '', message: ''});
    }, 3000);
  };

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

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

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

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-zinc-500 text-sm mb-1">{ti('email')}</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-zinc-500 text-sm mb-1">{ti('location')}</p>
                <p className="text-white">{personalInfo.location}</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-zinc-500 text-sm mb-1">{ti('availability')}</p>
                <p className="text-green-400">{personalInfo.availability}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-zinc-400 text-sm mb-2">
                      {tf('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full h-12 px-4 rounded-lg border border-zinc-800 bg-zinc-950/50 text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none transition-colors"
                      placeholder={tf('name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-zinc-400 text-sm mb-2">
                      {tf('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full h-12 px-4 rounded-lg border border-zinc-800 bg-zinc-950/50 text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none transition-colors"
                      placeholder={tf('email')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-zinc-400 text-sm mb-2">
                      {tf('message')}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950/50 text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none transition-colors resize-none"
                      placeholder={tf('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium hover:from-purple-600 hover:to-purple-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        {tf('sending')}
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        {tf('success')}
                      </>
                    ) : (
                      tf('submit')
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
