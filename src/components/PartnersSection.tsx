import React from 'react';
import { PARTNERS_AND_CLIENTS, CompanyPartner } from '../data/companyData';
import { Building2, Quote, CheckCircle, ArrowRight } from 'lucide-react';
import interviewImg from '../assets/images/tech_team_interview_1791457236790.jpg';

interface PartnersSectionProps {
  onPartnerInquiry: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onPartnerInquiry }) => {
  const highlightedPartner = PARTNERS_AND_CLIENTS.find((p) => p.highlighted);
  const otherPartners = PARTNERS_AND_CLIENTS.filter((p) => !p.highlighted);

  return (
    <section id="partners" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Industry Collaboration & Trust
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Companies & Organizations We Have Worked With
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            NextUs is trusted by forward-thinking organizations to connect with specialized tech talent, from high-caliber software engineering to agile deployment teams.
          </p>
        </div>

        {/* Featured Showcase: Urvah Dynamics Private Limited */}
        {highlightedPartner && (
          <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden relative">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 bg-radial from-blue-500 to-transparent pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-3 tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>Featured Industry Partner</span>
                  <span aria-hidden="true">·</span>
                  <span>{highlightedPartner.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {highlightedPartner.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-6">
                  {highlightedPartner.type} · {highlightedPartner.industry}
                </p>

                {/* Primary Testimonial Quote */}
                {highlightedPartner.testimonial && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 relative mb-6">
                    <Quote className="w-8 h-8 text-blue-400/50 absolute top-4 right-4 pointer-events-none" />
                    <blockquote className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
                      “{highlightedPartner.testimonial.quote}”
                    </blockquote>
                    <div className="mt-3 text-xs text-blue-300 font-semibold">
                      — {highlightedPartner.testimonial.designation || highlightedPartner.name}
                    </div>
                  </div>
                )}

                {/* Services Delivered */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="text-slate-400">Collaboration scope:</span>
                  {highlightedPartner.servicesProvided.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right column: Image asset */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-lg aspect-[4/3] bg-slate-950">
                  <img
                    src={interviewImg}
                    alt="Technical talent interview discussion at Urvah Dynamics"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                    Engineered talent screening delivering right-fit technical matches.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Previous Partner & Client Associations */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Previous Partner & Client Associations
            </h3>
            <span className="text-xs text-slate-500">
              Continuously expanding enterprise network
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPartners.map((partner: CompanyPartner) => (
              <div
                key={partner.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-blue-600">{partner.industry}</span>
                    <span>{partner.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-slate-700" />
                    <h4 className="text-lg font-bold text-slate-900">{partner.name}</h4>
                  </div>

                  <p className="text-xs text-slate-600 mb-4">{partner.type}</p>

                  {partner.testimonial && (
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 italic mb-4">
                      “{partner.testimonial.quote}”
                    </div>
                  )}

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                    {partner.servicesProvided.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 text-right">
                  <span className="text-[11px] font-medium text-slate-400">Verified Partner</span>
                </div>
              </div>
            ))}

            {/* Easily extensible card inviting new company partnerships */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 border border-dashed border-blue-300 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                  Partner With NextUs
                </div>
                <h4 className="text-lg font-bold text-slate-900">Your Company Here</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Join Urvah Dynamics, Viswam Edutech, and Radiant. Get pre-evaluated candidates connected directly with your team.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200/60">
                <button
                  onClick={onPartnerInquiry}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Talent Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
