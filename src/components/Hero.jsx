import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs text-amber-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
            <span>Bridging Heritage with Intelligent Design</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Where Indonesia’s traditions meet modern AI
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 max-w-xl">
            TITIAN.AI is a cultural platform that preserves and reimagines Indonesia’s rich heritage
            through intelligent curation, multimodal search, and immersive storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white shadow-sm bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 hover:from-amber-700 hover:via-rose-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Explore Heritage
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-amber-700 bg-amber-100/70 hover:bg-amber-200/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <Play className="mr-2 h-4 w-4" />
              See how it works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-amber-100 bg-white/60"
        >
          <Spline
            scene="https://prod.spline.design/uU0o2wFzZr2nU3eQ/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
