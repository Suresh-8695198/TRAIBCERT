'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export const HeroWithQuoteForm: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      // Gentle, friendly subtle float bounded at 60px max, keeping form top safely clear of header
      setOffsetY(Math.min(scrollPos * 0.15, 60));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'visible' }}>
      
      {/* 1. Dark Blue Hero Section */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#090e2e',
          backgroundImage: "url('/assets/images/Home/hero_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#ffffff',
          paddingTop: '120px',
          paddingBottom: '260px',
          minHeight: '620px'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'flex-start'
            }}
          >
            {/* Left Hero Content: Headline with Word-by-Word Staggered Bottom-to-Top Animation */}
            <div>
              <style>{`
                @keyframes heroWordUp {
                  from {
                    opacity: 0;
                    transform: translateY(28px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
              <h1
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '0px',
                  letterSpacing: '-0.5px'
                }}
              >
                {["Independent,", "Impartial", "Certification", "Body", "for", "ISO", "Standards"].map((word, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      marginRight: '0.26em',
                      opacity: 0,
                      animation: `heroWordUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s forwards`
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            {/* Right Column Spacer (Leaves Room for Overlapping Floating Form Card) */}
            <div style={{ minHeight: '260px' }} />
          </div>
        </div>
      </section>

      {/* 2. White Horizontal Banner Strip directly below Hero (Moved Higher Up) */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: 'none', paddingTop: '36px', paddingBottom: '36px', marginTop: '-45px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px', alignItems: 'center' }}>
            
            {/* Left Content: Clean Flush Logo Badge + Vertical Divider + Statement Text + Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', width: '100%' }}>
              <div style={{ flexShrink: 0, paddingRight: '20px', borderRight: '1.5px solid #e2e8f0' }}>
                <img
                  src="/assets/images/Home/certification-logo.jpg"
                  alt="TRAIBCERT Certification Logo"
                  style={{ height: '105px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div style={{ flexGrow: 1, width: '100%' }}>
                <p style={{ fontSize: '16.5px', color: '#1a1854', lineHeight: 1.6, margin: '0 0 16px', fontWeight: 500 }}>
                  We at <strong>Traibcert</strong>, are an Independent, <strong>Impartial Certification</strong> Body for various ISO standards taking pride in supporting your compliance needs for <strong>Certification- Audits, Training, inspection & Regulatory Compliance</strong>.
                </p>
                <Link
                  href="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#f9b933',
                    color: '#1a1854',
                    padding: '11px 28px',
                    borderRadius: '8px',
                    fontSize: '14.5px',
                    fontWeight: 800,
                    textDecoration: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#e0a520';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                  }}
                >
                  <span>View More</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Column Spacer */}
            <div />
          </div>
        </div>
      </section>

      {/* 3. Floating Right Form Card Overlapping Both Dark Blue Hero Banner & White Strip (User Friendly & Bounded) */}
      <div
        className="container"
        style={{
          position: 'absolute',
          top: '76px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          pointerEvents: 'none',
          zIndex: 40
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          <div />
          <div
            style={{
              pointerEvents: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '28px 32px',
              color: '#0f172a',
              boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
              border: '1px solid #e2e8f0',
              transform: `translateY(${offsetY}px)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1854', marginBottom: '4px' }}>
                Get in Touch
              </h2>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.
              </p>
            </div>

            <ZohoBiginForm defaultStandard="ISO 9001:2015" />
          </div>
        </div>
      </div>

    </div>
  );
};
