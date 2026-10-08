import React, { useState } from 'react';
import { SERVICES, RecruitmentService } from '../data/companyData';
import { 
  Code2, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  Briefcase, 
  School, 
  Compass, 
  ArrowRight,
  Check
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string, audience: string) => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  'it-talent-recruitment': Code2,
  'student-graduate-placement': GraduationCap,
  'candidate-screening': ShieldCheck,
  'talent-matching': Sparkles,
  'company-hiring-support': Briefcase,
  'educational-institutional-connect': School,
  'career-opportunities-freshers': Compass,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'All' | 'Companies' | 'Candidates'>('All');

  const filteredServices = SERVICES.filter((service) => {
    if (filter === 'All') return true;
    return service.audience === filter || service.audience === 'Both';
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Interactive Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Capabilities & Practice Areas
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What NextUs Does
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Specialized services designed to resolve the IT talent equation for high-growth tech companies and ambitious career starters.
            </p>
          </div>

          {/* Interactive Filter Control (Zero-Pill compliant button segment) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shrink-0 self-start md:self-auto">
            {(['All', 'Companies', 'Candidates'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  filter === tab
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab === 'All' ? 'All Services (7)' : tab === 'Companies' ? 'For Employers' : 'For Candidates'}
              </button>
            ))}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: RecruitmentService) => {
            const Icon = serviceIcons[service.id] || Code2;
            const isMarquee = service.id === 'it-talent-recruitment' || service.id === 'student-graduate-placement';

            return (
              <div
                key={service.id}
                className={`group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between ${
                  isMarquee && filter === 'All' ? 'lg:col-span-1 ring-1 ring-blue-500/10' : ''
                }`}
              >
                <div>
                  {/* Card Header with Editorial Number & Audience Tag */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                    <span className="font-bold text-slate-500">{service.number}.</span>
                    <span className="text-[11px] font-sans font-medium text-slate-500">
                      {service.audience === 'Both' ? 'Employers & Candidates' : service.audience === 'Companies' ? 'For Employers' : 'For Candidates'}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Detailed Points */}
                  <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {service.detailedPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {service.badge}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title, service.audience)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
