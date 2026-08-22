import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Building2 } from 'lucide-react';

const industrySectors = [
  { name: 'Agriculture and Farming', slug: 'technology-saas' },
  { name: 'Banking and Financial Services', slug: 'banking-finance' },
  { name: 'Construction and Building', slug: 'construction' },
  { name: 'Customer Service', slug: 'public-sector' },
  { name: 'Environmental & Sustainability', slug: 'energy-oil-gas' },
  { name: 'Facilities Management', slug: 'education' },
  { name: 'Health and Safety', slug: 'healthcare' },
  { name: 'Information Management', slug: 'technology-saas' },
  { name: 'Manufacturing and Processing', slug: 'manufacturing' },
  { name: 'Quality & Business Improvement', slug: 'professional-services' },
  { name: 'Transport and Logistics', slug: 'transport-logistics' },
  { name: 'Waste and Recycling', slug: 'energy-oil-gas' },
  { name: 'Inspection / Third Party Inspection', slug: 'transport-logistics' }
];

export const ExactIndustriesSection: React.FC = () => {
  return (
    <section id="industries" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            SECTORS WE SERVE
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Industry Sectors We Support
          </h2>
          <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6 }}>
            We offer global solutions in many countries and a wide range of industry sectors to ensure compliance, safety, and operational excellence.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
          {industrySectors.map((ind, idx) => (
            <Link
              key={idx}
              href={`/resources/industries/${ind.slug}`}
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '24px 20px',
                textDecoration: 'none',
                color: '#2c2a75',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#fff4d1', color: '#c99327', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Building2 size={18} />
                </div>
                <span style={{ fontSize: '14.5px', fontWeight: 800, color: '#2c2a75', lineHeight: 1.3 }}>
                  {ind.name}
                </span>
              </div>
              <ArrowUpRight size={16} style={{ color: '#c99327', flexShrink: 0 }} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
