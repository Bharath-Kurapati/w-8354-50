
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">FeatureBox AI</h3>
            <p className="mb-4 text-sm">
              Building the AI operating system for supply chain teams
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:bharath_kurapati@berkeley.edu" 
                  className="hover:text-white transition-colors"
                >
                  bharath_kurapati@berkeley.edu
                </a>
              </li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact sales</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {currentYear} FeatureBox AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
