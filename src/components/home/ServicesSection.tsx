import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const infographicPillars = [
  {
    id: 'pillar-1',
    pillText: 'UKAS & ASCB Accredited',
    title: 'ISO Certifications',
    description: 'Independent Stage 1 & Stage 2 audits for ISO 9001, 14001, 45001, 27001, 22000, 13485, and specialized standards.',
    href: '/certification',
    linkText: 'Explore ISO Standards',
    cardBg: '#1a1854' // Deep Navy
  },
  {
    id: 'pillar-2',
    pillText: 'IASME Certified CB',
    title: 'Cyber Security',
    description: 'Cyber Essentials, Cyber Essentials Plus, SOC 2, PCI DSS, and penetration testing for cloud & corporate infrastructure.',
    href: '/certification/cyber-essentials',
    linkText: 'View Cyber Services',
    cardBg: '#2c2a75' // Primary Indigo
  },
  {
    id: 'pillar-3',
    pillText: 'CQI IRCA Accredited',
    title: 'Training & Academy',
    description: 'Awareness, Internal Auditor, and Lead Auditor training courses delivered online or on-site across UK & UAE.',
    href: '/training',
    linkText: 'Browse Courses',
    cardBg: '#2563eb' // Vibrant Royal Blue
  },
  {
    id: 'pillar-4',
    pillText: 'Global Port Inspection',
    title: 'Inspection Services',
    description: 'Pre-Shipment Inspection (PSI) for export goods, industrial machinery, and international supply chain flows.',
    href: '/contact/enquiry',
    linkText: 'Inspection Info',
    cardBg: '#3b82f6' // Cobalt Blue
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" style={{ backgroundColor: '#f8fafc', padding: '88px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            CORE SERVICE PILLARS
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Comprehensive Service Pillars
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            TRAIBCERT provides end-to-end accreditation, cyber security assessment, IRCA training, and pre-shipment inspection services.
          </p>
        </div>

        {/* Infographic Style Cards Grid (Matching User Screenshot Spec 100%) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
          {infographicPillars.map(pillar => (
            <div
              key={pillar.id}
              style={{
                backgroundColor: pillar.cardBg,
                color: '#ffffff',
                /* Asymmetric Rounded Leaf Corner Shape (Exact Match to User Screenshot) */
                borderRadius: '0 40px 0 40px',
                padding: '36px 28px 32px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 30px rgba(26, 24, 84, 0.15)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                marginTop: '12px'
              }}
            >
              {/* Overlapping Top Pill Badge (Exact Match to User Screenshot) */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '20px',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 700,
                padding: '5px 14px',
                borderRadius: '999px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.3px'
              }}>
                {pillar.pillText}
              </div>

              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginTop: '12px', marginBottom: '14px', lineHeight: 1.25 }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <Link
                href={pillar.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  paddingTop: '16px',
                  transition: 'gap 0.2s ease'
                }}
              >
                <span>{pillar.linkText}</span>
                <ArrowRight size={16} style={{ color: '#f9b933' }} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
