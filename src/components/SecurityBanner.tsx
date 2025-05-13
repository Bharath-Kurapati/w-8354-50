
import React from 'react';
import { Shield, Database, Lock } from 'lucide-react';

const SecurityBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-6">Security & Integrations</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-gray-700">Built on SOC-2-ready GCP</span>
            </div>
            <div className="flex items-center">
              <Database className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-gray-700">Upcoming connector: Shopify</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-gray-700">Upcoming connector: NetSuite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBanner;
