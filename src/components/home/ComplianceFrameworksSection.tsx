import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

const frameworks = [
  {
    title: 'Quality Management Systems (ISO 9001)',
    description: 'ISO 9001:2015 frameworks to streamline operational workflows, customer satisfaction, and risk-based management controls.'
  },
  {
    title: 'Information Security & Data Privacy (ISO 27001)',
    description: 'ISO 27001:2022 and Cyber Essentials assessment to safeguard critical IP, cloud infrastructure, and regulatory data.'
  },
  {
    title: 'Environmental & Sustainability (ISO 14001)',
    description: 'ISO 14001:2026 environmental standards helping UK and international enterprises meet ESG net-zero mandates.'
  },
  {
    title: 'Occupational Health & Safety (ISO 45001)',
    description: 'ISO 45001:2018 certification eliminating workplace hazards and protecting workforce health across site operations.'
  }
];

export const ComplianceFrameworksSection: React.FC = () => {
  return (
    <section id="compliance-frameworks" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Column: Chevron List (Matching Video Frame 00:06-00:07) */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '12px' }}>
              TAILORED AUDIT FRAMEWORKS
            </span>
            
            <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
              Key Compliance Frameworks We Support
            </h2>

            <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6, marginBottom: '36px' }}>
              Tailored ISO and cyber security audit solutions that empower your management teams to navigate complex tender requirements and drive international growth.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {frameworks.map((fw, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#fff4d1', color: '#c99327', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <ChevronRight size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2c2a75', marginBottom: '6px' }}>
                        {fw.title}
                      </h3>
                      <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                        {fw.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo Frame of Auditors Meeting (Matching Video Frame 00:07) */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              {/* Honey Yellow Vertical Accent Bar */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '6px', backgroundColor: '#f9b933', zIndex: 2 }} />

              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="TRAIBCERT Lead Audit Session"
                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating Gold CTA Card */}
            <div style={{
              position: 'absolute',
              bottom: '-24px',
              left: '32px',
              right: '32px',
              backgroundColor: '#2c2a75',
              color: '#ffffff',
              borderRadius: '14px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 12px 30px rgba(44, 42, 117, 0.3)'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#f9b933' }}>CQI IRCA Certified Lead Auditors</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginTop: '2px' }}>Direct telephone consultation available</div>
              </div>
              <Link href="/contact" className="btn btn-gold" style={{ padding: '8px 16px', fontSize: '12px' }}>
                <span>Speak to Auditor</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
