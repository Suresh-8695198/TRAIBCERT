'use client';

import React, { useState, useEffect } from 'react';

interface StandardItem {
  code: string;
  name: string;
}

const standardsData: StandardItem[] = [
  { code: 'ISO 9001:2015', name: 'Quality Management System' },
  { code: 'ISO 10002:2018', name: 'Customer Satisfaction' },
  { code: 'ISO 13485:2016', name: 'Medical Devices Quality Management' },
  { code: 'ISO 29001:2020', name: 'Quality Management System for Oil & Natural Gas' },
  { code: 'ISO 50001:2018', name: 'Energy Management' },
  { code: 'ISO 26000:2010', name: 'Guidance on Social Responsibility' },
  { code: 'ISO 31000:2018', name: 'Risk Management' },
  { code: 'ISO 27001:2022', name: 'Information Security Management System' },
  { code: 'ISO 22301:2019', name: 'Business Continuity Management Systems' },
  { code: 'ISO 20000-1:2018', name: 'IT Service Management System' },
  { code: 'ISO 22000:2018', name: 'Food Safety Management Systems' },
  { code: 'ISO 45001:2018', name: 'Occupational Health & Safety Management System' },
  { code: 'ISO 21001:2018', name: 'Educational Organization Management Systems' },
  { code: 'ISO 41001:2018', name: 'Facilities Management Systems' }
];

export const CertificationStandardsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % standardsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = standardsData[currentIndex];

  return (
    <section
      id="certification-standards-slider"
      style={{
        backgroundImage: "linear-gradient(rgba(18, 69, 103, 0.9), rgba(18, 69, 103, 0.9)), url('/assets/images/Home/process_meeting.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '56px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Left Title: Certification Standard's */}
          <div style={{ flex: '1 1 300px', zIndex: 3 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.5px' }}>
              Certification Standard&apos;s
            </h2>
          </div>

          {/* Center Slanted Parallelogram Yellow Card (Matching Screenshot) */}
          <div
            style={{
              flex: '1 1 520px',
              maxWidth: '650px',
              backgroundColor: '#f9b933',
              color: '#1a1854',
              padding: '36px 56px',
              position: 'relative',
              clipPath: 'polygon(14% 0, 100% 0, 86% 100%, 0% 100%)',
              textAlign: 'center',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ minHeight: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div
                key={currentIndex}
                style={{
                  animation: 'fadeInUp 0.5s ease forwards'
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1854', marginBottom: '6px', letterSpacing: '0.5px' }}>
                  {currentItem.code}
                </div>

                <div style={{ fontSize: '16.5px', fontWeight: 700, color: '#1a1854' }}>
                  {currentItem.name}
                </div>
              </div>
            </div>

            {/* Dots Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '16px' }}>
              {standardsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentIndex ? '24px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: idx === currentIndex ? '#1a1854' : 'rgba(26, 24, 84, 0.3)',
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
