import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Lock, GraduationCap, Truck } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'ISO Certifications',
    description: 'UKAS & ASCB accredited Stage 1 & 2 audits for ISO 9001, 14001, 45001, 27001, 22000, and 13485.',
    href: '/certification'
  },
  {
    icon: Lock,
    title: 'Cyber Security',
    description: 'IASME licensed Cyber Essentials, Cyber Essentials Plus, SOC 2, PCI DSS, and penetration testing.',
    href: '/certification/cyber-essentials'
  },
  {
    icon: GraduationCap,
    title: 'Training & Academy',
    description: 'CQI IRCA recognized Foundation, Awareness, Internal Auditor, and Lead Auditor training courses.',
    href: '/training'
  },
  {
    icon: Truck,
    title: 'Inspection Services',
    description: 'Pre-Shipment Inspection (PSI) for global export goods, industrial machinery, and port supply flows.',
    href: '/contact/enquiry'
  }
];

export const ServicePillarsSection: React.FC = () => {
  return (
    <section id="services" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            CORE SERVICE PILLARS
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#2c2a75', lineHeight: 1.2, marginBottom: '16px' }}>
            Solutions for Every Stage of Compliance Success
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            TRAIBCERT offers end-to-end service solutions for every stage of your accreditation lifecycle: from initial gap assessment to full accredited certification and continuous audit reinforcement.
          </p>
        </div>

        {/* 4 Icon Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Honey Yellow Brand Accent Bar */}
                <div style={{ position: 'absolute', top: '32px', left: '24px', width: '4px', height: '36px', backgroundColor: '#f9b933', borderRadius: '2px' }} />

                <div style={{ paddingLeft: '16px' }}>
                  <div style={{ color: '#2c2a75', marginBottom: '16px' }}>
                    <Icon size={32} style={{ color: '#2c2a75' }} />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#2c2a75', marginBottom: '10px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div>
          <Link
            href="/certification"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#2c2a75',
              fontWeight: 800,
              fontSize: '15px',
              textDecoration: 'none'
            }}
          >
            <span>Explore All Core Services</span>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#2c2a75', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
