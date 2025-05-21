
import React from 'react';
import { BarChart, LineChart, ArrowUp } from 'lucide-react';

const VisualCredibility = () => {
  return (
    <section className="py-12 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Visual */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <LineChart className="h-6 w-6 text-[#5145FF] mr-2" />
                <h3 className="text-lg font-bold text-white">Demand Forecast Accuracy</h3>
              </div>
              <span className="text-emerald-400 flex items-center text-sm font-bold">
                <ArrowUp className="h-4 w-4 mr-1" /> 112%
              </span>
            </div>
            <div className="h-40 relative">
              {/* Simplified chart visualization */}
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                {[25, 40, 30, 50, 70, 60, 85, 75, 90, 100].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 mx-0.5 bg-gradient-to-t from-[#5145FF] to-[#00B37E]" 
                    style={{height: `${height}%`}}
                  ></div>
                ))}
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">2×</p>
                  <p className="text-sm text-gray-300">Accuracy</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Visual */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <BarChart className="h-6 w-6 text-[#FF9F40] mr-2" />
                <h3 className="text-lg font-bold text-white">Time Investment</h3>
              </div>
              <span className="text-emerald-400 flex items-center text-sm font-bold">
                <ArrowUp className="h-4 w-4 mr-1" /> 90%
              </span>
            </div>
            <div className="h-40 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="h-24 w-8 bg-red-400 rounded-sm relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">Before</div>
                    </div>
                    <p className="mt-2 text-xs text-gray-300">50 hrs</p>
                  </div>
                  <div className="text-center">
                    <div className="h-4 w-8 bg-emerald-400 rounded-sm relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">After</div>
                    </div>
                    <p className="mt-2 text-xs text-gray-300">5 hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Revenue Impact Visual */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <BarChart className="h-6 w-6 text-[#00B37E] mr-2" />
                <h3 className="text-lg font-bold text-white">Revenue Impact</h3>
              </div>
            </div>
            <div className="h-40 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">45%</p>
                  <p className="text-sm text-gray-300">Revenue Recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualCredibility;
