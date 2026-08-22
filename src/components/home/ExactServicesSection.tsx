import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, GraduationCap, Search, Monitor } from 'lucide-react';

const serviceItems = [
  {
    icon: ShieldCheck,
    title: 'Certification',
    description: 'At TRAIBCERT, we offer certification services to our clients applicable to any type of manufacturing or service industry and is administered in a non-discriminatory manner.',
    href: '/certification',
    pillBg: '#2c2a75'
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'At TRAIBCERT, we have developed a suite of ISO training courses, total package of the approach, highly interactive with real world examples and practical case studies.',
    href: '/training',
    pillBg: '#2563eb'
  },
  {
    icon: Search,
    title: 'Inspection',
    description: 'The present scenario of business environment, out-sourcing majority of jobs & services to appropriate agencies is on the increase including third party inspection & validation.',
    href: '/contact/enquiry',
    pillBg: '#0f172a'
  },
  {
    icon: Monitor,
    title: 'E-Learning',
    description: 'Learning conducted via electronic media, typically on the Internet. Successful e-learning depends on the self-motivation of individuals to study effectively.',
    href: 'https://academy.traibcert.org.uk',
    isExternal: true,
    pillBg: '#00c9a7'
  }
];

export const ExactServicesSection: React.FC = () => {
  return (
    <section id="services" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            OUR CORE SERVICES
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Comprehensive Certification, Training & Inspection Services
          </h2>
          <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6 }}>
            We at TRAIBCERT, are an Independent, Impartial Certification Body for various ISO standards taking pride in supporting your compliance needs for certification- Audits, Training, inspection & Regulatory Compliance. We are most sought after by all customers for the well qualified audit team delivering most consistent report in a reliable manner.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {serviceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  padding: '36px 28px 32px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.25s ease, boxShadow 0.25s ease'
                }}
              >
                {/* Yellow Brand Accent Line */}
                <div style={{ position: 'absolute', top: '36px', left: '28px', width: '4px', height: '36px', backgroundColor: '#f9b933', borderRadius: '2px' }} />

                <div style={{ paddingLeft: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fff4d1', color: '#c99327', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Icon size={24} />
                  </div>

                  <h3 style={{ fontSize: '21px', fontWeight: 800, color: '#2c2a75', marginBottom: '12px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                    {item.description}
                  </p>
                </div>

                <div>
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#2c2a75',
                      fontSize: '14px',
                      fontWeight: 800,
                      textDecoration: 'none'
                    }}
                  >
                    <span>View More</span>
                    <ArrowRight size={15} style={{ color: '#c99327' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
