import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Computer Science",
      description: "Master the fundamentals of programming, algorithms, and software development.",
      duration: "4 years",
      level: "Bachelor's",
      color: "from-blue-500 to-cyan-500",
      features: ["AI & Machine Learning", "Software Engineering", "Data Science"]
    },
    {
      title: "Business Administration",
      description: "Develop leadership skills and business acumen for the modern marketplace.",
      duration: "4 years",
      level: "Bachelor's",
      color: "from-purple-500 to-pink-500",
      features: ["Management", "Finance", "Marketing"]
    },
    {
      title: "Engineering",
      description: "Build innovative solutions to complex problems across multiple disciplines.",
      duration: "4 years",
      level: "Bachelor's",
      color: "from-green-500 to-teal-500",
      features: ["Mechanical", "Electrical", "Civil"]
    },
    {
      title: "Medicine",
      description: "Train to become a healthcare professional with hands-on clinical experience.",
      duration: "6 years",
      level: "Medical Degree",
      color: "from-red-500 to-orange-500",
      features: ["Clinical Training", "Research", "Specializations"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class programs designed to prepare you for success in your chosen field
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{program.level}</span>
                  <span className="text-sm text-gray-500">{program.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transform group-hover:scale-105 transition-all`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
