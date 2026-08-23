'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Building2, Phone, Mail, ShieldCheck, Play, RotateCcw } from 'lucide-react';

interface LocationPin {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  clientsCount: string;
  auditorsCount: string;
  xPercent: number; // Exact percentage matching map_with_Marked.png
  yPercent: number;
}

const pinsData: LocationPin[] = [
  {
    id: 'usa',
    name: 'TRAIBCERT Americas HQ',
    city: 'Houston',
    country: 'United States',
    address: '1000 Main Street, Suite 2300, Houston, TX 77002',
    phone: '+1 713 589 4000',
    email: 'usa@traibcert.org',
    clientsCount: '2,900+',
    auditorsCount: '70+',
    xPercent: 26.2,
    yPercent: 43.5
  },
  {
    id: 'uk-hq',
    name: 'TRAIBCERT Global HQ',
    city: 'London',
    country: 'United Kingdom',
    address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ',
    phone: '+44 20 8144 7475',
    email: 'info@traibcert.co.uk',
    clientsCount: '3,200+',
    auditorsCount: '85+',
    xPercent: 46.5,
    yPercent: 27.2
  },
  {
    id: 'germany',
    name: 'TRAIBCERT Europe Office',
    city: 'Frankfurt',
    country: 'Germany',
    address: 'Mainzer Landstraße 50, 60325 Frankfurt am Main',
    phone: '+49 69 9002 8700',
    email: 'europe@traibcert.org',
    clientsCount: '1,850+',
    auditorsCount: '42+',
    xPercent: 51.5,
    yPercent: 29.5
  },
  {
    id: 'turkey',
    name: 'TRAIBCERT Eurasia Office',
    city: 'Istanbul',
    country: 'Turkey',
    address: 'Buyukdere Cad. No. 193, Levent, Istanbul',
    phone: '+90 212 317 5900',
    email: 'turkey@traibcert.org',
    clientsCount: '1,650+',
    auditorsCount: '38+',
    xPercent: 57.0,
    yPercent: 36.5
  },
  {
    id: 'saudi',
    name: 'TRAIBCERT Saudi Arabia',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    address: 'King Fahd Road, Al Olaya District, Riyadh',
    phone: '+966 11 462 8900',
    email: 'ksa@traibcert.org',
    clientsCount: '2,800+',
    auditorsCount: '65+',
    xPercent: 57.5,
    yPercent: 48.5
  },
  {
    id: 'uae-dubai',
    name: 'TRAIBCERT Middle East HQ',
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Business Bay, Tower 1, Office 1402, Dubai',
    phone: '+971 4 388 9200',
    email: 'uae@traibcert.org',
    clientsCount: '4,500+',
    auditorsCount: '120+',
    xPercent: 59.5,
    yPercent: 46.2
  },
  {
    id: 'qatar',
    name: 'TRAIBCERT Qatar',
    city: 'Doha',
    country: 'Qatar',
    address: 'West Bay Financial District, Doha',
    phone: '+974 4 412 8800',
    email: 'qatar@traibcert.org',
    clientsCount: '1,400+',
    auditorsCount: '35+',
    xPercent: 60.5,
    yPercent: 44.2
  },
  {
    id: 'oman',
    name: 'TRAIBCERT Oman',
    city: 'Muscat',
    country: 'Oman',
    address: 'Ruwi Commercial District, Muscat',
    phone: '+968 2 470 9900',
    email: 'oman@traibcert.org',
    clientsCount: '1,100+',
    auditorsCount: '28+',
    xPercent: 61.8,
    yPercent: 47.8
  },
  {
    id: 'asia-hub',
    name: 'TRAIBCERT Asia Office',
    city: 'New Delhi',
    country: 'India',
    address: 'Connaught Place, New Delhi 110001',
    phone: '+91 11 4350 2200',
    email: 'asia@traibcert.org',
    clientsCount: '3,800+',
    auditorsCount: '90+',
    xPercent: 68.0,
    yPercent: 46.0
  },
  {
    id: 'india-chennai',
    name: 'TRAIBCERT India Regional Office',
    city: 'Chennai',
    country: 'India',
    address: 'Mount Road, Guindy, Chennai, Tamil Nadu 600032',
    phone: '+91 44 4212 9900',
    email: 'india@traibcert.org',
    clientsCount: '5,600+',
    auditorsCount: '140+',
    xPercent: 68.5,
    yPercent: 54.0
  },
  {
    id: 'australia',
    name: 'TRAIBCERT Oceania Office',
    city: 'Sydney',
    country: 'Australia',
    address: 'Martin Place, Sydney NSW 2000',
    phone: '+61 2 9220 5000',
    email: 'aus@traibcert.org',
    clientsCount: '1,200+',
    auditorsCount: '30+',
    xPercent: 84.5,
    yPercent: 74.0
  },
  {
    id: 'new-zealand',
    name: 'TRAIBCERT Pacific Office',
    city: 'Auckland',
    country: 'New Zealand',
    address: 'Queen Street, Auckland 1010',
    phone: '+64 9 300 4000',
    email: 'nz@traibcert.org',
    clientsCount: '950+',
    auditorsCount: '22+',
    xPercent: 92.5,
    yPercent: 83.0
  }
];

