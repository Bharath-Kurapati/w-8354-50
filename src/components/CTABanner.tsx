
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChartBar, BarChart3, Database } from 'lucide-react';

const CTABanner = () => {
  const metrics = [
    { icon: <ChartBar className="h-5 w-5 text-white" />, value: "2X", label: "Forecast Accuracy" },
    { icon: <BarChart3 className="h-5 w-5 text-white" />, value: "90%", label: "Less Effort" },
    { icon: <Database className="h-5 w-5 text-white" />, value: "45%", label: "Revenue Recovery" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600/20 to-emerald-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-lg border border-[#2A2A2A] text-center">
                <div className="bg-brand-purple/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
                <p className="text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to transform your Supply Chain?
            </h2>
            <a 
              href="https://calendar.app.google/BHA2JfFf1GVNdjJV6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#00B37E] hover:bg-emerald-600 text-white rounded-md px-8 hover:translate-y-[-2px] transition-all"
              >
                Request A Demo
              </Button>
            </a>
            <p className="mt-4 text-gray-400 text-sm">
              Let's slash inventory waste and boost your revenue →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
