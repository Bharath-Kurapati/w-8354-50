
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, ChartBar, Database, Gauge } from 'lucide-react';

const Traction = () => {
  const dashboardStats = [
    { icon: <TrendingUp className="h-5 w-5 text-emerald-400" />, value: "45%", label: "Revenue Growth" },
    { icon: <ChartBar className="h-5 w-5 text-emerald-400" />, value: "90%", label: "Time Saved" },
    { icon: <Database className="h-5 w-5 text-emerald-400" />, value: "200+", label: "Clients" },
    { icon: <Gauge className="h-5 w-5 text-emerald-400" />, value: "2X", label: "Forecast Accuracy" }
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to transform your supply chain?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join our growing list of innovative brands that are leveraging AI to make smarter inventory decisions with our forecasting product.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
                <div className="flex items-center justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-emerald-400 text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Forecast Performance Dashboard</h4>
              <span className="text-xs text-emerald-400">Live Data</span>
            </div>
            <div className="h-32 flex items-end space-x-1">
              {[40, 55, 35, 65, 50, 70, 60, 75, 65, 80, 70, 85].map((height, i) => (
                <div key={i} className="flex-1 h-full flex flex-col justify-end">
                  <div 
                    className={`rounded-t-sm ${height > 60 ? 'bg-emerald-500' : 'bg-brand-purple'}`}
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://calendar.app.google/BHA2JfFf1GVNdjJV6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                className="bg-brand-purple hover:bg-brand-purpleLight text-white rounded-md px-8 hover:translate-y-[-2px] transition-all"
              >
                Get A Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
