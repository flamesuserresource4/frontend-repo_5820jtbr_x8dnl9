import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-orange-500" />
          <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 bg-clip-text text-transparent">
            TITIAN.AI
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#about" className="hover:text-amber-700 transition-colors">About</a>
          <a href="#showcase" className="hover:text-amber-700 transition-colors">Showcase</a>
          <a href="#features" className="hover:text-amber-700 transition-colors">Features</a>
          <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
        </nav>
        <div className="hidden sm:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 hover:from-amber-700 hover:via-rose-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Request Access
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
