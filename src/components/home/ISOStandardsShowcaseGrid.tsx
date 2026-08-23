'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ThumbsUp,
  Globe,
  HardHat,
  UtensilsCrossed,
  Network,
  Factory,
  Cog,
  Handshake,
  Lock,
  Umbrella,
  HeartHandshake,
  Lightbulb,
  Stethoscope,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

const allStandards = [
  // Left Column items (01 to 08)
  { num: '01', text: 'ISO 9001:2015 Quality Management Systems', icon: CheckCircle2, color: '#e11d48', slug: 'iso-9001' },
  { num: '02', text: 'ISO 10002:2018 Customer Satisfaction', icon: ThumbsUp, color: '#f59e0b', slug: 'iso-10002' },
  { num: '03', text: 'ISO 14001:2015 Environmental Systems', icon: Globe, color: '#0284c7', slug: 'iso-14001' },
  { num: '04', text: 'ISO 45001:2018 Health & Safety Management', icon: HardHat, color: '#7c3aed', slug: 'iso-45001' },
  { num: '05', text: 'ISO 22000:2018 Food Safety Management', icon: UtensilsCrossed, color: '#10b981', slug: 'iso-22000' },
  { num: '06', text: 'ISO 20000-1:2018 IT Service Management', icon: Network, color: '#06b6d4', slug: 'iso-20000-1' },
  { num: '07', text: 'ISO 29001:2020 QMS Oil & Natural Gas', icon: Factory, color: '#ea580c', slug: 'iso-29001' },
  { num: '08', text: 'ISO 41001:2018 Facilities Management Systems', icon: Cog, color: '#2563eb', slug: 'iso-41001' },

  // Right Column items (09 to 15)
  { num: '09', text: 'ISO 22301:2019 Business Continuity Systems', icon: Handshake, color: '#e11d48', slug: 'iso-22301' },
  { num: '10', text: 'ISO 27001:2022 Information Security System', icon: Lock, color: '#f59e0b', slug: 'iso-27001' },
  { num: '11', text: 'ISO 31000:2018 Risk Management', icon: Umbrella, color: '#0284c7', slug: 'iso-31000' },
  { num: '12', text: 'ISO 26000:2010 Guidance on Social Responsibility', icon: HeartHandshake, color: '#7c3aed', slug: 'iso-26000' },
  { num: '13', text: 'ISO 50001:2018 Energy Management', icon: Lightbulb, color: '#10b981', slug: 'iso-50001' },
  { num: '14', text: 'ISO 13485:2016 Medical Devices Management', icon: Stethoscope, color: '#06b6d4', slug: 'iso-13485' },
  { num: '15', text: 'ISO 21001:2018 Educational Org Management', icon: GraduationCap, color: '#ea580c', slug: 'iso-21001' }
];

