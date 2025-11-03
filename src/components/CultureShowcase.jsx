import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Brain, Shield } from 'lucide-react';

const heritageItems = [
  {
    title: 'Wayang Stories',
    desc: 'Discover epics and characters retold with interactive visuals and audio.',
    accent: 'from-amber-500/20 to-amber-700/20',
    emoji: '🎭',
  },
  {
    title: 'Batik Motifs',
    desc: 'Search patterns, regions, and symbolism with AI-guided insights.',
    accent: 'from-rose-500/20 to-rose-700/20',
    emoji: '🧵',
  },
  {
    title: 'Gamelan Soundscape',
    desc: 'Traverse instruments and rhythms with generative explanations.',
    accent: 'from-orange-500/20 to-orange-700/20',
    emoji: '🎶',
  },
  {
    title: 'Pantun & Proverbs',
    desc: 'Explore poetic wisdom across regions with context-aware translations.',
    accent: 'from-emerald-500/20 to-emerald-700/20',
    emoji: '📜',
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Knowledge Graph',
    desc: 'Linked references across arts, regions, eras, and oral histories.',
  },
  {
    icon: Globe,
    title: 'Multilingual',
    desc: 'Bahasa Indonesia, regional languages, and English support.',
  },
  {
    icon: Brain,
    title: 'Generative Guides',
    desc: 'Explain complex topics with responsible AI assistance.',
  },
  {
    icon: Shield,
    title: 'Cultural Stewardship',
    desc: 'Attribution, source provenance, and community governance.',
  },
];

function CultureShowcase() {
  return (
    <section id="showcase" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A living tapestry of Indonesian culture
          </h2>
          <p className="mt-3 text-neutral-700">
            Curated collections meet modern exploration tools so anyone can learn, contribute,
            and experience heritage with depth and dignity.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {heritageItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
              <div className="relative p-5">
                <div className="text-3xl">{item.emoji}</div>
                <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="features" className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-amber-100 bg-white/80 p-6 shadow-sm"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100 text-amber-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-semibold">{f.title}</h4>
              <p className="mt-1 text-sm text-neutral-700">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CultureShowcase;
