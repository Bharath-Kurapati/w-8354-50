
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/lovable-uploads/7fd38d18-a5d9-498b-8fd4-418f32b5ca22.png" alt="FeatureBox AI" className="h-8 mr-3" />
              <span className="text-xl font-bold text-white">FeatureBox AI</span>
            </Link>
            <p className="text-sm">Building the AI operating system for supply chain teams</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} FeatureBox AI. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-white transition-colors">Twitter</Link>
              <Link to="/" className="hover:text-white transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
