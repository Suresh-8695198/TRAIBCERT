'use client';

import React from 'react';
import Link from 'next/link';
import { Layers, ShieldCheck, Cpu } from 'lucide-react';

const statsCards = [
  {
    title: 'A Complete ISO Audit System',
    description: 'We don’t just audit processes — we help you put a complete ISO compliance management system in place.'
  },
  {
    title: 'Individuals to Enterprise',
    description: 'From small-to-medium businesses to global enterprises, TRAIBCERT works wherever your operations are.'
  },
  {
    title: 'Tech-Enabled Certification',
    description: 'We embed modern digital tools — including automated gap analysis — into how your team prepares for audit.'
  }
];

export const RecommendStatsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#f8fafc', paddingTop: '80px', paddingBottom: '80px', borderTop: 'none' }}>
      <div className="container">
        
        {/* Section Headline */}
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1a1854', marginBottom: '36px', lineHeight: 1.2 }}>
          96% of Clients Recommend TRAIBCERT
        </h2>

        {/* 3 Light Cyan Cards Grid (Matching Frame 2) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '36px' }}>
          {statsCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#f0fdfa',
                border: '1px solid #ccfbf1',
                borderRadius: '12px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1854', marginBottom: '14px', lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Blue Pill CTA Button (Matching Frame 2) */}
        <div>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#0047e0',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <span>Speak to an Auditor</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '16px' }}>
              <span style={{ display: 'block', width: '16px', height: '2px', backgroundColor: '#ffffff', borderRadius: '1px' }} />
              <span style={{ display: 'block', width: '11px', height: '2px', backgroundColor: '#ffffff', borderRadius: '1px' }} />
              <span style={{ display: 'block', width: '14px', height: '2px', backgroundColor: '#ffffff', borderRadius: '1px' }} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
