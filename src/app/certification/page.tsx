'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Leaf, 
  HeartPulse, 
  Utensils, 
  Cpu, 
  Workflow, 
  Fingerprint, 
  ShieldAlert, 
  Sparkles, 
  Zap, 
  Activity, 
  Droplet, 
  GraduationCap, 
  Building,
  TrendingUp,
  Target,
  Users,
  FileText,
  UserCheck,
  Search,
  RotateCcw
} from 'lucide-react';
import { certificationsData } from '@/config/certifications';
import { CertVerifyLookup } from '@/components/ui/CertVerifyLookup';

// Fully modernized, high-fidelity icon choices for each certification
const iconMap: { [key: string]: any } = {
  'iso-9001': CheckCircle2,         // Quality
  'iso-10002': Heart,                // Customer Satisfaction
  'iso-14001': Leaf,                 // Environmental
  'iso-45001': HeartPulse,           // Health & Safety
  'iso-22000': Utensils,             // Food Safety
  'iso-20000-1': Cpu,                // IT Service
  'iso-22301': Workflow,             // Business Continuity
  'iso-27001': Fingerprint,          // Information Security / Cybersecurity
  'iso-31000': ShieldAlert,          // Risk Management
  'iso-26000': Sparkles,             // Social Responsibility
  'iso-50001': Zap,                  // Energy
  'iso-13485': Activity,             // Medical Devices
  'iso-29001': Droplet,              // Oil & Gas
  'iso-21001': GraduationCap,        // Education
  'iso-41001': Building,             // Facilities
  'cyber-essentials': ShieldCheck,   // Cyber Essentials
  'cyber-essentials-plus': ShieldCheck, // Cyber Essentials Plus
  'iso-42001': Cpu                   // Artificial Intelligence
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

// Color config array for gradient-based wave elements
const cardColors = [
  { start: '#1d4ed8', end: '#2563eb', text: '#2563eb' }, // Blue
  { start: '#6d28d9', end: '#7c3aed', text: '#7c3aed' }, // Purple
  { start: '#059669', end: '#10b981', text: '#10b981' }, // Green
  { start: '#dc2626', end: '#ef4444', text: '#ef4444' }, // Red
  { start: '#0d9488', end: '#14b8a6', text: '#14b8a6' }, // Teal
  { start: '#d97706', end: '#f59e0b', text: '#f59e0b' }, // Yellow/Gold
  { start: '#ea580c', end: '#f97316', text: '#f97316' }, // Orange
  { start: '#1e3a8a', end: '#3b82f6', text: '#3b82f6' }, // Indigo
  { start: '#4338ca', end: '#6366f1', text: '#6366f1' }, // Blue-Indigo
  { start: '#7e22ce', end: '#a855f7', text: '#a855f7' }, // Lavender
  { start: '#be185d', end: '#ec4899', text: '#ec4899' }  // Pink
];

export default function CertificationLandingPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Verification Form States
  const [clientCode, setClientCode] = useState('');
  const [certNumber, setClientCertNumber] = useState('');
  const [standard, setStandard] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);

  // Filter certifications to only show the standard set from your portfolio
  const portfolioCerts = certificationsData.filter(cert => 
    allowedSlugs.includes(cert.slug)
  );

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
        backgroundImage: "linear-gradient(rgba(10, 22, 40, 0.85), rgba(15, 24, 42, 0.95)), url('/assets/images/Home/hero_bg.png')",
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
            fontFamily: 'var(--font-serif)'
          }}>
            Our Certification Portfolio
          </h1>

          <p style={{ 
            fontSize: '16px', 
            color: 'rgba(255, 255, 255, 0.9)', 
            lineHeight: 1.75, 
            margin: 0, 
            textAlign: 'justify',
            maxWidth: '920px'
          }}>
            At TRAIBCERT, we offer certification services to our clients applicable to any type of manufacturing or service industry and is administered in A on-discriminatory manner.Initially, we at TRAIBCERT make a complete understanding of your organizations exact processes and assess how different standards fit into the existing processes. Once certified, we also ensure that the ISO standards are followed rightly through rigorous monitoring and provide training wherever required. Our certification service portfolio includes,
          </p>
        </div>
      </section>

      {/* Main Grid Content Area */}
      <section style={{ padding: '64px 0 80px', backgroundColor: '#f8fafc' }}>
        <div className="container">

          {/* 4-Column Premium Card Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            marginBottom: '48px'
          }}>
            {portfolioCerts.map((cert, idx) => {
              const IconComponent = iconMap[cert.slug] || CheckCircle2;
              const isHovered = hoveredSlug === cert.slug;
              const displayTitle = certTitlesMap[cert.slug] || `${cert.code} ${cert.name}`;

              // Get color configuration based on index
              const colorConfig = cardColors[idx % cardColors.length];
              const indexStr = String(idx + 1).padStart(2, '0');

              return (
                <Link
                  key={cert.slug}
                  href={cert.slug === 'cyber-essentials' ? '/certification/cyber-essentials' : `/certification/${cert.slug}`}
                  onMouseEnter={() => setHoveredSlug(cert.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    boxShadow: isHovered 
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
                    border: '1.5px solid #f1f5f9',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
                    minHeight: '140px'
                  }}
                >
                  {/* Left panel with SVG organic wave background */}
                  <div style={{ position: 'relative', width: '70px', flexShrink: 0, zIndex: 1 }}>
                    <svg viewBox="0 0 70 140" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                      <defs>
                        <linearGradient id={`grad-${cert.slug}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={colorConfig.start} />
                          <stop offset="100%" stopColor={colorConfig.end} />
                        </linearGradient>
                      </defs>
                      <path d="M0,0 L48,0 C62,35 42,75 55,140 L0,140 Z" fill={`url(#grad-${cert.slug})`} />
                    </svg>

                    {/* Centered Content Wrapper (Index & Icon) relative to the wave boundaries */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '52px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 0'
                    }}>
                      {/* Card Index */}
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                        {indexStr}
                      </div>

                      {/* Prominent, Centered Icon */}
                      <div style={{ color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconComponent size={34} strokeWidth={1.6} />
                      </div>

                      {/* Spacer to align icon perfectly centered */}
                      <div style={{ height: '11px' }} />
                    </div>
                  </div>

                  {/* Right Text Content Panel */}
                  <div style={{ 
                    flexGrow: 1, 
                    padding: '24px 20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{ 
                      color: '#0f172a', 
                      fontSize: '13.5px', 
                      fontWeight: 800, 
                      lineHeight: 1.45,
                      textAlign: 'left'
                    }}>
                      {displayTitle}
                    </div>

                    {/* Arrow Icon bottom right */}
                    <div style={{ 
                      alignSelf: 'flex-end', 
                      color: colorConfig.text,
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease',
                      transform: isHovered ? 'translateX(3px)' : 'translateX(0px)'
                    }}>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Footer Note */}
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
              Apart from certification services, we also provide auditing services against specifications and standards which can be tailored to suit your organizational requirements based on specifications.
            </p>
          </div>

        </div>
      </section>

      {/* ISO Certification & Its Benefits Section — Infographic Design */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '100px 0 120px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 80px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 800, color: '#1a1854', marginBottom: '16px' }}>
              ISO certification & its Benefits
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.65 }}>
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

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    padding: '64px 24px 36px',
                    boxShadow: '0 20px 40px rgba(15,23,42,0.06)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px'
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
                    transform: `rotate(${step.rotateDeg})`,
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
                      marginTop: '8px'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ 
                      fontSize: '13.5px', 
                      color: '#64748b', 
                      lineHeight: 1.6, 
                      margin: 0,
                      textAlign: 'left'
                    }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Colored Bottom Accent Pill */}
                  <div style={{
                    width: '50px',
                    height: '6px',
                    borderRadius: '100px',
                    backgroundColor: step.themeColor,
                    margin: '28px auto 0'
                  }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verify Your Certificate Here Section */}
      <section style={{ padding: '88px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 800, color: '#1a1854' }}>
              Verify Your Certificate Here
            </h2>
            {/* Visual separator line under the title */}
            <div style={{ width: '60px', height: '3px', backgroundColor: '#f9b933', margin: '16px auto 0', borderRadius: '2px' }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.2fr', 
            gap: '64px',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '56px 48px',
            boxShadow: '0 20px 40px rgba(15,23,42,0.03)',
            border: '1px solid #e8eff9'
          }}>
            
            {/* Left side Graphic Column: High-fidelity blue shield & magnifying glass vector */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

                {/* Large Magnifying Glass overlay */}
                <g transform="translate(178, 142)">
                  {/* Handle shadow */}
                  <line x1="28" y1="28" x2="58" y2="58" stroke="#94a3b8" strokeWidth="11" strokeLinecap="round" />
                  {/* Handle body */}
                  <line x1="28" y1="28" x2="58" y2="58" stroke="#0f172a" strokeWidth="9" strokeLinecap="round" />
                  {/* Handle metal clip connection */}
                  <line x1="22" y1="22" x2="29" y2="29" stroke="#cbd5e1" strokeWidth="9" strokeLinecap="round" />
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
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '10px', 
                    backgroundColor: '#eff6ff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: '#1d4ed8', 
                    flexShrink: 0 
                  }}>
                    <UserCheck size={20} />
                  </div>
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 800, color: '#1a1854' }}>Client Code</label>
                    <input
                      type="text"
                      placeholder="Client Code"
                      value={clientCode}
                      onChange={(e) => setClientCode(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Certificate No Field Group */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '10px', 
                    backgroundColor: '#eff6ff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: '#1d4ed8', 
                    flexShrink: 0 
                  }}>
                    <FileText size={20} />
                  </div>
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 800, color: '#1a1854' }}>Certificate No</label>
                    <input
                      type="text"
                      required
                      placeholder="Certificate No"
                      value={certNumber}
                      onChange={(e) => setClientCertNumber(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Standard Field Group */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '10px', 
                    backgroundColor: '#eff6ff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: '#1d4ed8', 
                    flexShrink: 0 
                  }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 800, color: '#1a1854' }}>Standard</label>
                    <input
                      type="text"
                      placeholder="Standard"
                      value={standard}
                      onChange={(e) => setStandard(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons styled precisely as rounded pills in the screenshot */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px', paddingLeft: '60px' }}>
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
                <div style={{ marginTop: '28px', paddingLeft: '60px' }}>
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
