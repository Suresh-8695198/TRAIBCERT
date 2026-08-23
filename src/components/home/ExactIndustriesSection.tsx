'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Globe2 } from 'lucide-react';

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
        position: 'relative',
        backgroundColor: '#0f172a',
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.65)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', alignItems: 'stretch' }}>
          
          {/* Left Side: Creative Gold/Yellow Branded Card with White Hover Pill Badges */}
          <div
            style={{
              backgroundColor: '#f9b933',
              color: '#1a1854',
              padding: '64px 52px',
              position: 'relative',
              zIndex: 3,
              boxShadow: '8px 0 32px rgba(0,0,0,0.15)'
            }}
          >
            {/* Creative 12-Dot Pattern Accent */}
            <svg
              style={{
                position: 'absolute',
                right: '32px',
                top: '28px',
                width: '96px',
                height: '68px',
                opacity: 0.22,
                pointerEvents: 'none'
              }}
            >
              {[...Array(3)].map((_, row) =>
                [...Array(4)].map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={12 + col * 24}
                    cy={12 + row * 22}
                    r="3.5"
                    fill="#1a1854"
                  />
                ))
              )}
            </svg>

            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#1a1854', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px', lineHeight: 1.1 }}>
              INDUSTRY
            </h2>

            <p style={{ fontSize: '15.5px', fontWeight: 700, color: '#1a1854', marginBottom: '32px', lineHeight: 1.5, opacity: 0.95 }}>
              We offer global solutions in many countries and range of industry sectors
            </p>

            {/* 2-Subcolumn List of 13 Industry Sectors with Interactive White Hover Capsule Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px 24px' }}>
              
              {/* Left Sub-column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {leftIndustries.map((ind, idx) => (
                  <Link
                    key={idx}
                    href={`/industry/${ind.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      color: '#1a1854',
                      backgroundColor: 'transparent',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '14.5px',
                      fontWeight: 800,
                      textDecoration: 'none',
                      transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                    onMouseOver={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = '#ffffff';
                      el.style.transform = 'translateX(6px)';
                      el.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
                      const badge = el.querySelector('.arrow-badge') as HTMLElement;
                      if (badge) badge.style.transform = 'translate(2px, -2px) scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = 'transparent';
                      el.style.transform = 'translateX(0)';
                      el.style.boxShadow = 'none';
                      const badge = el.querySelector('.arrow-badge') as HTMLElement;
                      if (badge) badge.style.transform = 'none';
                    }}
                  >
                    <span style={{ lineHeight: 1.3 }}>{ind.name}</span>
                    <span
                      className="arrow-badge"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '22px',
                        height: '22px',
                        borderRadius: '4px',
                        backgroundColor: '#1a1854',
                        color: '#ffffff',
                        flexShrink: 0,
                        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                  </Link>
                ))}
              </div>

              {/* Right Sub-column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {rightIndustries.map((ind, idx) => (
                  <Link
                    key={idx}
                    href={`/industry/${ind.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      color: '#1a1854',
                      backgroundColor: 'transparent',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '14.5px',
                      fontWeight: 800,
                      textDecoration: 'none',
                      transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                    onMouseOver={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = '#ffffff';
                      el.style.transform = 'translateX(6px)';
                      el.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
                      const badge = el.querySelector('.arrow-badge') as HTMLElement;
                      if (badge) badge.style.transform = 'translate(2px, -2px) scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = 'transparent';
                      el.style.transform = 'translateX(0)';
                      el.style.boxShadow = 'none';
                      const badge = el.querySelector('.arrow-badge') as HTMLElement;
                      if (badge) badge.style.transform = 'none';
                    }}
                  >
                    <span style={{ lineHeight: 1.3 }}>{ind.name}</span>
                    <span
                      className="arrow-badge"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '22px',
                        height: '22px',
                        borderRadius: '4px',
                        backgroundColor: '#1a1854',
                        color: '#ffffff',
                        flexShrink: 0,
                        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          </div>

          {/* Right Side: Industrial Background Visual View Space */}
          <div
            style={{
              padding: '64px 48px',
              position: 'relative',
              zIndex: 2,
              minHeight: '440px'
            }}
          />

        </div>
      </div>
    </section>
  );
};
