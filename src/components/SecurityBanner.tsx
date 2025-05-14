
import React from 'react';
import { Shield, Database, Lock } from 'lucide-react';

const SecurityBanner = () => {
  return (
    <section className="py-12 bg-[#151820]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-8 text-white">Security & Integrations</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-[#5145FF] mr-3" />
              <span className="text-gray-300">Built on SOC-2-ready GCP</span>
            </div>
            <div className="flex items-center">
              <Database className="h-5 w-5 text-[#5145FF] mr-3" />
              <span className="text-gray-300">Trustworthy AI models only</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-[#5145FF] mr-3" />
              <span className="text-gray-300">Integrations coming with several ERP systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBanner;
