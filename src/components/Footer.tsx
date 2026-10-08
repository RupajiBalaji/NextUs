import React from 'react';
import { COMPANY_INFO, LEADERSHIP } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { NextUsLogo } from './NextUsLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Purpose Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-2">
              <NextUsLogo variant="nav" theme="dark" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.category} based in Hyderabad, India. Dedicated to helping the right talent reach the right position through rigorous technical assessment and employer alignment.
            </p>

            <div className="pt-2 text-xs text-slate-400 italic">
              “{COMPANY_INFO.subTagline}”
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About NextUs</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Recruitment Services</a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">Hiring Partners (Urvah Dynamics, Radiant)</a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-white transition-colors">Student Success Stories</a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-white transition-colors">Candidate & Employer Opportunities</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Founders</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Branch Information
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.headquarters.street}, {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state}, {COMPANY_INFO.headquarters.country}
                </span>
              </div>

              {LEADERSHIP.map((leader) => (
                <div key={leader.name} className="pt-2 border-t border-slate-900">
                  <div className="font-semibold text-slate-200">
                    {leader.name} ({leader.role})
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-[11px]">
                    <a
                      href={`tel:${leader.mobileRaw}`}
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{leader.mobile}</span>
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-slate-400 hover:text-white flex items-center gap-1 truncate"
                    >
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{leader.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NextUs. A branch of {COMPANY_INFO.parentCompany}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
