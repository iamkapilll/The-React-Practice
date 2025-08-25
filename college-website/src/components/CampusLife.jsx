import React from 'react';
import { Shield, Users, Globe, Zap } from 'lucide-react';

const CampusLife = () => {
  const features = [
    {
      title: "Modern Facilities",
      description: "State-of-the-art laboratories, libraries, and recreational facilities",
      icon: Shield
    },
    {
      title: "Student Organizations",
      description: "Over 200 clubs and organizations to explore your interests",
      icon: Users
    },
    {
      title: "Global Community",
      description: "Students from 150+ countries creating a diverse learning environment",
      icon: Globe
    },
    {
      title: "Innovation Labs",
      description: "Cutting-edge spaces for research, development, and entrepreneurship",
      icon: Zap
    }
  ];

  return (
    <section id="campus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Campus Life</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience a vibrant campus community that nurtures personal growth, academic excellence, and lifelong friendships.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-xl flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
              Virtual Campus Tour
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Campus Size</span>
                  <span className="font-semibold">2,400 acres</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Student-Faculty Ratio</span>
                  <span className="font-semibold">12:1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Housing Options</span>
                  <span className="font-semibold">25+ Residences</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dining Locations</span>
                  <span className="font-semibold">40+ Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;