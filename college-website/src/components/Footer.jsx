import React from 'react';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const links = {
    "Academics": ["Programs", "Faculty", "Research", "Library", "Calendar"],
    "Campus Life": ["Housing", "Dining", "Recreation", "Organizations", "Events"],
    "Admissions": ["Apply", "Visit", "Tuition", "Financial Aid", "International"],
    "About": ["Mission", "History", "Leadership", "News", "Careers"]
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Stellar University</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering minds, advancing knowledge, and shaping the future through excellence in education and research.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                123 University Ave, Education City, EC 12345
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                info@stellaruniversity.edu
              </div>
            </div>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Stellar University. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
