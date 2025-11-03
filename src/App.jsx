import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CultureShowcase from './components/CultureShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 text-neutral-800">
      <Navbar />
      <main>
        <Hero />
        <CultureShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
