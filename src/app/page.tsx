import React from 'react';
import { HeroWithQuoteForm } from '@/components/home/HeroWithQuoteForm';
import { RecommendStatsSection } from '@/components/home/RecommendStatsSection';
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
      {/* 1. Hero & Quote Form (Frames 0 & 1) */}
      <HeroWithQuoteForm />

      {/* 2. 96% Client Recommendation & 3 Light Cyan Cards (Frame 2) */}
      <RecommendStatsSection />

      {/* 3. Split Image & Solutions List with Chevron Arrows (Frame 3) */}
      <SplitSolutionsSection />

      {/* 4. Our Core 4 Services Pillars */}
      <ExactServicesSection />

      {/* 5. ISO Certification Standards We Audit */}
      <ISOStandardsShowcaseGrid />

      {/* 6. Step-by-Step Certification Process & Time Line */}
      <CertificationProcessTimeline />

      {/* 7. 6 Step Essential Guide Lead Magnet */}
      <EssentialGuideBanner />

      {/* 8. Real Results. Real ROI Testimonial & Video (Frames 4 & 5) */}
      <RealResultsTestimonialSection />

      {/* 9. News & Industry Insights with Segmented Tabs (Frames 6 & 7) */}
      <NewsInsightsSection />

      {/* 10. Industry Sectors We Support */}
      <ExactIndustriesSection />
    </main>
  );
}


