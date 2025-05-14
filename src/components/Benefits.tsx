
import React from 'react';
import { ShoppingCart, Cube, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Recover lost sales",
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      color: "#5145FF", // Indigo
      description: "Predict demand accurately to keep shelves stocked and customers happy."
    },
    {
      title: "Free working capital",
      icon: <Cube className="h-6 w-6 text-white" />,
      color: "#FF9F40", // Amber
      description: "Slash overstock so cash isn't frozen in the warehouse."
    },
    {
      title: "Avoid fees & fines",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: "#00B37E", // Jade
      description: "Stay compliant with 3PL & retail partners—no more chargebacks."
    }
  ];

  return (
    <section className="py-12 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-inter font-extrabold bg-gradient-to-r from-[#5145FF] to-[#00B37E] bg-clip-text text-transparent mb-4">
            Businesses reclaim up to 45% of revenue with FeatureBox AI
          </h2>
          <p className="text-xl text-white font-inter">
            One platform. Three ways to unlock trapped value—fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#1E1E1E] rounded-lg border border-[#2A2A2A] p-6 transition-all hover:scale-[1.05] hover:shadow-lg"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4" 
                style={{ backgroundColor: benefit.color }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-inter">
                {benefit.title}
              </h3>
              <p className="text-[#B8B8B8] font-inter">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
