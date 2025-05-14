
import React from 'react';
import { CheckCircle } from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    "2X accuracy",
    "90% less work",
    "Up to 45% more revenue",
    "Go live in days"
  ];

  return (
    <section className="py-10 bg-dark-background">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#1E1E1E] rounded-xl p-6 flex items-center justify-center"
            >
              {index === 3 ? (
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#5145FF]" />
                  <span className="text-lg font-medium text-white">{feature}</span>
                </div>
              ) : (
                <span className="text-lg font-medium text-white">{feature}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
