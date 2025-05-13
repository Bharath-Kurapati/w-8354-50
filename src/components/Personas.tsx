
import React from 'react';
import { Check } from 'lucide-react';

const Personas = () => {
  const checklistItems = [
    "Managing 300-1000 SKUs",
    "Selling across ≥ 3 channels",
    "Mid-market scale ($20-55M revenue)",
    "Supply chain complexity without data science team",
    "Using Excel or basic ERP systems",
    "Need to reduce inventory costs"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Is it for me?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Perfect fit for:</h3>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <p className="text-lg font-medium">
                  CPG & F&B planners
                </p>
                <p className="text-gray-600">
                  Mid-market brands without dedicated forecasting teams
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Made for mid-market <span className="font-semibold">CPG & F&B planners</span> juggling <span className="font-semibold">300-1000 SKUs</span> across <span className="font-semibold">≥ 3 channels</span> who can't hire a data-science team.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/5 to-emerald-500/5 rounded-lg shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6">You're a good fit if:</h3>
            <ul className="space-y-3">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personas;
