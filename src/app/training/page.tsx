'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Award, 
  MessageSquareHeart, 
  TreePine, 
  HardHat, 
  Wheat, 
  Server, 
  ShieldCheck, 
  KeyRound, 
  Gauge, 
  Users, 
  BatteryCharging, 
  GraduationCap
} from 'lucide-react';
import { trainingCoursesData } from '@/config/training';

// Unique, field-specific icon mapping for training courses
const iconMap: { [key: string]: any } = {
  'iso-9001': Award,                 // Quality - award/medal ribbon
  'iso-10002': MessageSquareHeart,   // Customer Satisfaction - heart message
  'iso-14001': TreePine,             // Environmental - tree/nature
  'iso-45001': HardHat,              // Health & Safety - safety helmet
  'iso-22000': Wheat,                // Food Safety - wheat/grain
  'iso-20000-1': Server,             // IT Service - server rack
  'iso-22301': ShieldCheck,          // Business Continuity - shield check
  'iso-27001': KeyRound,             // Information Security - key/lock
  'iso-31000': Gauge,                // Risk Management - gauge/meter
  'iso-26000': Users,                // Social Responsibility - community
  'iso-50001': BatteryCharging       // Energy - battery charging
};

// Exact titles for the training courses matching your screenshot
const trainingTitlesMap: { [key: string]: string } = {
  'iso-9001': 'ISO 9001:2015 Quality Management Certification Training',
  'iso-10002': 'ISO 10002:2018 Customer Satisfaction Training',
  'iso-14001': 'ISO 14001:2015 Environmental management systems Training',
  'iso-45001': 'ISO 45001:2018 Occupational Health & safety Assessment System Training',
  'iso-22000': 'ISO 22000:2018 Food safety management systems Training',
  'iso-20000-1': 'ISO 20000-1:2018 IT Service Management System Training',
  'iso-22301': 'ISO 22301:2019 Business Continuity Management Training',
  'iso-27001': 'ISO 27001:2022 Information Security Management System Training',
  'iso-31000': 'ISO 31000:2018 - Risk Management Training',
  'iso-26000': 'ISO 26000:2010 Guidance on social responsibility Training',
  'iso-50001': 'ISO 50001:2018 - Energy management Training'
};

const allowedSlugs = Object.keys(trainingTitlesMap);

// Define styles and gradients matching the screenshot's color themes
const cardColors = [
  { start: '#1d4ed8', end: '#2563eb', text: '#2563eb' }, // 01 Blue
  { start: '#6d28d9', end: '#7c3aed', text: '#7c3aed' }, // 02 Purple
  { start: '#059669', end: '#10b981', text: '#10b981' }, // 03 Green
  { start: '#dc2626', end: '#ef4444', text: '#ef4444' }, // 04 Red
  { start: '#0d9488', end: '#14b8a6', text: '#14b8a6' }, // 05 Teal
  { start: '#d97706', end: '#f59e0b', text: '#f59e0b' }, // 06 Yellow/Gold
  { start: '#ea580c', end: '#f97316', text: '#f97316' }, // 07 Orange
  { start: '#1e3a8a', end: '#3b82f6', text: '#3b82f6' }, // 08 Indigo
  { start: '#4338ca', end: '#6366f1', text: '#6366f1' }, // 09 Blue-Indigo
  { start: '#7e22ce', end: '#a855f7', text: '#a855f7' }, // 10 Lavender
  { start: '#be185d', end: '#ec4899', text: '#ec4899' }  // 11 Pink
];

export default function TrainingLandingPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const portfolioCourses = trainingCoursesData.filter(t => allowedSlugs.includes(t.slug));

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--font-sans)', color: '#334155' }}>
      
      {/* Home / Training Breadcrumb Teal Bar */}
      <div style={{ backgroundColor: '#1a1854', padding: '16px 0', color: '#fff' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.8px' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', opacity: 0.85 }}>HOME</Link>
          <span>/</span>
          <span style={{ color: '#f9b933' }}>TRAINING</span>
        </div>
      </div>

      {/* Main Section */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="container">
          
          {/* Header Title & Exact Paragraph Content */}
          <div style={{ maxWidth: '1080px', margin: '0 auto 48px' }}>
            <h1 style={{ 
              fontSize: 'clamp(26px, 3.5vw, 36px)', 
              fontWeight: 800, 
              color: '#1a1854', 
              marginBottom: '20px',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              ISO Training Courses in UK
            </h1>
            <p style={{ fontSize: '15.5px', color: '#334155', lineHeight: 1.75, margin: 0, textAlign: 'justify', fontFamily: 'var(--font-sans)' }}>
              At TRAIBCERT, we have developed a suite of ISO training courses, total package of the approach, highly interactive with real world examples and open studies, an opportunity for individuals from different sectors, industry and background enrich their knowledge upon. The growing portfolio of courses is support our core services, which specialize in implementation, certification and continual auditing of ISO Management Standards.
              <br /><br />
              Our courses are delivered by specialists in their field, which provide you with high value knowledge and skills to those wanting to learn more about standards, procedures, international standards and assessment skills. Our Certification Training portfolio details as follows,
            </p>
          </div>

          {/* 4-Column Training Course Cards Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            marginBottom: '64px'
          }}>
            {portfolioCourses.map((course, idx) => {
              const IconComponent = iconMap[course.slug] || GraduationCap;
              const isHovered = hoveredSlug === course.slug;
              const displayTitle = trainingTitlesMap[course.slug] || `${course.code} ${course.name}`;
              
              // Get style/gradient configuration based on card index
              const colorConfig = cardColors[idx % cardColors.length];
              const indexStr = String(idx + 1).padStart(2, '0');

              return (
                <Link
                  key={course.slug}
                  href={`/training/${course.slug}`}
                  onMouseEnter={() => setHoveredSlug(course.slug)}
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
                        <linearGradient id={`grad-${course.slug}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={colorConfig.start} />
                          <stop offset="100%" stopColor={colorConfig.end} />
                        </linearGradient>
                      </defs>
                      <path d="M0,0 L48,0 C62,35 42,75 55,140 L0,140 Z" fill={`url(#grad-${course.slug})`} />
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
                      fontSize: '14px', 
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

          {/* Certificate Distribution Section */}
          <div style={{ borderTop: '1.5px solid #e2e8f0', paddingTop: '56px', textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 800, 
              color: '#1a1854', 
              marginBottom: '32px',
              lineHeight: 1.5,
              maxWidth: '860px',
              margin: '0 auto 32px'
            }}>
              Dr.Rashid Aleem distributing the Traib Cert certificate to trainees in SEWA HO proud moment alog with that is Mr. Rony GM Zulal water Factory.
            </h3>

            {/* Premium 3-Photo Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '24px',
              marginBottom: '32px'
            }}>
              {[1, 2, 3].map((num) => (
                <div 
                  key={num} 
                  style={{ 
                    overflow: 'hidden', 
                    borderRadius: '12px', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#fff',
                    transition: 'transform 0.25s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  <img 
                    src={`/assets/images/training_${num}.jpg`} 
                    alt={`Training session representation ${num}`} 
                    style={{ 
                      width: '100%', 
                      height: '220px', 
                      objectFit: 'cover',
                      display: 'block' 
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Slider Dots styling indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a80a2', display: 'inline-block' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#cbd5e1', display: 'inline-block' }} />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
