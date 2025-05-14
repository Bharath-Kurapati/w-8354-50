
import React from 'react';
import { FileBarChart2, Lightbulb } from 'lucide-react';

const VisionProducts = () => {
  const products = [
    {
      icon: <FileBarChart2 className="h-8 w-8 text-indigo-600" />,
      title: "Scenario Planning",
      description: "Run n-number of scenarios in your business with AI to make decisions easier. Simulate market conditions, test strategies, and optimize outcomes with confidence."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
      title: "New Product Introduction",
      description: "Confidently make new product decisions without pre-existing datasets. Our AI analyzes market trends and similar products to predict demand patterns."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The future of AI-powered inventory management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-dark-card p-8 rounded-lg border border-gray-800 hover:border-indigo-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/10"
            >
              <div className="mb-6 p-3 bg-gray-800/50 rounded-full w-fit">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {product.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionProducts;
