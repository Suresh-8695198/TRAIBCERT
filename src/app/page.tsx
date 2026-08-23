import React from 'react';
import { HeroWithQuoteForm } from '@/components/home/HeroWithQuoteForm';
import { OurServicesSection } from '@/components/home/OurServicesSection';
import { CertificationProcessTimeline } from '@/components/home/CertificationProcessTimeline';
import { ISOStandardsShowcaseGrid } from '@/components/home/ISOStandardsShowcaseGrid';
import { ELearningCoursesSection } from '@/components/home/ELearningCoursesSection';
import { TrainingCoursesSection } from '@/components/home/TrainingCoursesSection';
import { ExactIndustriesSection } from '@/components/home/ExactIndustriesSection';
import { InspectionSection } from '@/components/home/InspectionSection';
import { CertificationStandardsSlider } from '@/components/home/CertificationStandardsSlider';
import { GlobalPresenceMapSection } from '@/components/home/GlobalPresenceMapSection';
import { EssentialGuideBanner } from '@/components/home/EssentialGuideBanner';
import { RealResultsTestimonialSection } from '@/components/home/RealResultsTestimonialSection';
import { NewsInsightsSection } from '@/components/home/NewsInsightsSection';

export const metadata = {
  title: 'TRAIBCERT Limited | Independent ISO Certification Body',
  description: 'We at TRAIBCERT are an Independent, Impartial Certification Body for various ISO standards supporting your compliance needs for Certification, Training & Inspection.'
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero & Floating Quote Form */}
      <HeroWithQuoteForm />

      {/* 2. Our Services Grid Section */}
      <OurServicesSection />

      {/* 3. Our Certification Process and Time Line */}
      <CertificationProcessTimeline />

      {/* 4. Quick Links & ISO Certification Standards */}
      <ISOStandardsShowcaseGrid />

      {/* 5. E-Learning ISO Online Courses Section */}
      <ELearningCoursesSection />

      {/* 6. TRAINING Section */}
      <TrainingCoursesSection />

      {/* 7. INDUSTRY Sectors Section */}
      <ExactIndustriesSection />

      {/* 8. Inspection / Third party inspection Section */}
      <InspectionSection />

      {/* 9. Certification Standard's Slanted Slider */}
      <CertificationStandardsSlider />

      {/* 10. Our Presence 3D Interactive World Map (Positioned directly after Certification Standards) */}
      <GlobalPresenceMapSection />

      {/* 11. 6 Step Essential Guide Lead Magnet */}
      <EssentialGuideBanner />

      {/* 12. Real Results. Real ROI Testimonial & Video */}
      <RealResultsTestimonialSection />

      {/* 13. News & Industry Insights with Segmented Tabs */}
      <NewsInsightsSection />
    </main>
  );
}
