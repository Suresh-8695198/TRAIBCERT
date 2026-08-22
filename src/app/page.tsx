import React from 'react';
import { HeroWithQuoteForm } from '@/components/home/HeroWithQuoteForm';
import { ExactServicesSection } from '@/components/home/ExactServicesSection';
import { EssentialGuideBanner } from '@/components/home/EssentialGuideBanner';
import { CertificationProcessTimeline } from '@/components/home/CertificationProcessTimeline';
import { ISOStandardsShowcaseGrid } from '@/components/home/ISOStandardsShowcaseGrid';
import { ELearningCatalogSection } from '@/components/home/ELearningCatalogSection';
import { InHouseTrainingSection } from '@/components/home/InHouseTrainingSection';
import { ExactIndustriesSection } from '@/components/home/ExactIndustriesSection';
import { SubscribeEnquirySection } from '@/components/home/SubscribeEnquirySection';

export const metadata = {
  title: 'TRAIBCERT Limited | Independent ISO Certification Body',
  description: 'We at TRAIBCERT are an Independent, Impartial Certification Body for various ISO standards supporting your compliance needs for Certification, Training & Inspection.'
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero & Independent Impartial Certification Body intro (Matching Reference Screenshot 100%) */}
      <HeroWithQuoteForm />

      {/* 2. Our Services 4 Pillars (Certification, Training, Inspection, E-Learning) */}
      <ExactServicesSection />

      {/* 3. 6 Step Essential Guide for Certification Lead Magnet */}
      <EssentialGuideBanner />

      {/* 4. Our Certification Process & Time Line */}
      <CertificationProcessTimeline />

      {/* 5. ISO Certification Standards Grid (15 Key Standards) */}
      <ISOStandardsShowcaseGrid />

      {/* 6. E-Learning Courses Catalog Grid */}
      <ELearningCatalogSection />

      {/* 7. ISO Training & Risk Management In-House Modules */}
      <InHouseTrainingSection />

      {/* 8. Industry Sectors We Support */}
      <ExactIndustriesSection />

      {/* 9. Subscribe & Fast Proposal Enquiry Form */}
      <SubscribeEnquirySection />
    </main>
  );
}
