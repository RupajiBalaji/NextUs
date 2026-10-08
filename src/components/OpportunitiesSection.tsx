import React from 'react';
import { GraduationCap, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OpportunitiesSectionProps {
  onSelectRole: (role: 'Student' | 'Company') => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({ onSelectRole }) => {
  return (
    <section id="opportunities" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-center mx-auto mb-16">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Dual Pathway · Connect With NextUs
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to Connect with the Right Opportunity?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Whether you are building an engineering squad from scratch or taking the first step in your IT career, NextUs provides the expertise to make it happen.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Card */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-1">
                For Students & Fresh Graduates
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Looking for the right opportunity?
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Submit your details and let NextUs help connect you with relevant opportunities. We evaluate your actual coding skills, match you with hiring tech companies, and mentor you through the placement process.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2.5">
                {[
                  'Access to verified IT hiring partners',
                  'Mock technical assessment & interview feedback',
                  'Zero placement fees charged to candidates',
                  'Opportunities across frontend, backend, QA & cloud',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={() => onSelectRole('Student')}
                className="w-full py-3 px-5 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Submit Candidate Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Company Card */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-1">
                For Employers & Hiring Teams
              </div>

              <h3 className="text-2xl font-bold text-white">
                Looking for the right talent?
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Tell us your hiring requirements and our team will help you find suitable candidates. We screen, vet, and deliver ready-to-deploy developers and engineers who fit your team culture and technical bar.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                {[
                  'Tailored candidate shortlists within 7–14 days',
                  'Rigorous technical and communication screening',
                  'Dedicated talent partner support throughout interview rounds',
                  'Trusted by Urvah Dynamics, Viswam Edutech & Radiant',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => onSelectRole('Company')}
                className="w-full py-3 px-5 text-sm font-semibold text-slate-900 bg-white hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Share Hiring Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
