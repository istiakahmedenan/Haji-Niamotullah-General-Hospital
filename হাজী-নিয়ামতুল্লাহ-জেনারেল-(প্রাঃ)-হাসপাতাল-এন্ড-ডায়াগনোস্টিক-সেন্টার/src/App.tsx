/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { ManagementSection } from './components/ManagementSection';
import { ContactSection } from './components/ContactSection';
import { QuickCallCTA } from './components/QuickCallCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Banner with Main Hospital Photo */}
        <Hero />

        {/* About Hospital Section */}
        <AboutSection />

        {/* Medical & Diagnostic Services */}
        <ServicesSection />

        {/* Specialist Doctors List */}
        <DoctorsSection />

        {/* Board of Directors / Management */}
        <ManagementSection />

        {/* Contact Details & Inquiry Form */}
        <ContactSection />

        {/* Quick Hotline Call CTA Banner */}
        <QuickCallCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
