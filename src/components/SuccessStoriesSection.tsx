import React, { useState } from 'react';
import { STUDENT_SUCCESS_STORIES, StudentSuccessStory } from '../data/companyData';
import { Quote, Building2, Briefcase, GraduationCap } from 'lucide-react';

interface SuccessStoriesSectionProps {
  onStudentInquiry: () => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ onStudentInquiry }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', 'Full Stack', 'Frontend', 'Data & Cloud', 'Quality Assurance', 'Engineering'];

  const filteredStories = selectedDomain === 'All'
    ? STUDENT_SUCCESS_STORIES
    : STUDENT_SUCCESS_STORIES.filter((story) => story.domain === selectedDomain);

  return (
    <section id="success-stories" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Proven Outcomes · Student Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Student Feedback & Success Stories
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Hear directly from candidates who transformed their technical preparation into high-impact careers through NextUs placement support.
            </p>
          </div>

          {/* Interactive domain filter tabs (Zero-pill compliant button group) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg">
            {domains.map((dom) => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedDomain === dom
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story: StudentSuccessStory) => (
            <div
              key={story.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Student Info & Placed As Lockup */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${story.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {story.avatarInitials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {story.studentName}
                    </h3>
                    <div className="text-xs text-slate-600 font-medium mt-0.5 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>
                        Placed as <strong className="text-slate-900 font-semibold">{story.role}</strong>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>at <strong className="text-slate-800">{story.company}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic relative z-10 pl-2">
                    “{story.testimonial}”
                  </p>
                </div>
              </div>

              {/* Card Footer: Metadata without pill enclosures */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium text-blue-700">{story.domain}</span>
                <span className="text-slate-400">{story.batch || 'Verified Graduate'}</span>
              </div>
            </div>
          ))}

          {/* Quick submission callout tile */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Your Success Story Begins Here</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Looking to land your first IT engineering role or transition into an active tech team? Connect with NextUs for dedicated guidance.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15">
              <button
                onClick={onStudentInquiry}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors text-center"
              >
                Submit Student Profile
              </button>
            </div>
          </div>
        </div>

        {/* Verification Footnote */}
        <div className="mt-8 text-center text-xs text-slate-500">
          All placements are independently verified through hiring client records at NextUs (Alt.f, Begumpet, Hyderabad).
        </div>
      </div>
    </section>
  );
};
