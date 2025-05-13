
import React from 'react';

const Traction = () => {
  const metrics = [
    { value: "100+", label: "Customer interviews" },
    { value: "4", label: "Pilot programs" },
    { value: "$60K", label: "ARR pipeline in < 2 months" },
    { value: "$1.5M", label: "On track for ARR" }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{metric.value}</div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
