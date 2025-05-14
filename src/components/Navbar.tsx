
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/7fd38d18-a5d9-498b-8fd4-418f32b5ca22.png" alt="FeatureBox AI" className="h-8 mr-2 font-extrabold bg-black" />
              <span className="text-2xl font-bold text-brand-purple">FeatureBox AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-brand-purple transition-colors font-inter">
              Case Study
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-brand-purple transition-colors font-inter">
              Vision
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-brand-purple transition-colors font-inter">
              Team
            </Link>
            <a 
              href="mailto:bharath_kurapati@berkeley.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                className="bg-brand-purple hover:bg-brand-purpleLight text-white rounded-md font-inter"
              >
                Request Demo
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-purple hover:bg-gray-900 rounded-md font-inter">
              Case Study
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-purple hover:bg-gray-900 rounded-md font-inter">
              Vision
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-purple hover:bg-gray-900 rounded-md font-inter">
              Team
            </Link>
            <div className="px-3 py-2">
              <a 
                href="mailto:bharath_kurapati@berkeley.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="default" 
                  className="w-full bg-brand-purple hover:bg-brand-purpleLight text-white rounded-md font-inter"
                >
                  Request Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
