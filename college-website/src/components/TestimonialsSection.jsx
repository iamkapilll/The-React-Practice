import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      program: "Computer Science, Class of 2023",
      text: "The professors here are world-class researchers who genuinely care about student success. The opportunities for research and internships are incredible.",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Marcus Johnson",
      program: "Business Administration, Class of 2024",
      text: "The global perspective I gained here opened doors I never imagined. The alumni network is incredibly supportive and active.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Elena Rodriguez",
      program: "Engineering, Class of 2022",
      text: "From day one, I was challenged to think critically and solve real-world problems. The hands-on experience prepared me perfectly for my career.",
      rating: 5,
      image: "👩‍🔬"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who are making their mark in the world
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.program}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;