'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';



export const InspectionSection: React.FC = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <section
      id="inspection-services"
      style={{
        backgroundColor: '#f8f9fc',
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background dot grid pattern — right */}
      <svg
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '340px',
          height: '260px',
          opacity: 0.045,
          pointerEvents: 'none'
        }}
      >
        {[...Array(7)].map((_, row) =>
          [...Array(10)].map((_, col) => (
            <circle
              key={`r${row}-${col}`}
              cx={18 + col * 32}
              cy={18 + row * 32}
              r="3"
              fill="#1a1854"
            />
          ))
        )}
      </svg>

      {/* Background dot grid pattern — left */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '200px',
          height: '180px',
          opacity: 0.04,
          pointerEvents: 'none'
        }}
      >
        {[...Array(5)].map((_, row) =>
          [...Array(6)].map((_, col) => (
            <circle
              key={`l${row}-${col}`}
              cx={18 + col * 30}
              cy={18 + row * 30}
              r="3"
              fill="#1a1854"
            />
          ))
        )}
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'center'
          }}
        >
          {/* ─── Left Column ─── */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 900,
                color: '#1a1854',
                marginBottom: '22px',
                lineHeight: 1.2,
                letterSpacing: '-0.5px'
              }}
            >
              Inspection / Third party<br />
              <span style={{ color: '#f9b933' }}>inspection</span>
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: '#64748b',
                lineHeight: 1.75,
                marginBottom: '36px',
                fontWeight: 400,
                maxWidth: '520px'
              }}
            >
              The present scenario of business environment, out-sourcing majority of jobs &amp; services to the appropriate agencies is on the increase and out-sourcing of inspection / Third Party Inspection and validation activities are no exception to that. Whether your project is a new build, major modification or conversion; maintaining safety, reliability and integrity in compliance with the applicable codes, standards and technical project requirements are of utmost importance. Inspection / Third Party Inspections help minimize risk ensuring that both customer standards are met.
            </p>



            {/* CTA Button */}
            <Link
              href="/services/inspection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: btnHover ? '#e0a520' : '#f9b933',
                color: '#1a1854',
                padding: '13px 22px 13px 26px',
                borderRadius: '8px',
                fontSize: '14.5px',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: 'none',
                transform: btnHover ? 'translateY(-2px)' : 'none',
                transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)'
              }}
              onMouseOver={() => setBtnHover(true)}
              onMouseOut={() => setBtnHover(false)}
            >
              <span>View More</span>
              <span
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
                  transform: btnHover ? 'translate(3px,-3px) rotate(45deg) scale(1.15)' : 'none',
                  transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)'
                }}
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>

          {/* ─── Right Column: Creative Image Cards ─── */}
          <div style={{ position: 'relative', height: '520px' }}>

            {/* Decorative vertical accent bar */}
            <div
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '140px',
                borderRadius: '4px',
                backgroundColor: '#f9b933',
                zIndex: 0
              }}
            />

            {/* Card 1 — Main large card (left, full-height) */}
            <div
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '54%',
                height: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: hovered1
                  ? '0 24px 48px rgba(15,23,42,0.18)'
                  : '0 8px 24px rgba(15,23,42,0.10)',
                transform: hovered1 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                zIndex: 2,
                cursor: 'pointer'
              }}
            >
              <img
                src="/assets/images/Home/inspection.jpg"
                alt="Third Party Inspection Audit"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: hovered1 ? 'scale(1.07)' : 'scale(1)',
                  transition: 'transform 0.5s ease'
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(26,24,84,0.82) 100%)'
                }}
              />
              {/* Bottom label */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 20px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    backgroundColor: '#f9b933',
                    color: '#1a1854',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    marginBottom: '10px'
                  }}
                >
                  <ShieldCheck size={13} strokeWidth={2.5} /> Certified
                </div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                  On-Site Quality<br />Inspection
                </p>
              </div>
            </div>

            {/* Card 2 — Smaller card (right, top) */}
            <div
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '43%',
                height: '55%',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: hovered2
                  ? '0 24px 48px rgba(15,23,42,0.18)'
                  : '0 8px 24px rgba(15,23,42,0.10)',
                transform: hovered2 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                zIndex: 2,
                cursor: 'pointer'
              }}
            >
              <img
                src="/assets/images/Home/inspection1.jpg"
                alt="Precision Technical Inspection"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: hovered2 ? 'scale(1.07)' : 'scale(1)',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 30%, rgba(26,24,84,0.75) 100%)'
                }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 16px' }}>
                <p style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                  Precision Technical<br />Validation
                </p>
              </div>
            </div>

            {/* Floating Image Card (bottom-right) */}
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '43%',
                height: '42%',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(15,23,42,0.14)',
                zIndex: 3
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop"
                alt="Industrial Quality Inspection"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};


