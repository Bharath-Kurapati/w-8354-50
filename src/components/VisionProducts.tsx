
import React from 'react';
import { FileBarChart2, Lightbulb } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const VisionProducts = () => {
  const products = [
    {
      icon: <FileBarChart2 className="h-10 w-10 text-indigo-600" />,
      title: "Scenario Planning",
      description: "Run n-number of scenarios in your business with AI to make decisions easier. Simulate market conditions, test strategies, and optimize outcomes with confidence."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
      title: "New Product Introduction",
      description: "Confidently make new product decisions without pre-existing datasets. Our AI analyzes market trends and similar products to predict demand patterns."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The future of AI-powered inventory management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="bg-gray-900/80 border border-gray-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-gray-800/60 rounded-full w-fit">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {product.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionProducts;
