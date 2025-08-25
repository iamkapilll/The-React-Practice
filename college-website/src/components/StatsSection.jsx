// src/components/StatsSection.js
import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: "50,000+", label: "Students", icon: Users },
    { number: "200+", label: "Programs", icon: BookOpen },
    { number: "95%", label: "Employment Rate", icon: Award },
    { number: "150+", label: "Countries", icon: Globe }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;