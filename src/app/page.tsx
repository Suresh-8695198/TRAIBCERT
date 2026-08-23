import React from 'react';
import { HeroWithQuoteForm } from '@/components/home/HeroWithQuoteForm';
import { OurServicesSection } from '@/components/home/OurServicesSection';
import { SplitSolutionsSection } from '@/components/home/SplitSolutionsSection';
import { ExactServicesSection } from '@/components/home/ExactServicesSection';
import { ISOStandardsShowcaseGrid } from '@/components/home/ISOStandardsShowcaseGrid';
import { CertificationProcessTimeline } from '@/components/home/CertificationProcessTimeline';
import { EssentialGuideBanner } from '@/components/home/EssentialGuideBanner';
import { RealResultsTestimonialSection } from '@/components/home/RealResultsTestimonialSection';
import { NewsInsightsSection } from '@/components/home/NewsInsightsSection';
import { ExactIndustriesSection } from '@/components/home/ExactIndustriesSection';

export const metadata = {
  title: 'TRAIBCERT Limited | Independent ISO Certification Body',
  description: 'We at TRAIBCERT are an Independent, Impartial Certification Body for various ISO standards supporting your compliance needs for Certification, Training & Inspection.'
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero & Floating Quote Form */}
      <HeroWithQuoteForm />

      {/* 2. Our Services Grid Section (Matching User Exact Mockup) */}
      <OurServicesSection />

      {/* 3. Split Image & Solutions List with Chevron Arrows */}
      <SplitSolutionsSection />

      {/* 4. Our Core 4 Services Pillars */}
      <ExactServicesSection />

      {/* 5. ISO Certification Standards We Audit */}
      <ISOStandardsShowcaseGrid />

      {/* 6. Step-by-Step Certification Process & Time Line */}
      <CertificationProcessTimeline />

      {/* 7. 6 Step Essential Guide Lead Magnet */}
      <EssentialGuideBanner />

      {/* 8. Real Results. Real ROI Testimonial & Video */}
      <RealResultsTestimonialSection />

      {/* 9. News & Industry Insights with Segmented Tabs */}
      <NewsInsightsSection />

      {/* 10. Industry Sectors We Support */}
      <ExactIndustriesSection />
    </main>
  );
}
