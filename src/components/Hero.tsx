import React from 'react';
import { ArrowRight, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import heroImg from '../assets/images/hero_talent_showcase.jpg';
import { NextUsLogo } from './NextUsLogo';

interface HeroProps {
  onSelectRole: (role: 'Student' | 'Company') => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectRole, onContactClick }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-100/60 via-slate-50 to-white overflow-hidden">
      {/* Subtle background decoration grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Value Prop */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Branch Affiliation Notice without pill wrapper */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-4 tracking-wide uppercase">
              <span className="text-blue-600 font-bold">{COMPANY_INFO.name}</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>A Branch of {COMPANY_INFO.parentCompany}</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>{COMPANY_INFO.category}</span>
            </div>

            {/* Core Message Prominent Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Helping the right talent to be in the <span className="text-blue-600">right position.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              NextUs bridges ambitious candidates and students with their ideal career pathways, while empowering tech companies to connect with thoroughly evaluated talent without friction.
            </p>

            {/* Dual Core Value Anchor */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">For Students & Job Seekers</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Direct interview pipelines, technical mentoring, and career opportunities.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-800 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">For Companies & Teams</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Pre-evaluated engineering talent aligned with your exact tech stack & culture.</p>
                </div>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onContactClick}
                className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectRole('Company')}
                className="px-5 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Find Tech Talent</span>
              </button>

              <button
                onClick={() => onSelectRole('Student')}
                className="px-5 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Find Opportunities</span>
              </button>
            </div>

            {/* Micro Credibility Text */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Hyderabad tech ecosystem: Begumpet office · Verified partner associations</span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 aspect-[16/10] sm:aspect-[16/11]">
              <img
                src={heroImg}
                alt="NextUs talent matching consultation in Hyderabad"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                onError={(e) => {
                  // Fallback container if needed
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-gradient-to-br', 'from-slate-900', 'to-blue-950');
                  }
                }}
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold mb-1">
                  Right Talent. Right Position.
                </div>
                <div className="text-sm font-medium text-slate-100">
                  “Helping the right talent to be in the right position.”
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-3">
                  <span>Based in Alt.f, Begumpet</span>
                  <span aria-hidden="true">·</span>
                  <span>Branch of SwapNow</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/90 max-w-[280px]">
              <NextUsLogo variant="nav" theme="light" className="mb-2 scale-90 origin-left" />
              <div className="text-[11px] text-slate-500 font-medium">Industry Partners</div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">Urvah Dynamics · Viswam · Radiant</div>
              <div className="text-[11px] text-emerald-600 mt-1.5 font-semibold flex items-center gap-1">
                <span>✓ 100% Pre-Evaluated Candidates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
