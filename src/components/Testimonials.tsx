
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I used to spend days every month on forecasting. Now I get better forecasts in minutes and can focus on strategic decisions.",
      role: "Supply Chain Manager",
      company: "Mid-market CPG Brand"
    },
    {
      quote: "FeatureBox AI's forecasting is like having a data scientist on your team without the overhead.",
      role: "Inventory Planner",
      company: "DTC Food Brand"
    },
    {
      quote: "We reduced stockouts by 35% and freed up $2M in working capital within the first 60 days.",
      role: "COO",
      company: "Personal Care Brand"
    }
  ];

  return (
    <section className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">What our customers say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#1E1E1E] rounded-lg p-8 shadow-lg border border-[#2A2A2A]"
            >
              <Quote className="h-8 w-8 text-[#5145FF] mb-4" />
              <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
