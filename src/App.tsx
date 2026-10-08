import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PartnersSection } from './components/PartnersSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedRole, setSelectedRole] = useState<'Student' | 'Company'>('Student');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const scrollToContact = (role?: 'Student' | 'Company', customNote?: string) => {
    if (role) {
      setSelectedRole(role);
    }
    if (customNote) {
      setPrefilledMessage(customNote);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string, audience: string) => {
    const role: 'Student' | 'Company' = audience === 'Companies' ? 'Company' : 'Student';
    setSelectedRole(role);
    setPrefilledMessage(`Inquiry regarding service: "${serviceTitle}". Please share more details.`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onContactClick={(role) => scrollToContact(role)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Landing / Introduction Hero */}
        <Hero
          onSelectRole={(role) => scrollToContact(role)}
          onContactClick={() => scrollToContact()}
        />

        {/* 2. About NextUs */}
        <AboutSection />

        {/* 3. What NextUs Does */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Companies / Organizations We Have Worked With */}
        <PartnersSection onPartnerInquiry={() => scrollToContact('Company', 'Hiring partnership inquiry for our organization.')} />

        {/* 5. Student Feedback & Success Stories */}
        <SuccessStoriesSection onStudentInquiry={() => scrollToContact('Student', 'Seeking entry-level IT opportunities & placement assistance.')} />

        {/* 6. Recruitment / Opportunity Section */}
        <OpportunitiesSection onSelectRole={(role) => scrollToContact(role)} />

        {/* 7. Contact Section */}
        <ContactSection
          initialRole={selectedRole}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
