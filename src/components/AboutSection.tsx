import React from 'react';
import { Target, CheckCircle2, Users, Compass, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import mentorshipImg from '../assets/images/candidate_mentorship_1791457225987.jpg';
import { NextUsLogo } from './NextUsLogo';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Deep Requirement Understanding',
      desc: 'We invest time with founders, engineering leads, and candidates to map exact technical skills, team cultures, and long-term goals.',
      icon: Target,
    },
    {
      title: 'Precision Over Volume',
      desc: 'Rather than flooding team inboxes with random profiles, we introduce only 2–3 meticulously evaluated candidates who fit like a glove.',
      icon: Layers,
    },
    {
      title: 'Comprehensive Candidate Guidance',
      desc: 'Students and fresh graduates receive interview coaching, technical assessment reviews, and guidance throughout their selection rounds.',
      icon: Users,
    },
    {
      title: 'Long-term Organizational Alignment',
      desc: 'We measure success by retention and mutual growth, ensuring candidates thrive and companies build high-impact teams.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            About NextUs · Branch of {COMPANY_INFO.parentCompany}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Connecting the Right Talent with the Right Position
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            NextUs was established with a singular vision: to eliminate mismatches by connecting top talent directly to where they can thrive. We believe finding the right opportunity is not merely about ticking boxes on a job description—it is about unlocking true potential on both sides.
          </p>
        </div>

        {/* Core Message Callout Box */}
        <div className="mt-10 p-6 md:p-8 bg-slate-900 text-white rounded-2xl relative overflow-hidden shadow-md">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">
                Our Core Philosophy
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {COMPANY_INFO.subTagline}
              </div>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                When a skilled developer lands in an environment where their strengths are recognized, companies grow faster, products ship smoother, and careers take flight. That is the match NextUs creates every day.
              </p>
            </div>

            {/* Official Logo Identity Card */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 shrink-0 max-w-[280px]">
              <NextUsLogo variant="nav" theme="dark" />
            </div>
          </div>
        </div>

        {/* Content & Imagery Grid */}
        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with context */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
              <img
                src={mentorshipImg}
                alt="NextUs career guidance and student talent mentorship"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-900">Personalized Career Roadmaps</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Guiding fresh engineering graduates from Alt.f Begumpet into verified software development careers.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">How NextUs Connects Talent & Opportunities</h3>
              <p className="text-sm text-slate-500">
                Our methodology ensures long-term alignment for both companies and candidates.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 border-t border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full lifecycle assistance: Screening, technical matching, interview scheduling, and onboarding check-ins.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
