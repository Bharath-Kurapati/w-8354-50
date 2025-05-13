
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
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">FeatureBox AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Product
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              How it works
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Case study
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Pricing
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Sign in
            </Link>
            <Button 
              variant="default" 
              className="bg-[#00B37E] hover:bg-emerald-600 text-white rounded-md"
            >
              Request demo
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Product
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              How it works
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Case study
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Pricing
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Sign in
            </Link>
            <div className="px-3 py-2">
              <Button 
                variant="default" 
                className="w-full bg-[#00B37E] hover:bg-emerald-600 text-white rounded-md"
              >
                Request demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
