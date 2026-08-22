import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const standardsList = [
  { code: 'ISO 9001:2015', name: 'Quality Management Systems', slug: 'iso-9001' },
  { code: 'ISO 10002:2018', name: 'Customer Satisfaction', slug: 'iso-10002' },
  { code: 'ISO 14001:2026', name: 'Environmental Management Systems', slug: 'iso-14001' },
  { code: 'ISO 45001:2018', name: 'Occupational Health & Safety', slug: 'iso-45001' },
  { code: 'ISO 22000:2018', name: 'Food Safety Management Systems', slug: 'iso-22000' },
  { code: 'ISO 20000-1:2018', name: 'IT Service Management System', slug: 'iso-20000-1' },
  { code: 'ISO 29001:2020', name: 'QMS for Oil & Natural Gas', slug: 'iso-29001' },
  { code: 'ISO 41001:2018', name: 'Facilities Management Systems', slug: 'iso-41001' },
  { code: 'ISO 22301:2019', name: 'Business Continuity Management', slug: 'iso-22301' },
  { code: 'ISO 27001:2022', name: 'Information Security Management', slug: 'iso-27001' },
  { code: 'ISO 31000:2018', name: 'Risk Management', slug: 'iso-31000' },
  { code: 'ISO 26000:2010', name: 'Guidance on Social Responsibility', slug: 'iso-26000' },
  { code: 'ISO 50001:2018', name: 'Energy Management Systems', slug: 'iso-50001' },
  { code: 'ISO 13485:2016', name: 'Medical Devices QMS', slug: 'iso-13485' },
  { code: 'ISO 21001:2018', name: 'Educational Organization Systems', slug: 'iso-21001' }
];

export const ISOStandardsShowcaseGrid: React.FC = () => {
  return (
    <section id="certification-standards" style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '88px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
              ISO STANDARDS & CERTIFICATION SCOPES
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Certification Standards We Audit
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: 0 }}>
            At TRAIBCERT, we offer certification services to our clients applicable to any type of manufacturing or service industry, administered in a non-discriminatory manner.
          </p>
        </div>

        {/* 15 Standards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {standardsList.map((st) => (
            <Link
              key={st.slug}
              href={`/certification/${st.slug}`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '20px',
                textDecoration: 'none',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '120px',
                backdropFilter: 'blur(4px)',
                transition: 'transform 0.2s ease, borderColor 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#f9b933', backgroundColor: 'rgba(249,185,51,0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                  {st.code}
                </span>
                <ArrowUpRight size={16} style={{ color: '#f9b933' }} />
              </div>

              <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff', marginTop: '12px', lineHeight: 1.3 }}>
                {st.name}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
