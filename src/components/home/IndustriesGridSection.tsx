import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Landmark, HeartPulse, Factory, Building2, Flame, ShieldAlert, GraduationCap, Utensils, ShoppingBag, Truck, Scale, LucideIcon } from 'lucide-react';
import { industriesData } from '@/config/industries';

// Icon Map for 12 Industries
const industryIcons: Record<string, LucideIcon> = {
  'technology-saas': Cpu,
  'banking-finance': Landmark,
  'healthcare': HeartPulse,
  'manufacturing': Factory,
  'construction': Building2,
  'energy-oil-gas': Flame,
  'public-sector': ShieldAlert,
  'education': GraduationCap,
  'food-beverage': Utensils,
  'retail-ecommerce': ShoppingBag,
  'transport-logistics': Truck,
  'professional-services': Scale
};

export const IndustriesGridSection: React.FC = () => {
  return (
    <section id="industries" style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '88px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
              SECTOR ACCREDITATION EXPERTISE
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: 0 }}>
              Built for Your <span style={{ color: '#f9b933' }}>Industry Sector</span>
            </h2>
          </div>

          <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '480px', margin: 0 }}>
            TRAIBCERT provides tailored UKAS & ASCB accredited ISO auditing for high-compliance commercial, industrial, and technology sectors worldwide.
          </p>
        </div>

        {/* 12-Icon Industry Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {industriesData.map((ind) => {
            const IconComponent = industryIcons[ind.slug] || Building2;
            return (
              <Link
                key={ind.slug}
                href={`/resources/industries/${ind.slug}`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '160px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f9b933', color: '#2c2a75', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={20} />
                    </div>
                    <ArrowUpRight size={18} style={{ color: '#f9b933' }} />
                  </div>

                  <h3 style={{ fontSize: '16.5px', fontWeight: 800, margin: '0 0 6px', color: '#ffffff' }}>
                    {ind.name}
                  </h3>

                  <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.45, margin: 0 }}>
                    {ind.description}
                  </p>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {ind.relevantStandards.slice(0, 2).map((st, i) => (
                    <span key={i} style={{ fontSize: '10px', fontWeight: 700, backgroundColor: 'rgba(255,255,255,0.12)', color: '#f9b933', padding: '2px 6px', borderRadius: '4px' }}>
                      {st}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
