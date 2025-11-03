import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t border-amber-100 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-orange-500" />
            <span className="text-base font-semibold tracking-tight">TITIAN.AI</span>
          </div>
          <p className="text-sm text-neutral-600 max-w-2xl">
            Built with love for Nusantara. We collaborate with cultural institutions, researchers,
            and communities to preserve and reimagine heritage for future generations.
          </p>
          <a
            href="mailto:hello@titian.ai"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 hover:from-amber-700 hover:via-rose-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Get in touch
          </a>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} TITIAN.AI. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
