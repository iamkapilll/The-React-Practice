// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Shape Your Future",
      subtitle: "At Stellar University",
      description: "Join thousands of students pursuing excellence in academics, research, and innovation at one of the world's leading universities.",
      cta: "Explore Programs",
      bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"
    },
    {
      title: "World-Class Education",
      subtitle: "Global Recognition",
      description: "Our programs are recognized worldwide, with faculty from top institutions and partnerships with leading companies.",
      cta: "Learn More",
      bg: "bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900"
    },
    {
      title: "Innovation Hub",
      subtitle: "Research Excellence",
      description: "Be part of groundbreaking research that shapes the future of technology, medicine, and society.",
      cta: "Research Centers",
      bg: "bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].bg}`}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-4 animate-fade-in">
            {slides[currentSlide].subtitle}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-slide-up">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              {slides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </button>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;