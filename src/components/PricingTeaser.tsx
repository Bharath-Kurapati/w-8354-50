
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingTeaser = () => {
  const plans = [
    {
      name: "Basic",
      description: "For small brands just getting started",
      features: [
        "Up to 100 SKUs",
        "CSV/Excel upload",
        "Basic forecasting",
        "Email support"
      ]
    },
    {
      name: "Pro",
      description: "For growing brands ≤ 50 SKUs",
      features: [
        "Up to 500 SKUs",
        "API integrations",
        "Advanced forecasting",
        "External signals",
        "Narrative explanations",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Premium",
      description: "For established brands > 50 SKUs",
      features: [
        "Unlimited SKUs",
        "Custom integrations",
        "Enterprise forecasting",
        "All external signals",
        "Custom reporting",
        "Dedicated support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Simple, transparent pricing for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-sm border ${
                plan.popular ? 'border-indigo-500 shadow-md relative' : 'border-gray-100'
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-3 py-1 uppercase font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0">
                        <Check className="h-5 w-5 text-emerald-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-[#00B37E] hover:bg-emerald-600 text-white' 
                      : 'bg-white border-gray-300 border text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Talk to us
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
