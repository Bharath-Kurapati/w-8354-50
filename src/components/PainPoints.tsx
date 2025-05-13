
import React from 'react';
import { ShoppingCart, AlertTriangle, DollarSign } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-indigo-600" />,
      title: "Stock-outs",
      description: "Lost sales and disappointed customers",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-amber-600" />,
      title: "Overstock",
      description: "Wasted capital and storage fees",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
      title: "Revenue Loss",
      description: "15-45% revenue impact for SMBs",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
              $1.7T
            </span>{' '}
            inventory distortion every year
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            SMBs lose 15-45% of revenue to stock-outs, overstock & storage fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
