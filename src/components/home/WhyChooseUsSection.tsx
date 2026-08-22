import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Zap, Coins, Globe, Clock, UserCheck, ArrowRight } from 'lucide-react';

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'UKAS & ASCB Accredited',
    badge: 'GLOBAL TRUST',
    description: 'Internationally recognized ISO certificates accepted by enterprise procurement teams & UK government tenders across 45+ countries.',
    color: '#2c2a75'
  },
  {
    icon: Coins,
    title: '£0 Certificate Transfer',
    badge: 'ZERO FEE SWITCH',
    description: 'Transfer your existing ISO certification to TRAIBCERT completely free without interrupting your current 3-year audit cycle.',
    color: '#c99327'
  },
  {
    icon: Zap,
    title: '99.4% First-Time Pass Rate',
    badge: 'PROVEN SUCCESS',
    description: 'Our pragmatic gap assessment process ensures your management system passes Stage 1 and Stage 2 audits efficiently.',
    color: '#2f9e6e'
  },
  {
    icon: Clock,
    title: '2-Hour Quote Response',
    badge: 'RAPID TURNAROUND',
    description: 'Get transparent, fixed-fee proposals from our UK audit desk within 2 business hours with zero hidden travel surcharges.',
    color: '#3b82f6'
  },
  {
    icon: Globe,
    title: 'UK & UAE Direct Auditor Hubs',
    badge: 'DUAL PRESENCE',
    description: 'Local lead auditor teams based in Middlesex, London (UK) and Dubai (UAE) offering responsive on-site and remote audits.',
    color: '#8b5cf6'
  },
  {
    icon: UserCheck,
    title: 'Pragmatic Non-Disruptive Auditing',
    badge: 'BUSINESS FOCUSED',
    description: 'Audits designed to add real business value to your operations, eliminating unnecessary bureaucracy and paperwork strain.',
    color: '#ec4899'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid var(--gray-200)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            WHY TRAIBCERT IS THE PREFERRED CHOICE
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Why Leading Organisations Choose TRAIBCERT
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            We combine rigorous accreditation standards with a pragmatic, customer-centric approach that helps businesses achieve and maintain ISO certification seamlessly.
          </p>
        </div>

        {/* 6 Differentiators Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  border: '1px solid var(--gray-200)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Accent Strip */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: item.color }} />

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                      <Icon size={24} />
                    </div>
                    <span style={{ backgroundColor: 'var(--gold-soft)', color: 'var(--gold-strong)', fontSize: '10px', fontWeight: 800, padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Strip */}
        <div style={{
          marginTop: '48px',
          backgroundColor: '#2c2a75',
          borderRadius: '16px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          color: '#ffffff'
        }}>
          <div>
            <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Ready to experience a hassle-free audit process?
            </h4>
            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.8)', margin: '4px 0 0' }}>
              Speak directly with a lead auditor or request an instant fixed-fee quotation today.
            </p>
          </div>
          <Link href="/contact/enquiry" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: '13.5px' }}>
            <span>Get Instant Fixed Quote</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};
