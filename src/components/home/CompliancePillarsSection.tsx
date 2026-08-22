import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

const pillarsList = [
  {
    title: 'Quality Management Systems (QMS)',
    description: 'ISO 9001:2015 frameworks to streamline operational workflows, customer satisfaction, and risk-based management controls.'
  },
  {
    title: 'Information Security & Data Privacy (ISMS)',
    description: 'ISO 27001:2022 and Cyber Essentials assessment to safeguard critical IP, cloud infrastructure, and regulatory data.'
  },
  {
    title: 'Environmental & Sustainability (EMS)',
    description: 'ISO 14001:2015 environmental standards helping UK and international enterprises meet ESG net-zero mandates.'
  },
  {
    title: 'Occupational Health & Safety (OHSMS)',
    description: 'ISO 45001:2018 certification eliminating workplace hazards and protecting workforce health across site operations.'
  }
];

export const CompliancePillarsSection: React.FC = () => {
  return (
    <section id="compliance-pillars" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid var(--gray-200)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Column: Chevron Feature List (Matching Screenshot 2) */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '12px' }}>
              TAILORED COMPLIANCE FRAMEWORKS
            </span>
            <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
              Key Compliance Pillars We Support
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '36px' }}>
              Tailored ISO and cyber security audit solutions that empower your management teams to navigate complex tender requirements and drive international growth.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {pillarsList.map((pillar, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid var(--gray-200)', paddingBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--gold-soft)', color: 'var(--gold-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <ChevronRight size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '6px' }}>
                        {pillar.title}
                      </h3>
                      <p style={{ fontSize: '13.5px', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Impact Corporate Photo Frame with Vertical Gold Accent Bar (Matching Screenshot 2) */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--gray-200)'
            }}>
              {/* Vertical Accent Bar */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '6px', backgroundColor: '#f9b933', zIndex: 2 }} />
              
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="TRAIBCERT Audit Team Session"
                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating Gold CTA Callout */}
            <div style={{
              position: 'absolute',
              bottom: '-24px',
              left: '32px',
              right: '32px',
              backgroundColor: '#2c2a75',
              color: '#ffffff',
              borderRadius: '12px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 12px 30px rgba(44, 42, 117, 0.3)'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#f9b933' }}>CQI IRCA & UK Lead Auditors</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginTop: '2px' }}>Direct telephone consultation available</div>
              </div>
              <Link href="/contact" className="btn btn-gold" style={{ padding: '8px 16px', fontSize: '12px' }}>
                <span>Contact Auditor</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
