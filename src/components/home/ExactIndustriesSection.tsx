'use client';

import React from 'react';
import Link from 'next/link';

const leftIndustries = [
  { name: 'Agriculture and Farming', slug: 'agriculture' },
  { name: 'Banking and Financial Services', slug: 'banking' },
  { name: 'Construction and Building', slug: 'construction' },
  { name: 'Customer Service', slug: 'customer-service' },
  { name: 'Environmental management and sustainability', slug: 'environmental' },
  { name: 'Facilities management', slug: 'facilities' }
];

const rightIndustries = [
  { name: 'Health and safety', slug: 'health-safety' },
  { name: 'Information management', slug: 'information' },
  { name: 'Manufacturing and processing', slug: 'manufacturing' },
  { name: 'Quality and business improvement', slug: 'quality-improvement' },
  { name: 'Transport and logistics', slug: 'transport-logistics' },
  { name: 'Waste and recycling', slug: 'waste-recycling' },
  { name: 'Welding', slug: 'welding' }
];

export const ExactIndustriesSection: React.FC = () => {
  return (
    <section
      id="industry"
      style={{
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.4)), url('/assets/images/Home/process_meeting.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
        
        {/* Left Side: Solid Gold/Yellow Overlay Card (Matching Screenshot) */}
        <div
          style={{
            backgroundColor: '#f9b933',
            color: '#1a1854',
            padding: '64px 56px',
            position: 'relative',
            zIndex: 2
          }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#1a1854', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            INDUSTRY
          </h2>

          <p style={{ fontSize: '16px', fontWeight: 600, color: '#1a1854', marginBottom: '36px', lineHeight: 1.5 }}>
            We offer global solutions in many countries and range of industry sectors
          </p>

          {/* 2-Subcolumn List of 13 Industry Sectors with Arrows */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px 28px' }}>
            
            {/* Left Sub-column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {leftIndustries.map((ind, idx) => (
                <Link
                  key={idx}
                  href={`/industry/${ind.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1854',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.75';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 900 }}>&rarr;</span>
                  <span>{ind.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Sub-column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {rightIndustries.map((ind, idx) => (
                <Link
                  key={idx}
                  href={`/industry/${ind.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1854',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.75';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 900 }}>&rarr;</span>
                  <span>{ind.name}</span>
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Right Side: Industrial Background View Space */}
        <div style={{ minHeight: '360px' }} />

      </div>
    </section>
  );
};
