import React from 'react';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';

const AdmissionsSection = () => {
  const requirements = [
    "High school diploma or equivalent",
    "Standardized test scores (SAT/ACT)",
    "Letters of recommendation",
    "Personal statement",
    "Academic transcripts"
  ];

  const deadlines = [
    { term: "Fall 2025", date: "January 15, 2025", status: "Open" },
    { term: "Spring 2026", date: "October 1, 2025", status: "Coming Soon" },
    { term: "Summer 2026", date: "March 15, 2026", status: "Coming Soon" }
  ];

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admissions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward your future at Stellar University
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
              <p className="text-gray-600 mb-4">Our admissions counselors are here to guide you through every step of the application process.</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Deadlines</h3>
            <div className="space-y-4">
              {deadlines.map((deadline, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{deadline.term}</h4>
                    <p className="text-gray-600 flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {deadline.date}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    deadline.status === 'Open' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {deadline.status}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
