'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Award,
  Smile,
  Leaf, 
  HeartPulse, 
  Utensils, 
  Settings,
  Workflow, 
  Lock, 
  ShieldAlert, 
  Users, 
  Power, 
  Stethoscope, 
  Flame, 
  GraduationCap, 
  Building,
  Brain,
  TrendingUp,
  Target,
  FileText,
  UserCheck,
  Search,
  RotateCcw,
  Fingerprint,
  QrCode
} from 'lucide-react';
import { certificationsData } from '@/config/certifications';
import { CertVerifyLookup } from '@/components/ui/CertVerifyLookup';

// Fully modernized, high-fidelity icon choices for each certification
const iconMap: { [key: string]: any } = {
  'iso-9001': Award,                 // Quality: Award medal
  'iso-10002': Smile,                // Customer Satisfaction: Smile badge
  'iso-14001': Leaf,                 // Environmental: Leaf
  'iso-45001': HeartPulse,           // Health & Safety: Heart pulse
  'iso-22000': Utensils,             // Food Safety: Utensils
  'iso-20000-1': Settings,            // IT Service: Settings gear cog
  'iso-22301': Workflow,             // Business Continuity: Workflow diagram
  'iso-27001': Lock,                 // Information Security: Lock padlock
  'iso-31000': ShieldAlert,          // Risk Management: Shield alert warning
  'iso-26000': Users,                // Social Responsibility: Users community
  'iso-50001': Power,                // Energy: Power power button/zap
  'iso-13485': Stethoscope,          // Medical Devices: Stethoscope
  'iso-29001': Flame,                // Oil & Gas: Gas flame burner
  'iso-21001': GraduationCap,        // Education: Graduation cap
  'iso-41001': Building,             // Facilities: Building/Office
  'cyber-essentials': ShieldCheck,   // Cyber Essentials
  'cyber-essentials-plus': ShieldCheck, // Cyber Essentials Plus
  'iso-42001': Brain                 // Artificial Intelligence: Brain network
};

// Exact titles for the certification portfolio matching your screenshot
const certTitlesMap: { [key: string]: string } = {
  'iso-9001': 'ISO 9001:2015 Quality management systems',
  'iso-10002': 'ISO 10002:2018 Customer Satisfaction',
  'iso-14001': 'ISO 14001:2015 Environmental Management Systems',
  'iso-45001': 'ISO 45001:2018 Occupational Health & safety Management System',
  'iso-22000': 'ISO 22000:2018 Food Safety Management Systems',
  'iso-20000-1': 'ISO 20000-1:2018 IT Service Management System',
  'iso-22301': 'ISO 22301:2019 Business Continuity Management Systems',
  'iso-27001': 'ISO 27001:2022 Information security, cybersecurity and privacy protection Management System',
  'iso-31000': 'ISO 31000:2018 - Risk Management',
  'iso-26000': 'ISO 26000:2010 Guidance on social responsibility',
  'iso-50001': 'ISO 50001:2018 - Energy management',
  'iso-13485': 'ISO 13485 Medical devices Quality management systems',
  'iso-29001': 'ISO 29001:2020 Quality for the Oil and Natural Gas Industry',
  'iso-21001': 'ISO 21001:2018 Educational organization Management Systems',
  'iso-41001': 'ISO 41001:2018 Facilities Management Systems',
  'cyber-essentials': 'Cyber Essentials',
  'cyber-essentials-plus': 'Cyber Essentials Plus',
  'iso-42001': 'ISO 42001:2023 Artificial Intelligence Management System'
};

const allowedSlugs = Object.keys(certTitlesMap);

// Color config array for gradient-based wave elements (Exactly matching the 10 infographic colors spectrum)
const cardColors = [
  { start: '#5c2e91', end: '#6d36ad', text: '#5c2e91' }, // 01: Deep Purple
  { start: '#9d2a8c', end: '#b0339d', text: '#9d2a8c' }, // 02: Plum/Dark Pink
  { start: '#d91a5f', end: '#eb236d', text: '#d91a5f' }, // 03: Magenta
  { start: '#e95420', end: '#f06637', text: '#e95420' }, // 04: Orange
  { start: '#fbb03b', end: '#fbc158', text: '#c99327' }, // 05: Yellow/Amber
  { start: '#8cc63f', end: '#9cd64f', text: '#7fae3a' }, // 06: Lime Green
  { start: '#00a99d', end: '#0bc0b3', text: '#008c82' }, // 07: Turquoise
  { start: '#29abe2', end: '#3ebcf2', text: '#1b92c4' }, // 08: Sky Blue
  { start: '#0071bc', end: '#1a88d4', text: '#0071bc' }, // 09: Medium Blue
  { start: '#2e3192', end: '#3d41ab', text: '#2e3192' }  // 10: Deep Navy/Violet Blue
];

