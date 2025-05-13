
import React from 'react';
import { ArrowRight, Clock, BarChart, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart className="h-8 w-8 text-indigo-600" />,
      title: "Accuracy with external signals",
      description: "Blends ML + promos, seasonality, weather factors for precise forecasts."
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Effortless onboarding",
      description: "Get up and running in minutes, not weeks."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: "Explainability built-in",
      description: "LLM-generated \"Why did the forecast move?\" stories."
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-indigo-600" />,
      title: "Planner-centric UX",
      description: "Shrinks an 8-step slog into 4 intuitive clicks."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why we're better</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            FeatureBox AI is built specifically for mid-market brands who need powerful forecasting without complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
