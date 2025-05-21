
import React from 'react';
import { BarChart, LineChart, ArrowUp, TrendingUp, Database, Gauge } from 'lucide-react';

const VisualCredibility = () => {
  return (
    <section className="py-12 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Real-time Performance Metrics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform delivers measurable results that transform your supply chain operations
          </p>
        </div>
        
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
            <div className="h-48 relative">
              {/* Simplified chart visualization with data points and line */}
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                <div className="w-full h-full relative">
                  {/* Data points */}
                  {[25, 40, 30, 50, 70, 60, 85, 75, 90].map((height, i) => (
                    <div 
                      key={i} 
                      className="absolute bottom-0 w-2 h-2 rounded-full bg-[#5145FF]" 
                      style={{
                        left: `${(i / 8) * 100}%`,
                        bottom: `${height}%`,
                      }}
                    ></div>
                  ))}
                  
                  {/* Line connecting points */}
                  <svg className="absolute inset-0 w-full h-full">
                    <polyline
                      points="0,75 12.5,60 25,70 37.5,50 50,30 62.5,40 75,15 87.5,25 100,10"
                      fill="none"
                      stroke="#5145FF"
                      strokeWidth="2"
                      className="transition-all duration-500"
                    />
                  </svg>
                  
                  {/* Gradient area under line */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-gradient-to-t from-[#5145FF]/20 to-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/3 left-0 right-0 text-center">
                <div className="inline-block bg-[#252525] p-3 rounded-lg shadow-lg">
                  <p className="text-4xl font-bold text-white">2×</p>
                  <p className="text-sm text-gray-300">Accuracy</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Last Quarter</span>
                <span>This Quarter</span>
              </div>
            </div>
          </div>
          
          {/* Time Investment Dashboard */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Gauge className="h-6 w-6 text-[#FF9F40] mr-2" />
                <h3 className="text-lg font-bold text-white">Time Investment</h3>
              </div>
              <span className="text-emerald-400 flex items-center text-sm font-bold">
                <ArrowUp className="h-4 w-4 mr-1" /> 90%
              </span>
            </div>
            <div className="h-48 relative">
              {/* Time comparison visualization */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="flex items-end space-x-16">
                  <div className="text-center">
                    <div className="h-32 w-12 bg-red-400/80 rounded-t-sm relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">Before</div>
                    </div>
                    <p className="mt-2 text-xs text-gray-300">50 hrs/week</p>
                  </div>
                  <div className="text-center">
                    <div className="h-4 w-12 bg-emerald-400/80 rounded-t-sm relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">After</div>
                    </div>
                    <p className="mt-2 text-xs text-gray-300">5 hrs/week</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="bg-[#252525] px-4 py-2 rounded-lg shadow">
                  <p className="text-center text-sm text-emerald-400 font-bold">90% Time Saved</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
              <div className="text-xs text-gray-400 text-center">
                Based on average user data from 200+ companies
              </div>
            </div>
          </div>
          
          {/* Revenue Impact Dashboard */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-[#00B37E] mr-2" />
                <h3 className="text-lg font-bold text-white">Revenue Impact</h3>
              </div>
              <span className="text-emerald-400 flex items-center text-sm font-bold">
                <ArrowUp className="h-4 w-4 mr-1" /> 45%
              </span>
            </div>
            <div className="h-48 relative">
              {/* Revenue impact visualization */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-white mb-2">+45%</div>
                <p className="text-sm text-gray-300 mb-4">Revenue Recovery</p>
                
                <div className="w-full max-w-xs bg-[#252525] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-brand-purple to-brand-jade h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between w-full max-w-xs text-xs text-gray-400">
                  <span>Current</span>
                  <span>Target</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Stock-outs Reduced</span>
                <span className="text-emerald-400">-72%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                <span>Overstock Reduced</span>
                <span className="text-emerald-400">-68%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualCredibility;
