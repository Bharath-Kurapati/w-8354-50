
import React from 'react';
import { Check, BarChart3, TrendingUp, Gauge, Database } from 'lucide-react';

const MagicExperience = () => {
  const features = [
    {
      icon: "Connect",
      description: "Your ERP & storefronts data drop or direct connections."
    },
    {
      icon: "Clean",
      description: "AI scrubs & stitches data automatically."
    },
    {
      icon: "Forecast",
      description: "AI orchestrator cooks up the magic."
    },
    {
      icon: "Explain",
      description: "LLM turns spikes & dips into plain-English insights. Narrative ready for your teams."
    }
  ];

  return (
    <section className="py-16 bg-dark-background">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-inter font-extrabold mb-8 text-white text-center">
          Why FeatureBox AI feels like magic
        </h2>
        
        <div className="dark-card-magic modern-saas-layout grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="text-column">
            <h3 className="text-2xl font-inter font-extrabold text-white mb-6">
              From 50-hour slog to 15-minute autopilot
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-jade flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-inter font-bold text-brand-jade">
                      {feature.icon}
                    </span>{" "}
                    <span className="text-gray-300 font-inter">
                      – {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Added dashboard-like metrics */}
          </div>
          
          {/* Right Column - Stats displayed in dashboard form */}
          <div className="visual-column">
            <div className="w-full md:w-[480px] h-[400px] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="w-full h-full bg-dark-card flex flex-col p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-brand-purple mr-2" />
                    <h3 className="text-lg font-bold text-white">Performance Dashboard</h3>
                  </div>
                  <span className="text-xs text-gray-400">Updated 3h ago</span>
                </div>
                
                {/* Dashboard metrics in card form */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-400">Accuracy</span>
                      <span className="text-xs text-emerald-400">+112%</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white mr-2">2X</span>
                      <span className="text-xs text-gray-400">vs Industry Avg</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-400">Time Saved</span>
                      <span className="text-xs text-emerald-400">+90%</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white mr-2">45h</span>
                      <span className="text-xs text-gray-400">weekly</span>
                    </div>
                  </div>
                </div>
                
                {/* Revenue impact visualization */}
                <div className="bg-gray-900/30 p-4 rounded-lg mb-4 flex-1">
                  <div className="flex justify-between mb-4">
                    <span className="text-sm text-white">Revenue Impact</span>
                    <span className="text-xs text-emerald-400">+45%</span>
                  </div>
                  <div className="h-24 flex items-end space-x-2">
                    {[30, 45, 35, 55, 40, 65, 50, 75, 60, 85, 70, 90].map((height, i) => (
                      <div key={i} className="flex-1 h-full flex flex-col justify-end">
                        <div 
                          className={`rounded-sm ${
                            i > 6 ? 'bg-brand-jade' : 'bg-gray-700'
                          }`}
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-[8px] text-gray-500 mt-1">{i+1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="text-gray-500">Before FeatureBox</span>
                    <span className="text-brand-jade">After FeatureBox</span>
                  </div>
                </div>
                
                {/* Fixed the alignment and text overflow by adding px-1 for padding and truncate for overflow control */}
                <div className="flex justify-between items-center text-xs px-1">
                  <span className="text-gray-500 truncate mr-2">Go live in days, not months</span>
                  <span className="text-brand-jade truncate">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicExperience;
