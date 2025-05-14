
import React from 'react';
import { FileBarChart2, Lightbulb } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const VisionProducts = () => {
  const products = [
    {
      icon: <FileBarChart2 className="h-10 w-10 text-indigo-600" />,
      title: "Scenario Planning",
      description: "Run n-number of scenarios in your business with AI to make decisions faster, simulate market conditions, test strategies, and optimize outcomes with confidence - from tariffs to capital allocation."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
      title: "New Product Introduction",
      description: "Confidently make new product decisions without pre-existing datasets. Our AI analyzes market trends and similar products to predict demand patterns."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are building the Operating System of decision making for Supply Chain teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="bg-white border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-gray-50 rounded-full w-fit">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
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
