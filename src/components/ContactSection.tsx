import React, { useState, useEffect } from 'react';
import { 
  COMPANY_INFO, 
  LEADERSHIP, 
  LeaderContact 
} from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  User, 
  Building2, 
  GraduationCap, 
  MessageSquare,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

interface ContactSectionProps {
  initialRole?: 'Student' | 'Company';
  prefilledMessage?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  userType: 'Student' | 'Company';
  specificDetail: string; // College/Graduation year OR Company Name/Role count
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialRole = 'Student',
  prefilledMessage = ''
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    userType: initialRole,
    specificDetail: '',
    message: prefilledMessage,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  // Sync when prop updates
  useEffect(() => {
    if (initialRole) {
      setFormData((prev) => ({ ...prev, userType: initialRole }));
    }
  }, [initialRole]);

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (cleanPhone.length < 8 || cleanPhone.length > 14) {
      newErrors.phone = 'Please provide a valid mobile number (e.g. 9014193358)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or requirements';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Create structured payload for CRM / webhook / storage
    const submissionPayload = {
      id: `NEXTUS-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...formData,
      companyBranch: COMPANY_INFO.name,
      parentEntity: COMPANY_INFO.parentCompany,
      source: 'NextUs Website Contact Form',
    };

    // Store in browser storage as a structured log
    try {
      const existing = JSON.parse(localStorage.getItem('nextus_inquiries') || '[]');
      existing.unshift(submissionPayload);
      localStorage.setItem('nextus_inquiries', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    // Simulate structured dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      userType: initialRole,
      specificDetail: '',
      message: '',
    });
    setErrors({});
  };

  const createWhatsAppLink = () => {
    const recipient = '918639288140'; // Founder Roshini Thakur
    const text = encodeURIComponent(
      `Hello NextUs Team,\n\nMy Name: ${formData.name}\nType: ${formData.userType}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nNote: ${formData.message}`
    );
    return `https://wa.me/${recipient}?text=${text}`;
  };

  const createEmailLink = () => {
    const to = 'Thakurroshinisingh@gmail.com';
    const cc = 'jpyadav.bomma@gmail.com';
    const subject = encodeURIComponent(`NextUs Inquiry: ${formData.name} (${formData.userType})`);
    const body = encodeURIComponent(
      `Hello NextUs Team,\n\nName: ${formData.name}\nRole/Category: ${formData.userType}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nDetails:\n${formData.message}\n\nSubmitted via NextUs Company Website`
    );
    return `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Get in Touch · Direct Contact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Connect with NextUs
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A branch of <strong className="text-slate-900">{COMPANY_INFO.parentCompany}</strong> · Hyderabad, India
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out directly to our founding team via phone, email, or by submitting your requirements below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Leadership Contact Cards & Office Address */}
          <div className="lg:col-span-5 space-y-6">
            {/* Leadership Contacts */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Founding Leadership
              </h3>

              {LEADERSHIP.map((leader: LeaderContact) => (
                <div
                  key={leader.name}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                        {leader.role}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">{leader.name}</h4>
                      {leader.bio && (
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{leader.bio}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    {/* Clickable Mobile */}
                    <div className="flex items-center justify-between group">
                      <a
                        href={`tel:${leader.mobileRaw}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors"
                        title={`Call ${leader.name}`}
                      >
                        <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{leader.mobile}</span>
                      </a>
                      <button
                        onClick={() => handleCopy(leader.mobile, `phone-${leader.name}`)}
                        className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors"
                        title="Copy phone"
                        type="button"
                      >
                        {copiedIndex === `phone-${leader.name}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Clickable Email */}
                    <div className="flex items-center justify-between group">
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors truncate pr-2"
                        title={`Email ${leader.name}`}
                      >
                        <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="truncate">{leader.email}</span>
                      </a>
                      <button
                        onClick={() => handleCopy(leader.email, `email-${leader.name}`)}
                        className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors shrink-0"
                        title="Copy email"
                        type="button"
                      >
                        {copiedIndex === `email-${leader.name}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Address Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Office Address</span>
              </div>
              <div className="text-base font-bold text-slate-900">
                {COMPANY_INFO.headquarters.street}
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state}, {COMPANY_INFO.headquarters.country}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Centrally located in Begumpet’s commercial and technical corporate hub.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Hyderabad Branch</span>
                <a
                  href={COMPANY_INFO.headquarters.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Requirement Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-md">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="border-b border-slate-100 pb-5 mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Send an Inquiry to NextUs</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your details. Submissions are reviewed immediately by our founders.
                    </p>
                  </div>

                  {/* User Type Toggle (Student vs Company) */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      I am connecting as:
                    </label>
                    <div className="grid grid-cols-2 gap-3 p-1 bg-slate-100 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: 'Student' })}
                        className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                          formData.userType === 'Student'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <GraduationCap className="w-4 h-4 text-emerald-600" />
                        <span>Student / Job Seeker</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: 'Company' })}
                        className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                          formData.userType === 'Company'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Building2 className="w-4 h-4 text-blue-600" />
                        <span>Company / Employer</span>
                      </button>
                    </div>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={formData.userType === 'Student' ? 'e.g. Rahul Sharma' : 'e.g. Priya Sundaram (HR Lead)'}
                          className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-blue-500/20 ${
                            errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-600'
                          }`}
                        />
                        <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                      </div>
                      {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email & Phone side-by-side */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-blue-500/20 ${
                              errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-600'
                            }`}
                          />
                          <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                        </div>
                        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-blue-500/20 ${
                              errors.phone ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-600'
                            }`}
                          />
                          <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                        </div>
                        {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Contextual Field (College/Degree for student, Company name for employer) */}
                    <div>
                      <label htmlFor="specificDetail" className="block text-xs font-semibold text-slate-700 mb-1">
                        {formData.userType === 'Student'
                          ? 'College / Degree / Target Role'
                          : 'Company Name & Target Positions'}
                      </label>
                      <input
                        id="specificDetail"
                        type="text"
                        value={formData.specificDetail}
                        onChange={(e) => setFormData({ ...formData, specificDetail: e.target.value })}
                        placeholder={
                          formData.userType === 'Student'
                            ? 'e.g. B.Tech CSE (2025) · Full Stack React / Java'
                            : 'e.g. Urvah Dynamics · Looking for 3 Frontend & 2 Backend Engineers'
                        }
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600 transition-all outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                        Message / Requirements <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={
                            formData.userType === 'Student'
                              ? 'Tell us about your background, primary technical skills, and what kind of IT roles you are seeking...'
                              : 'Describe your talent timeline, required tech stack proficiency, experience band, and team expectations...'
                          }
                          className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-blue-500/20 resize-y ${
                            errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-600'
                          }`}
                        />
                        <MessageSquare className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                      </div>
                      {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 disabled:bg-slate-400 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Details...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit {formData.userType === 'Student' ? 'Candidate Profile' : 'Talent Requirement'}</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Your information is held in confidence and delivered directly to NextUs leadership.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-4 text-center">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    Your inquiry has been successfully received by NextUs.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                    Our team (Roshini Thakur & Jayprakash Yadav Bomma) will review your {formData.userType.toLowerCase()} submission and respond shortly.
                  </p>

                  {/* Structured Summary Preview */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
                    <div className="font-semibold text-slate-700 pb-1 border-b border-slate-200 flex justify-between">
                      <span>Inquiry Summary</span>
                      <span className="text-blue-600 uppercase">{formData.userType}</span>
                    </div>
                    <div><strong className="text-slate-600">Email:</strong> {formData.email}</div>
                    <div><strong className="text-slate-600">Phone:</strong> {formData.phone}</div>
                    {formData.specificDetail && (
                      <div><strong className="text-slate-600">Focus:</strong> {formData.specificDetail}</div>
                    )}
                  </div>

                  {/* Instant Connect Options */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </a>

                    <a
                      href={createEmailLink()}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-blue-800 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
