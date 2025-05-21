
import React from 'react';
import { ShoppingCart, Package, Receipt, TrendingUp, BarChart3, Database } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-indigo-600" />,
      title: "Lost Sales",
      description: "Revenue impact from stock-outs",
      stat: "$840B",
      trend: "+12% YoY"
    },
    {
      icon: <Package className="h-8 w-8 text-amber-600" />,
      title: "Capital Tied Up",
      description: "Overstock freezing working capital",
      stat: "$520B",
      trend: "+8% YoY"
    },
    {
      icon: <Receipt className="h-8 w-8 text-emerald-600" />,
      title: "Fees & Fines",
      description: "Penalties from 3PLs & partners",
      stat: "$340B",
      trend: "+15% YoY"
    },
  ];

  return (
    <section className="py-16 bg-[#121212]">
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
            <div key={index} className="bg-dark-card p-6 rounded-lg shadow-xl border border-gray-800 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="p-3 bg-gray-900 rounded-full">
                    {point.icon}
                  </div>
                  <div className="bg-gray-900 px-3 py-1 rounded-full">
                    <span className="text-amber-400 text-sm font-semibold">{point.trend}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
                <p className="text-gray-400 mb-4">{point.description}</p>
                
                {/* Dashboard-style metric display */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Annual Impact</span>
                      <p className="text-3xl font-bold text-white">{point.stat}</p>
                    </div>
                    <div className="h-16 flex items-end space-x-1">
                      {[3, 4, 2, 5, 3, 6, 4, 7].map((h, i) => (
                        <div 
                          key={i}
                          className="w-1 bg-indigo-600/70 rounded-t-sm"
                          style={{ height: `${h * 8}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Global impact meter */}
        <div className="mt-12 max-w-4xl mx-auto bg-dark-card p-6 rounded-lg border border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white flex items-center">
              <Database className="h-5 w-5 mr-2 text-indigo-500" />
              Global Inventory Distortion Impact
            </h3>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 mr-1 text-emerald-500" />
              <span className="text-emerald-500">Rising 10% annually</span>
            </div>
          </div>
          <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden">
            <div className="flex h-full">
              <div className="bg-indigo-600 h-full" style={{ width: '50%' }}></div>
              <div className="bg-amber-600 h-full" style={{ width: '30%' }}></div>
              <div className="bg-emerald-600 h-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Lost Sales (50%)</span>
            <span>Overstock (30%)</span>
            <span>Fees & Fines (20%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
