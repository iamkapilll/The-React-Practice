import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Campus', href: '#campus' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Stellar University
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-4 py-2 rounded-lg transition-colors ${
              isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/10'
            }`}>
              Student Login
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full text-left px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                  Student Login
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
