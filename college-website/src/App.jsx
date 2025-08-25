// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProgramsSection from './components/ProgramsSection';
import CampusLife from './components/CampusLife';
import TestimonialsSection from './components/TestimonialsSection';
import AdmissionsSection from './components/AdmissionsSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header isScrolled={isScrolled} />
      <Hero />
      <StatsSection />
      <ProgramsSection />
      <CampusLife />
      <TestimonialsSection />
      <AdmissionsSection />
      <Footer />
    </div>
  );
};

export default App;