export default function CertificationLandingPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [hoveredBenefitIdx, setHoveredBenefitIdx] = useState<number | null>(null);

  // Filter certifications to only show the standard set from your portfolio (defined first for scope availability)
  const portfolioCerts = certificationsData.filter(cert => 
    allowedSlugs.includes(cert.slug)
  );

  // Verification Form States
  const [clientCode, setClientCode] = useState('');
  const [certNumber, setClientCertNumber] = useState('');
  const [standard, setStandard] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);

  // Active slide index for indicators & scroll swiping tracking
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollPosition = container.scrollLeft;
    // card width (250px) + gap (16px) = 266px
    const index = Math.round(scrollPosition / 266);
    // Boundary checks
    if (index >= 0 && index < portfolioCerts.length) {
      setActiveSlideIndex(index);
    }
  };

  const scrollCarousel = (direction: 'prev' | 'next') => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollOffset = direction === 'prev' ? -266 : 266;
    container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  const scrollToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    container.scrollTo({ left: index * 266, behavior: 'smooth' });
  };

  // Carousel autoplay reference & hook for mobile viewports
  const carouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let intervalId: any;

    const startAutoPlay = () => {
      intervalId = setInterval(() => {
        // Only run horizontal auto scroll on mobile and tablet screens
        if (window.innerWidth > 768) return;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 8) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by card width (250px) + gap (16px) = 266px
          container.scrollBy({ left: 266, behavior: 'smooth' });
        }
      }, 3200);
    };

    startAutoPlay();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // IntersectionObserver effect to trigger scroll reveal animations on load/scroll
  React.useEffect(() => {
    // Avoid running on server side rendering
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once animated, we can unobserve
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08, // trigger early when 8% is visible
      rootMargin: '0px 0px -40px 0px' // trigger slightly before it enters viewport
    });

    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleVerifySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certNumber.trim()) return;

    setIsSearching(true);
    setSearched(false);

    setTimeout(() => {
      setIsSearching(false);
      setSearched(true);
      if (certNumber.toLowerCase().includes('gb') || certNumber.toLowerCase().includes('tra') || certNumber.length > 4) {
        setResult({
          certNumber: certNumber.toUpperCase(),
          companyName: 'Acme International Logistics Ltd',
          standard: standard || 'ISO 9001:2015 Quality Management Systems',
          status: 'ACTIVE / VALID',
          issueDate: '15 January 2024',
          expiryDate: '14 January 2027',
          accreditationBody: 'ASCB (Accreditation Service for Certifying Bodies)',
          scope: 'Provision of international freight forwarding, warehousing, and customs clearance services.'
        });
      } else {
        setResult(null);
      }
    }, 800);
  };

  const handleVerifyReset = () => {
    setClientCode('');
    setClientCertNumber('');
    setStandard('');
    setResult(null);
    setSearched(false);
  };

  // Benefits infographic configurations matching the uploaded layout
  const infographicBenefits = [
    {
      title: 'COST REDUCTIONS',
      desc: 'The adoption of standards will allow you to streamline your processes approaches without affecting product and service quality, consequently reducing costs.',
      themeColor: '#0b192c', // Deep Navy
      rotateDeg: '-4.5deg'
    },
    {
      title: 'PRODUCTIVITY',
      desc: 'By following best practice, adoption of standards ensures all employees understand their roles within the organization, reducing any margin for error.',
      themeColor: '#f39c12', // Mustard Orange
      rotateDeg: '3.5deg'
    },
    {
      title: 'CUSTOMER LOYALTY',
      desc: 'Adoption of standards enables you to continuously meet the needs of your customers and other stakeholders, increasing customer satisfaction.',
      themeColor: '#1f6f8b', // Steel Blue
      rotateDeg: '-3deg'
    },
    {
      title: 'WIN NEW BUSINESS',
      desc: 'Where it is not a contractual obligation or expectation in some industries, certification to the standards provides you with a competitive advantage.',
      themeColor: '#00af91', // Bright Teal
      rotateDeg: '4deg'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-sans)', color: '#334155' }}>
      
      {/* Modernized Dark Overlay Hero Banner referencing Home design */}
      <section style={{
        backgroundImage: "url('/assets/images/Certification/cert_hero_banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '64px 0 80px',
        color: '#ffffff',
        position: 'relative'
      }}>
        <div className="container">
          {/* Breadcrumbs inside the Hero */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.8px', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>HOME</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>/</span>
            <span style={{ color: '#f9b933' }}>CERTIFICATION</span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(28px, 4vw, 42px)', 
            fontWeight: 800, 
            color: '#ffffff', 
            marginBottom: '20px', 
            letterSpacing: '0.5px', 
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
            maxWidth: '900px'
          }}>
            Our Certification Portfolio
          </h1>

          <p style={{ 
            fontSize: '16px', 
            color: 'rgba(255, 255, 255, 0.9)', 
            lineHeight: 1.75, 
            margin: 0, 
            textAlign: 'left',
            maxWidth: '600px'
          }}>
            At TRAIBCERT, we offer certification services to our clients applicable to any type of manufacturing or service industry and is administered in A on-discriminatory manner.Initially, we at TRAIBCERT make a complete understanding of your organizations exact processes and assess how different standards fit into the existing processes. Once certified, we also ensure that the ISO standards are followed rightly through rigorous monitoring and provide training wherever required. Our certification service portfolio includes,
          </p>
        </div>
      </section>

      {/* Main Grid Content Area */}
      <section style={{ padding: '64px 0 16px', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
        <div className="container">

          {/* High-Fidelity Responsive Hexagonal Honeycomb Infographic Grid */}
          <div 
            ref={carouselRef} 
            className="honeycomb-grid" 
            onScroll={handleScroll}
            style={{ 
              marginBottom: '24px',
              padding: '24px 0 16px'
            }}
          >
            {portfolioCerts.map((cert, idx) => {
              const IconComponent = iconMap[cert.slug] || CheckCircle2;
              const isHovered = hoveredSlug === cert.slug;
              
              // Extract standard codes and short names cleanly avoiding duplicates for non-ISO items
              const fullTitle = certTitlesMap[cert.slug] || `${cert.code} ${cert.name}`;
              let displayCode = '';
              let displayName = '';
              
              if (fullTitle.startsWith('ISO')) {
                const parts = fullTitle.split(' ');
                displayCode = parts.slice(0, 2).join(' ').replace(/:$/, ''); // e.g. "ISO 9001:2015"
                displayName = parts.slice(2).join(' '); // e.g. "Quality management systems"
              } else {
                displayCode = fullTitle; // e.g. "Cyber Essentials"
                displayName = ''; // Non-ISO cards have a single, clean title code row
              }

              // Get color configuration based on index
              const colorConfig = cardColors[idx % cardColors.length];
              const indexStr = String(idx + 1).padStart(2, '0');

              // Access contrast guidelines for light background segments (like yellow or lime)
              const isLightBg = colorConfig.start === '#fbb03b' || colorConfig.start === '#8cc63f';
              const rightBgColor = colorConfig.start;
              const textColor = isLightBg ? '#1a1854' : '#ffffff';
              const numberColor = isLightBg ? 'rgba(26, 24, 84, 0.65)' : 'rgba(255, 255, 255, 0.7)';

              // Compute advanced colorful duotone tint fill color for matching outlines
              const hexToRgb = (hex: string) => {
                const cleanHex = hex.replace('#', '');
                const r = parseInt(cleanHex.substring(0, 2), 16);
                const g = parseInt(cleanHex.substring(2, 4), 16);
                const b = parseInt(cleanHex.substring(4, 6), 16);
                return `${r}, ${g}, ${b}`;
              };
              const iconFillColor = `rgba(${hexToRgb(rightBgColor)}, 0.22)`;

              return (
                <Link
                  key={cert.slug}
                  href={cert.slug === 'cyber-essentials' ? '/certification/cyber-essentials' : `/certification/${cert.slug}`}
                  onMouseEnter={() => setHoveredSlug(cert.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 0.95',
                    filter: isHovered 
                      ? 'drop-shadow(0 14px 28px rgba(15,23,42,0.18))'
                      : 'drop-shadow(0 6px 14px rgba(15,23,42,0.08))',
                    transform: isHovered ? 'scale(1.05) translateY(-5px)' : 'scale(1) translateY(0px)',
                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer'
                  }}
                >
                  {/* High-Fidelity Rounded Hexagon Background inline SVG */}
                  <svg 
                    viewBox="0 0 100 86.6" 
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '100%', 
                      zIndex: 1, 
                      color: rightBgColor,
                      transition: 'color 0.25s ease'
                    }}
                  >
                    {/* Main Hexagon Color Fill */}
                    <path 
                      d="M28,3 L72,3 A5,5 0 0,1 76.5,5.5 L97,41 A5,5 0 0,1 97,45.6 L76.5,81.1 A5,5 0 0,1 72,83.6 L28,83.6 A5,5 0 0,1 23.5,81.1 L3,45.6 A5,5 0 0,1 3,41 L23.5,5.5 A5,5 0 0,1 28,3 Z" 
                      fill="currentColor" 
                    />
                    {/* Concentric Outlined Hexagon Border representing the Infographic lines */}
                    <path 
                      d="M28,3 L72,3 A5,5 0 0,1 76.5,5.5 L97,41 A5,5 0 0,1 97,45.6 L76.5,81.1 A5,5 0 0,1 72,83.6 L28,83.6 A5,5 0 0,1 23.5,81.1 L3,45.6 A5,5 0 0,1 3,41 L23.5,5.5 A5,5 0 0,1 28,3 Z" 
                      fill="none" 
                      stroke={isLightBg ? 'rgba(26, 24, 84, 0.4)' : '#ffffff'}
                      strokeWidth="1.2" 
                      opacity={isHovered ? 0.75 : 0.25}
                      transform={isHovered ? 'scale(0.925)' : 'scale(0.94)'}
                      transformOrigin="50% 50%"
                      style={{ transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                    />
                  </svg>

                  {/* Absolute overlaid text/icon container */}
                  <div
                    className="honeycomb-grid-card-content"
                    style={{
                      zIndex: 2,
                      padding: '14px 24px 18px', // Squeezed horizontally to prevent sloped edge overflows
                      color: textColor,
                      textAlign: 'center'
                    }}
                  >
                    {/* Index / Option Number (avoiding the word 'STEP') */}
                    <div style={{ 
                      fontSize: '11px', 
                      fontWeight: 800, 
                      fontFamily: 'var(--font-mono)',
                      color: numberColor, 
                      letterSpacing: '1px',
                      marginBottom: '2px'
                    }}>
                      {indexStr}
                    </div>

                    {/* Icon inside white circle like in the infographic - optimized sizing to avoid vertical overflow */}
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      transform: isHovered ? 'scale(1.08) rotate(6deg)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}>
                      <IconComponent size={24} strokeWidth={2.0} fill={iconFillColor} style={{ color: rightBgColor }} />
                    </div>

                    {/* Standard Title Code */}
                    <div 
                      className="honeycomb-grid-card-text"
                      style={{ 
                        fontSize: '14.2px', 
                        fontWeight: 800, 
                        marginBottom: displayName ? '3px' : '0px',
                        color: textColor,
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.2px',
                        lineHeight: 1.2,
                        alignSelf: 'stretch'
                      }}
                    >
                      {displayCode}
                    </div>

                    {/* Standard Name */}
                    <div 
                      className="honeycomb-grid-card-text"
                      style={{ 
                        fontSize: '9.8px', // High-fidelity size adjustment to eliminate overflow
                        fontWeight: 600, 
                        lineHeight: 1.28,
                        color: textColor,
                        opacity: 0.9,
                        maxHeight: '26px', // Constrain exactly to max 2 lines (12.5px per line)
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        alignSelf: 'stretch',
                        padding: '0 2px',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {displayName}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Carousel Navigation Controls (prev/next arrows & indicator dots) */}
          <div 
            className="carousel-nav-controls"
            style={{
              display: 'none', // Hidden on desktop
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginTop: '8px',
              marginBottom: '36px',
              width: '100%'
            }}
          >
            {/* Prev Arrow Button */}
            <button
              onClick={() => scrollCarousel('prev')}
              aria-label="Previous standard"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e293b',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                padding: 0
              }}
            >
              <ArrowLeft size={16} strokeWidth={2.5} />
            </button>

            {/* Dots indicators representing each option slide */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {portfolioCerts.map((_, dotIdx) => {
                const isActive = activeSlideIndex === dotIdx;
                return (
                  <button
                    key={dotIdx}
                    onClick={() => scrollToSlide(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    style={{
                      width: isActive ? '20px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: isActive ? '#f9b933' : '#cbd5e1',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                );
              })}
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={() => scrollCarousel('next')}
              aria-label="Next standard"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e293b',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                padding: 0
              }}
            >
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </section>

      {/* ISO Certification & Its Benefits Section — Infographic Design */}
      <section style={{ 
        background: 'linear-gradient(135deg, #fffcf0 0%, #fdf3d0 100%)', 
        padding: '56px 0 80px', 
        borderTop: '1px solid #fcebbd', 
        borderBottom: '1px solid #fcebbd',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Creative Indigo 9-Dot Patterns */}
        <div style={{ position: 'absolute', top: '24px', left: '24px', opacity: 0.35, pointerEvents: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <circle cx="10" cy="10" r="3.5" fill="#4f46e5" />
            <circle cx="30" cy="10" r="3.5" fill="#4f46e5" />
            <circle cx="50" cy="10" r="3.5" fill="#4f46e5" />
            <circle cx="10" cy="30" r="3.5" fill="#4f46e5" />
            <circle cx="30" cy="30" r="3.5" fill="#4f46e5" />
            <circle cx="50" cy="30" r="3.5" fill="#4f46e5" />
            <circle cx="10" cy="50" r="3.5" fill="#4f46e5" />
            <circle cx="30" cy="50" r="3.5" fill="#4f46e5" />
            <circle cx="50" cy="50" r="3.5" fill="#4f46e5" />
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '24px', right: '24px', opacity: 0.35, pointerEvents: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <circle cx="10" cy="10" r="3.5" fill="#4f46e5" />
            <circle cx="30" cy="10" r="3.5" fill="#4f46e5" />
            <circle cx="50" cy="10" r="3.5" fill="#4f46e5" />
            <circle cx="10" cy="30" r="3.5" fill="#4f46e5" />
            <circle cx="30" cy="30" r="3.5" fill="#4f46e5" />
            <circle cx="50" cy="30" r="3.5" fill="#4f46e5" />
            <circle cx="10" cy="50" r="3.5" fill="#4f46e5" />
            <circle cx="30" cy="50" r="3.5" fill="#4f46e5" />
            <circle cx="50" cy="50" r="3.5" fill="#4f46e5" />
          </svg>
        </div>

        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 80px' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '32px', fontWeight: 800, color: '#1a1854', marginBottom: '16px' }}>
              ISO certification & its Benefits
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#0f172a', lineHeight: 1.65, fontWeight: 500 }}>
              Certification is a series of standards that forms the foundation and framework for an effective management system. Within any ideal and size of business, it is that set of requirements that enable to optimize Process Performance & Organizational Effectiveness. We at TRAIBCERT, demystify the complete ISO certification system to ensure your management systems are at the required level to achieve:
            </p>
          </div>

          {/* Infographic Cards Container */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
            gap: '36px',
            alignItems: 'stretch'
          }}>
            {infographicBenefits.map((step, idx) => {
              const stepStr = String(idx + 1).padStart(2, '0');
              const isHovered = hoveredBenefitIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredBenefitIdx(idx)}
                  onMouseLeave={() => setHoveredBenefitIdx(null)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    padding: '64px 24px 36px',
                    boxShadow: isHovered 
                      ? `0 30px 60px rgba(${step.themeColor === '#1e293b' ? '15,23,42' : '26,24,84'}, 0.14)` 
                      : '0 20px 40px rgba(15,23,42,0.06)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                    transform: isHovered ? 'translateY(-12px)' : 'translateY(0px)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Rotated Sticky Note Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '24px',
                    width: '60px',
                    height: '56px',
                    borderRadius: '6px',
                    backgroundColor: step.themeColor,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '24px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                    transform: isHovered ? 'rotate(0deg) scale(1.1)' : `rotate(${step.rotateDeg})`,
                    transition: 'transform 0.35s ease',
                    zIndex: 2
                  }}>
                    {stepStr}
                  </div>

                  {/* Content inside card */}
                  <div>
                    <h3 style={{ 
                      fontSize: '15px', 
                      fontWeight: 800, 
                      color: step.themeColor, 
                      marginBottom: '14px',
                      letterSpacing: '0.5px',
                      marginTop: '8px',
                      fontFamily: 'var(--font-sans)'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ 
                      fontSize: '13.5px', 
                      color: '#0f172a', 
                      lineHeight: 1.6, 
                      margin: 0,
                      textAlign: 'left',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500
                    }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Colored Bottom Accent Pill */}
                  <div style={{
                    width: isHovered ? '80px' : '50px',
                    height: '6px',
                    borderRadius: '100px',
                    backgroundColor: step.themeColor,
                    margin: '28px auto 0',
                    transition: 'width 0.35s ease'
                  }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verify Your Certificate Here Section */}
      <section className="verify-section" style={{ 
        padding: '88px 0', 
        backgroundColor: '#ffffff', 
        borderTop: '1px solid #f1f5f9',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Creative Gold Yellow 9-Dot Patterns */}
        <div style={{ position: 'absolute', top: '32px', left: '32px', opacity: 0.35, pointerEvents: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <circle cx="10" cy="10" r="3.5" fill="#f9b933" />
            <circle cx="30" cy="10" r="3.5" fill="#f9b933" />
            <circle cx="50" cy="10" r="3.5" fill="#f9b933" />
            <circle cx="10" cy="30" r="3.5" fill="#f9b933" />
            <circle cx="30" cy="30" r="3.5" fill="#f9b933" />
            <circle cx="50" cy="30" r="3.5" fill="#f9b933" />
            <circle cx="10" cy="50" r="3.5" fill="#f9b933" />
            <circle cx="30" cy="50" r="3.5" fill="#f9b933" />
            <circle cx="50" cy="50" r="3.5" fill="#f9b933" />
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '32px', right: '32px', opacity: 0.35, pointerEvents: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <circle cx="10" cy="10" r="3.5" fill="#f9b933" />
            <circle cx="30" cy="10" r="3.5" fill="#f9b933" />
            <circle cx="50" cy="10" r="3.5" fill="#f9b933" />
            <circle cx="10" cy="30" r="3.5" fill="#f9b933" />
            <circle cx="30" cy="30" r="3.5" fill="#f9b933" />
            <circle cx="50" cy="30" r="3.5" fill="#f9b933" />
            <circle cx="10" cy="50" r="3.5" fill="#f9b933" />
            <circle cx="30" cy="50" r="3.5" fill="#f9b933" />
            <circle cx="50" cy="50" r="3.5" fill="#f9b933" />
          </svg>
        </div>

        <div className="container" style={{ maxWidth: '1120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '32px', fontWeight: 800, color: '#1a1854' }}>
              Verify Your Certificate Here
            </h2>
            {/* Visual separator line under the title */}
            <div style={{ width: '60px', height: '3px', backgroundColor: '#f9b933', margin: '16px auto 0', borderRadius: '2px' }} />
          </div>

          <div className="verify-card-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.2fr', 
            gap: '64px',
            alignItems: 'center',
            backgroundColor: '#1a1854',
            borderRadius: '24px',
            padding: '56px 48px',
            boxShadow: '0 30px 70px rgba(26,24,84,0.22)',
            border: '1px solid #1c1a5d'
          }}>
            
            {/* Left side Graphic Column: High-fidelity blue shield & magnifying glass vector */}
            <div className="verify-graphic" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg viewBox="0 0 340 320" style={{ width: '100%', height: 'auto', maxWidth: '340px' }}>
                {/* Shield Outline in background */}
                <path 
                  d="M170 30 C220 30 260 42 260 85 C260 150 220 215 170 245 C120 215 80 150 80 85 C80 42 120 30 170 30 Z" 
                  fill="none" 
                  stroke="#dbeafe" 
                  strokeWidth="3.5" 
                />
                <path 
                  d="M170 42 C210 42 245 52 245 90 C245 145 210 205 170 232 C130 205 95 145 95 90 C95 52 130 42 170 42 Z" 
                  fill="none" 
                  stroke="#eff6ff" 
                  strokeWidth="2" 
                />

                {/* Certificate document body */}
                <rect x="110" y="90" width="105" height="135" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
                
                {/* ISO Seal circular logo */}
                <circle cx="162" cy="120" r="16" fill="none" stroke="#1d4ed8" strokeWidth="1.5" />
                <circle cx="162" cy="120" r="13" fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />
                <text x="162" y="125" fill="#1d4ed8" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="0.3px">ISO</text>
                
                {/* Document text content lines */}
                <line x1="128" y1="148" x2="196" y2="148" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="128" y1="158" x2="196" y2="158" stroke="#e5e7eb" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="128" y1="168" x2="180" y2="168" stroke="#e5e7eb" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="128" y1="178" x2="164" y2="178" stroke="#e5e7eb" strokeWidth="2.5" strokeLinecap="round" />

                {/* Blue ribbon stamp seal on certificate bottom left */}
                <g transform="translate(138, 192)">
                  {/* Ribbon tails */}
                  <path d="M-8 8 L-12 28 L0 22 L12 28 L8 8 Z" fill="#2563eb" />
                  <path d="M-12 8 L-20 25 L-8 21 Z" fill="#1d4ed8" />
                  {/* Seal circle */}
                  <circle cx="0" cy="0" r="15" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                  <path d="M-6 0 L-2 4 L6 -4" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Large Magnifying Glass overlay shifted down and right to avoid obscuring the ISO logo */}
                <g transform="translate(205, 175)">
                  {/* Handle shadow */}
                  <line x1="22" y1="22" x2="52" y2="52" stroke="#94a3b8" strokeWidth="11" strokeLinecap="round" />
                  {/* Handle body */}
                  <line x1="22" y1="22" x2="52" y2="52" stroke="#0f172a" strokeWidth="9" strokeLinecap="round" />
                  {/* Handle metal clip connection */}
                  <line x1="16" y1="16" x2="23" y2="23" stroke="#cbd5e1" strokeWidth="9" strokeLinecap="round" />
                  {/* Glass frame shadow */}
                  <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(15,23,42,0.06)" strokeWidth="6.5" />
                  {/* Glass frame body */}
                  <circle cx="0" cy="0" r="31" fill="none" stroke="#0f172a" strokeWidth="5.5" />
                  {/* Glass lens reflection overlay */}
                  <circle cx="0" cy="0" r="28" fill="rgba(219,234,254,0.15)" />
                  <path d="M-18 -18 A 25 25 0 0 1 12 -22" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Decorative background grid (top-left) */}
                <g transform="translate(70, 70)" fill="#cbd5e1">
                  <circle cx="0" cy="0" r="1.8" />
                  <circle cx="10" cy="0" r="1.8" />
                  <circle cx="20" cy="0" r="1.8" />
                  <circle cx="0" cy="8" r="1.8" />
                  <circle cx="10" cy="8" r="1.8" />
                  <circle cx="20" cy="8" r="1.8" />
                  <circle cx="0" cy="16" r="1.8" />
                  <circle cx="10" cy="16" r="1.8" />
                  <circle cx="20" cy="16" r="1.8" />
                  <circle cx="0" cy="24" r="1.8" />
                  <circle cx="10" cy="24" r="1.8" />
                  <circle cx="20" cy="24" r="1.8" />
                </g>

                {/* Starbursts/Sparkles */}
                <path d="M70 145 L72 140 L70 135 L68 140 Z M70 140 L65 140 M70 140 L75 140" stroke="#38bdf8" strokeWidth="1" />
                <path d="M255 130 L257 125 L255 120 L253 125 Z M255 125 L250 125 M255 125 L260 125" stroke="#38bdf8" strokeWidth="1" />
                <path d="M260 170 L262 165 L260 160 L258 165 Z M260 165 L255 165 M260 165 L265 165" stroke="#38bdf8" strokeWidth="1" />

                {/* Bottom Left Globe icon */}
                <g transform="translate(70, 200) scale(0.65)" stroke="#93c5fd" strokeWidth="2.2" fill="none">
                  <circle cx="20" cy="20" r="18" />
                  <path d="M2 20h36 M20 2a28 28 0 0 0 0 36 M20 2a28 28 0 0 1 0 36" />
                </g>

                {/* Bottom Right Checkmark Badge outline */}
                <g transform="translate(240, 220) scale(0.65)">
                  <circle cx="16" cy="16" r="15" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="3 1" />
                  <path d="M11 16 L14 19 L21 12" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
                </g>
              </svg>
            </div>

            {/* Right side form column with corresponding badges & input groups */}
            <div>
              <form onSubmit={handleVerifySearch} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Client Code Field Group */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff' }}>Client Code</label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#1a1854', 
                      pointerEvents: 'none',
                      zIndex: 2
                    }}>
                      <Fingerprint size={20} strokeWidth={2.0} />
                    </div>
                    <input
                      type="text"
                      placeholder="Client Code"
                      value={clientCode}
                      onChange={(e) => setClientCode(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 46px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Certificate No Field Group */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff' }}>Certificate No</label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#1a1854', 
                      pointerEvents: 'none',
                      zIndex: 2
                    }}>
                      <QrCode size={20} strokeWidth={2.0} />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Certificate No"
                      value={certNumber}
                      onChange={(e) => setClientCertNumber(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 46px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Standard Field Group */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff' }}>Standard</label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#1a1854', 
                      pointerEvents: 'none',
                      zIndex: 2
                    }}>
                      <Workflow size={20} strokeWidth={2.0} />
                    </div>
                    <input
                      type="text"
                      placeholder="Standard"
                      value={standard}
                      onChange={(e) => setStandard(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 46px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons styled precisely as rounded pills in the screenshot */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px', paddingLeft: '0px' }}>
                  <button
                    type="submit"
                    disabled={isSearching}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 32px',
                      backgroundColor: '#f9b933',
                      color: '#1a1854',
                      fontWeight: 800,
                      border: 'none',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      boxShadow: '0 2px 8px rgba(249,185,51,0.2)'
                    }}
                  >
                    <Search size={16} strokeWidth={2.5} />
                    {isSearching ? 'Searching...' : 'Search'}
                  </button>
                  <button
                    type="button"
                    onClick={handleVerifyReset}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 32px',
                      backgroundColor: '#ffffff',
                      color: '#475569',
                      fontWeight: 800,
                      border: '1px solid #cbd5e1',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    <RotateCcw size={16} strokeWidth={2.5} />
                    Reset
                  </button>
                </div>
              </form>

              {/* Real-time Result Overlay */}
              {searched && (
                <div style={{ marginTop: '28px', paddingLeft: '0px' }}>
                  {result ? (
                    <div style={{ 
                      background: '#e5f6ee', 
                      border: '1.5px solid #2f9e6e', 
                      borderRadius: '12px', 
                      padding: '24px', 
                      color: '#211f52' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#2f9e6e', background: '#fff', padding: '4px 10px', borderRadius: '100px' }}>
                          STATUS: {result.status}
                        </span>
                        <CheckCircle2 size={24} style={{ color: '#2f9e6e' }} />
                      </div>
                      <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1a1854', marginBottom: '8px' }}>{result.companyName}</h4>
                      <p style={{ fontSize: '13px', margin: '4px 0' }}><strong>Standard:</strong> {result.standard}</p>
                      <p style={{ fontSize: '13px', margin: '4px 0' }}><strong>Cert No:</strong> {result.certNumber}</p>
                      <p style={{ fontSize: '13px', margin: '4px 0' }}><strong>Expiry:</strong> {result.expiryDate}</p>
                      <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', borderTop: '1px solid rgba(47,158,110,0.2)', paddingTop: '8px' }}>
                        <strong>Scope:</strong> {result.scope}
                      </p>
                    </div>
                  ) : (
                    <div style={{ 
                      background: '#fdeaea', 
                      border: '1.5px solid #c94141', 
                      color: '#c94141', 
                      padding: '16px', 
                      borderRadius: '8px', 
                      fontSize: '13.5px',
                      fontWeight: 600
                    }}>
                      No Certificate Record Found for "{certNumber.toUpperCase()}". Please verify the code or contact info@traibcert.org.uk.
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
