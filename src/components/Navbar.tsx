import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NextUsLogo } from './NextUsLogo';

interface NavbarProps {
  onContactClick: (type?: 'Student' | 'Company') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Companies', href: '#partners' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Opportunities', href: '#opportunities' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar Contract: 3 zones */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element brand wordmark using authentic logo */}
          <a
            href="#"
            className="flex items-center group focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm"
            aria-label="NextUs - Home"
          >
            <NextUsLogo variant="nav" theme="light" />
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-600 transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => onContactClick()}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shadow-xs flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-white border-b border-slate-200 shadow-xl px-6 py-6 transition-all">
          <div className="text-xs text-slate-500 mb-3 pb-2 border-b border-slate-100">
            A branch of {COMPANY_INFO.parentCompany}
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-slate-800 hover:text-blue-600 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Hyderabad, India
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                Alt.f Begumpet
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick('Student');
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
              >
                I am a Candidate
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick('Company');
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors text-center"
              >
                I am an Employer
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