export const GlobalPresenceMapSection: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<LocationPin>(pinsData[1]); // Default UK HQ
  const [activeStep, setActiveStep] = useState<number>(pinsData.length); // Step index for animated sequence
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Progressive Dotted Line & Pin Connection Sequence Animation
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = prev >= pinsData.length ? 1 : prev + 1;
        setSelectedPin(pinsData[next - 1]);
        return next;
      });
    }, 1800);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section id="our-presence" style={{ backgroundColor: '#ffffff', padding: '80px 0 96px', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#1a1854', letterSpacing: '-0.5px', marginBottom: '12px' }}>
            Our <span style={{ color: '#1a1854' }}>Presence</span>
          </h2>
          <p style={{ fontSize: '15.5px', color: '#64748b', margin: 0, fontWeight: 500 }}>
            Dynamic accredited network connecting global auditor hubs across 35+ countries in real-time.
          </p>
        </div>

        {/* Animation Control Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#1a1854',
              color: '#ffffff',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 20px',
              fontSize: '13px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(26,24,84,0.2)'
            }}
          >
            <Play size={14} />
            <span>{isPlaying ? 'Pause Connection Route' : 'Play Animated Network'}</span>
          </button>

          <button
            onClick={() => {
              setActiveStep(pinsData.length);
              setIsPlaying(false);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#f1f5f9',
              color: '#334155',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 20px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={14} />
            <span>Show All Hubs</span>
          </button>
        </div>

        {/* 3D Map Image Canvas & Hub Inspector Panel Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', alignItems: 'center' }}>
          
          {/* Left / Center: Interactive 3D Perspective Map Canvas */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
              backgroundColor: '#f8fafc'
            }}
          >
            {/* Base Image: Unmarked 3D Navy Blue Map */}
            <img
              src="/assets/images/Home/map_without_marked.png"
              alt="TRAIBCERT 3D World Map"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />

            {/* SVG Overlaid Animated Dotted Connecting Paths between active sequence pins */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            >
              {pinsData.slice(0, activeStep - 1).map((pin, idx) => {
                const nextPin = pinsData[idx + 1];
                if (!nextPin) return null;
                return (
                  <line
                    key={idx}
                    x1={`${pin.xPercent}%`}
                    y1={`${pin.yPercent}%`}
                    x2={`${nextPin.xPercent}%`}
                    y2={`${nextPin.yPercent}%`}
                    stroke="#f9b933"
                    strokeWidth="2.5"
                    strokeDasharray="5,5"
                    style={{
                      animation: 'dash 1s linear infinite'
                    }}
                  />
                );
              })}
            </svg>

            {/* Overlaid Location Pins (Matching map_with_Marked.png positions) */}
            {pinsData.map((pin, index) => {
              const isVisible = index < activeStep;
              if (!isVisible) return null;

              const isSelected = pin.id === selectedPin.id;

              return (
                <button
                  key={pin.id}
                  onClick={() => {
                    setSelectedPin(pin);
                    setIsPlaying(false);
                  }}
                  style={{
                    position: 'absolute',
                    left: `${pin.xPercent}%`,
                    top: `${pin.yPercent}%`,
                    transform: 'translate(-50%, -100%)',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    zIndex: isSelected ? 15 : 5,
                    transition: 'transform 0.25s ease'
                  }}
                >
                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Animated Pulsing Ring */}
                    {isSelected && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#f9b933',
                          transform: 'translate(-50%, -50%)',
                          opacity: 0.5,
                          animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                        }}
                      />
                    )}

                    {/* Exact Yellow Map Pin Icon matching screenshot */}
                    <MapPin
                      size={isSelected ? 30 : 22}
                      fill="#f9b933"
                      color="#1a1854"
                      strokeWidth={1.5}
                      style={{
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Hub Details Inspector Card */}
          <div
            style={{
              backgroundColor: '#1a1854',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '40px 36px',
              boxShadow: '0 16px 40px rgba(26, 24, 84, 0.25)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#f9b933', color: '#1a1854', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '20px' }}>
              <ShieldCheck size={13} />
              <span>ACCREDITED REGIONAL HUB</span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              {selectedPin.name}
            </h3>

            <p style={{ fontSize: '15px', color: '#f9b933', fontWeight: 700, marginBottom: '24px' }}>
              {selectedPin.city}, {selectedPin.country}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13.5px', color: 'rgba(255,255,255,0.9)' }}>
                <Building2 size={18} style={{ color: '#f9b933', flexShrink: 0, marginTop: '2px' }} />
                <span>{selectedPin.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13.5px', color: 'rgba(255,255,255,0.9)' }}>
                <Phone size={18} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span>{selectedPin.phone}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13.5px', color: 'rgba(255,255,255,0.9)' }}>
                <Mail size={18} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span>{selectedPin.email}</span>
              </div>
            </div>

            {/* Hub Metrics Stats Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff' }}>
                  {selectedPin.clientsCount}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Certified Clients
                </div>
              </div>

              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff' }}>
                  {selectedPin.auditorsCount}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Lead Auditors
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