export const ISOStandardsShowcaseGrid: React.FC = () => {
  const leftItems = allStandards.slice(0, 8);
  const rightItems = allStandards.slice(8, 15);

  return (
    <section
      id="certification-standards"
      style={{
        backgroundColor: '#2e3746',
        color: '#ffffff',
        padding: '88px 0 100px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes dashConnector {
          from {
            stroke-dashoffset: 20;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .infographic-connector-line {
          stroke: rgba(255, 255, 255, 0.45);
          stroke-width: 2;
          stroke-dasharray: 5 5;
          animation: dashConnector 1.5s linear infinite;
        }
        @keyframes spinSpectrumRing {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spectrum-outer-ring {
          animation: spinSpectrumRing 16s linear infinite;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1360px' }}>
        
        {/* Top Header Statement */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            CERTIFICATION
          </h2>

          <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.65, marginBottom: '28px', fontWeight: 400 }}>
            At <strong>TRAIBCERT</strong>, we offer certification services to our clients applicable to any type of manufacturing or service industry and is administered in a non-discriminatory manner.
          </p>

          <Link
            href="/certification"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#f9b933',
              color: '#1a1854',
              padding: '10px 20px 10px 24px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: 'none',
              transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#e0a520';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              const badge = (e.currentTarget as HTMLElement).querySelector('.arrow-badge') as HTMLElement;
              if (badge) badge.style.transform = 'translate(3px, -3px) rotate(45deg) scale(1.15)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
              (e.currentTarget as HTMLElement).style.transform = 'none';
              const badge = (e.currentTarget as HTMLElement).querySelector('.arrow-badge') as HTMLElement;
              if (badge) badge.style.transform = 'none';
            }}
          >
            <span>View More</span>
            <span
              className="arrow-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                backgroundColor: '#1a1854',
                color: '#f9b933',
                flexShrink: 0,
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Infographic Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 280px minmax(0, 1fr)',
            gap: '32px',
            alignItems: 'center',
            position: 'relative'
          }}
          className="infographic-capsule-grid"
        >
          {/* Overlay SVG Connecting Dotted Bezier Paths */}
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            {/* Left Column Connecting Curved Bezier Paths */}
            {leftItems.map((_, i) => {
              const yPos = (i + 0.5) * (600 / 8);
              return (
                <path
                  key={`path-left-${i}`}
                  d={`M 500 300 C 410 300, 410 ${yPos}, 355 ${yPos}`}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2.5"
                  strokeDasharray="6,6"
                  className="animated-dash-line"
                />
              );
            })}

            {/* Right Column Connecting Curved Bezier Paths */}
            {rightItems.map((_, i) => {
              const yPos = (i + 0.5) * (600 / 7);
              return (
                <path
                  key={`path-right-${i}`}
                  d={`M 500 300 C 590 300, 590 ${yPos}, 645 ${yPos}`}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2.5"
                  strokeDasharray="6,6"
                  className="animated-dash-line"
                />
              );
            })}
          </svg>

          {/* LEFT COLUMN CAPSULE CARDS (01 to 08) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 2 }}>
            {leftItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.num}
                  href={`/certification/${item.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '32px',
                    backgroundColor: item.color,
                    padding: '6px 6px 6px 24px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                    const circle = (e.currentTarget as HTMLElement).querySelector('.white-circle-badge') as HTMLElement;
                    if (circle) circle.style.transform = 'rotate(360deg)';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    const circle = (e.currentTarget as HTMLElement).querySelector('.white-circle-badge') as HTMLElement;
                    if (circle) circle.style.transform = 'rotate(0deg)';
                  }}
                >
                  <div style={{ flexGrow: 1, paddingRight: '12px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                      STEP {item.num}
                    </div>
                    <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, display: 'block', marginTop: '2px' }}>
                      {item.text}
                    </span>
                  </div>

                  <div
                    className="white-circle-badge"
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.18)',
                      transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <Icon size={24} strokeWidth={2.3} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CENTER CIRCULAR INFOGRAPHIC HUB NODE */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 3
            }}
          >
            {/* Multi-Colored Segmented Outer Ring Wrapper */}
            <div
              style={{
                width: '248px',
                height: '248px',
                borderRadius: '50%',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 5
              }}
            >
              {/* Outer Spectrum Colored Ring (ROTATING ONLY) */}
              <div
                className="spectrum-outer-ring"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'conic-gradient(#f59e0b 0deg 72deg, #06b6d4 72deg 144deg, #e11d48 144deg 216deg, #1a1854 216deg 288deg, #84cc16 288deg 360deg)'
                }}
              />

              {/* Inner White Circle (STATIONARY - NEVER ROTATES) */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 6,
                  width: '224px',
                  height: '224px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '20px'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1854',
                    color: '#f9b933',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    boxShadow: '0 4px 14px rgba(26, 24, 84, 0.25)'
                  }}
                >
                  <ShieldCheck size={28} strokeWidth={2.2} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1854', margin: 0, letterSpacing: '-0.3px' }}>
                  Quick Links
                </h3>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '2px' }}>
                  15 ISO STANDARDS
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN CAPSULE CARDS (09 to 15) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 2 }}>
            {rightItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.num}
                  href={`/certification/${item.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '32px',
                    backgroundColor: item.color,
                    padding: '6px 24px 6px 6px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                    const circle = (e.currentTarget as HTMLElement).querySelector('.white-circle-badge') as HTMLElement;
                    if (circle) circle.style.transform = 'rotate(360deg)';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    const circle = (e.currentTarget as HTMLElement).querySelector('.white-circle-badge') as HTMLElement;
                    if (circle) circle.style.transform = 'rotate(0deg)';
                  }}
                >
                  <div
                    className="white-circle-badge"
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.18)',
                      transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <Icon size={24} strokeWidth={2.3} />
                  </div>

                  <div style={{ flexGrow: 1, paddingLeft: '14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                      STEP {item.num}
                    </div>
                    <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, display: 'block', marginTop: '2px' }}>
                      {item.text}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
