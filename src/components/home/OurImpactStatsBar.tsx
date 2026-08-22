import React from 'react';
import { ShieldCheck, Globe, CheckCircle2, Coins, Award } from 'lucide-react';

const impactStats = [
  {
    number: '5,000+',
    label: 'certified organisations across the globe',
    icon: ShieldCheck
  },
  {
    number: '45+',
    label: 'global markets served in UK, UAE & internationally',
    icon: Globe
  },
  {
    number: '99.4%',
    label: 'first-time Stage 1 & Stage 2 audit pass rate',
    icon: CheckCircle2
  },
  {
    number: '£0',
    label: 'certificate transfer fees with zero disruption',
    icon: Coins
  },
  {
    number: '15+ Yrs',
    label: 'accreditation excellence & IRCA lead auditing',
    icon: Award
  }
];

export const OurImpactStatsBar: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '64px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Title (Matching Video Frame 00:04) */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#c99327', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              OUR IMPACT
            </span>
            <div style={{ width: '40px', height: '3px', backgroundColor: '#f9b933', margin: '6px auto 0', borderRadius: '2px' }} />
          </div>
        </div>

        {/* 5-Column Stats Row with Dividers (Matching Video Frame 00:04-00:05) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          alignItems: 'flex-start'
        }}>
          {impactStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  padding: '0 12px',
                  borderRight: idx < impactStats.length - 1 ? '1px solid #e2e8f0' : 'none'
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#fff4d1', color: '#c99327', marginBottom: '12px' }}>
                  <Icon size={20} />
                </div>
                <div style={{ fontSize: ' clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#2c2a75', lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.4, marginTop: '8px' }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
