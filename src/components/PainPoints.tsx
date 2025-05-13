
import React from 'react';
import { ShoppingCart, Package, Receipt } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-indigo-600" />,
      title: "Lost Sales",
      description: "Revenue impact from stock-outs",
    },
    {
      icon: <Package className="h-8 w-8 text-amber-600" />,
      title: "Capital Tied Up",
      description: "Overstock freezing working capital",
    },
    {
      icon: <Receipt className="h-8 w-8 text-emerald-600" />,
      title: "Fees & Fines",
      description: "Penalties from 3PLs & partners",
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
          <p className="text-lg text-white max-w-3xl mx-auto">
            SMBs lose 15-45% of revenue to stock-outs, overstock & storage fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-dark-card p-6 rounded-lg shadow-sm border border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-900 rounded-full">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
