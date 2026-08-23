'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface StandardItem {
  code: string;
  name: string;
  category: string;
}

const standardsData: StandardItem[] = [
  { code: 'ISO 9001:2015', name: 'Quality Management System', category: 'Quality' },
  { code: 'ISO 10002:2018', name: 'Customer Satisfaction', category: 'Customer' },
  { code: 'ISO 13485:2016', name: 'Medical Devices Quality Management', category: 'Medical' },
  { code: 'ISO 29001:2020', name: 'Quality Management for Oil & Natural Gas', category: 'Energy' },
  { code: 'ISO 50001:2018', name: 'Energy Management', category: 'Energy' },
  { code: 'ISO 26000:2010', name: 'Guidance on Social Responsibility', category: 'Social' },
  { code: 'ISO 31000:2018', name: 'Risk Management', category: 'Risk' },
  { code: 'ISO 27001:2022', name: 'Information Security Management System', category: 'Security' },
  { code: 'ISO 22301:2019', name: 'Business Continuity Management Systems', category: 'Business' },
  { code: 'ISO 20000-1:2018', name: 'IT Service Management System', category: 'IT' },
  { code: 'ISO 22000:2018', name: 'Food Safety Management Systems', category: 'Food' },
  { code: 'ISO 45001:2018', name: 'Occupational Health & Safety Management', category: 'Safety' },
  { code: 'ISO 21001:2018', name: 'Educational Organization Management Systems', category: 'Education' },
  { code: 'ISO 41001:2018', name: 'Facilities Management Systems', category: 'Facilities' },
];

export const CertificationStandardsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDir, setAnimDir] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const INTERVAL = 4000;

  const goTo = useCallback((idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return;
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsAnimating(false);
      setProgress(0);
    }, 350);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % standardsData.length, 'right');
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + standardsData.length) % standardsData.length, 'left');
  }, [currentIndex, goTo]);

  useEffect(() => {
    const interval = setInterval(() => next(), INTERVAL);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    setProgress(0);
    const step = 100 / (INTERVAL / 50);
    const ticker = setInterval(() => {
      setProgress(p => Math.min(p + step, 100));
    }, 50);
    return () => clearInterval(ticker);
  }, [currentIndex]);

  const current = standardsData[currentIndex];

  return (
    <section
      id="certification-standards-slider"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '0'
      }}
    >
      {/* Full-bleed background photo with dark indigo overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(26,24,84,0.97) 0%, rgba(26,24,84,0.88) 50%, rgba(26,24,84,0.70) 100%)',
          zIndex: 1
        }}
      />

      {/* Dot grid background decoration */}
      <svg
        style={{ position: 'absolute', right: 0, top: 0, width: '260px', height: '100%', opacity: 0.04, zIndex: 1, pointerEvents: 'none' }}
      >
        {[...Array(8)].map((_, row) =>
          [...Array(6)].map((_, col) => (
            <circle key={`${row}-${col}`} cx={20 + col * 36} cy={20 + row * 36} r="3" fill="#f9b933" />
          ))
        )}
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '52px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* ─── Left: Title + counter + nav ─── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>

            {/* Section label */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#f9b933',
                  color: '#1a1854',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  marginBottom: '14px'
                }}
              >
                <Award size={12} strokeWidth={2.5} />
                Global Standards
              </div>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  margin: 0,
                  letterSpacing: '-0.5px',
                  lineHeight: 1.15,
                  whiteSpace: 'nowrap'
                }}
              >
                Certification<br />
                <span style={{ color: '#f9b933' }}>Standard&apos;s</span>
              </h2>
            </div>

            {/* Vertical divider */}
            <div style={{ width: '1px', height: '80px', backgroundColor: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />

            {/* Slide card */}
            <div style={{ flex: 1, minWidth: '280px' }}>
              {/* ISO code + name */}
              <div
                key={currentIndex}
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating
                    ? `translateX(${animDir === 'right' ? '-24px' : '24px'})`
                    : 'translateX(0)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease'
                }}
              >
                {/* Category chip */}
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(249,185,51,0.15)',
                    color: '#f9b933',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '1.4px',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    marginBottom: '10px',
                    border: '1px solid rgba(249,185,51,0.3)'
                  }}
                >
                  {current.category}
                </span>

                <div
                  style={{
                    fontSize: 'clamp(22px, 2.8vw, 32px)',
                    fontWeight: 900,
                    color: '#f9b933',
                    lineHeight: 1.1,
                    marginBottom: '8px',
                    letterSpacing: '0.3px'
                  }}
                >
                  {current.code}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(14px, 1.6vw, 18px)',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.4
                  }}
                >
                  {current.name}
                </div>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  marginTop: '20px',
                  height: '3px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  width: '100%',
                  maxWidth: '320px'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    backgroundColor: '#f9b933',
                    borderRadius: '2px',
                    transition: 'width 0.05s linear'
                  }}
                />
              </div>

              {/* Counter */}
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)',
                  fontWeight: 600,
                  letterSpacing: '0.5px'
                }}
              >
                {String(currentIndex + 1).padStart(2, '0')} / {String(standardsData.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* ─── Right: Nav arrows + dot pills ─── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}>
            {/* Arrow buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { fn: prev, icon: <ChevronLeft size={18} strokeWidth={2.5} />, label: 'Previous' },
                { fn: next, icon: <ChevronRight size={18} strokeWidth={2.5} />, label: 'Next' }
              ].map(({ fn, icon, label }, i) => (
                <button
                  key={i}
                  onClick={fn}
                  aria-label={label}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    backgroundColor: i === 1 ? '#f9b933' : 'transparent',
                    color: i === 1 ? '#1a1854' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = i === 1 ? '#e0a520' : 'rgba(255,255,255,0.1)';
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = i === 1 ? '#f9b933' : 'transparent';
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>

            {/* Dot pagination */}
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '180px' }}>
              {standardsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx, idx > currentIndex ? 'right' : 'left')}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentIndex ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: idx === currentIndex ? '#f9b933' : 'rgba(255,255,255,0.25)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


