'use client';

import React from 'react';
import Link from 'next/link';
import {
  Award,
  GraduationCap,
  FileCheck,
  Monitor,
  PackageCheck,
  ShieldAlert,
  ArrowRight,
  ArrowUpRight,
  Download
} from 'lucide-react';

export const OurServicesSection: React.FC = () => {
  const serviceCards = [
    {
      subTag: 'Service',
      title: 'Certification',
      bg: '#3eb89b',
      textColor: '#ffffff',
      icon: Award,
      desc: 'At TRAIBCERT, we offer certification services to our clients applicable to any type of manufacturing...',
      link: '/services/certification',
      cta: 'View More',
      bottomTag: 'certification service'
    },
    {
      title: 'Training',
      bg: '#d6bd96',
      textColor: '#2a241e',
      icon: GraduationCap,
      desc: 'At TRAIBCERT, we have developed a suite of ISO training courses, total package of the approach, highly ‘ interactive with real world examples...',
      link: '/services/training',
      cta: 'View More',
      bottomTag: 'iso 9001'
    },
    {
      title: 'Inspection',
      bg: '#38b6ff',
      textColor: '#ffffff',
      icon: FileCheck,
      desc: 'The present scenario of business environment, out-sourcing majority of jobs &services to the appropriate agencies....',
      link: '/services/inspection',
      cta: 'View More'
    },
    {
      title: 'E-Learning',
      bg: '#ee6c4d',
      textColor: '#ffffff',
      icon: Monitor,
      desc: 'Learning conducted via electronic media, typically on the Internet. successful e-learning depends on the self-motivation of individuals to study effectively.',
      link: '/services/e-learning',
      cta: 'View More'
    },
    {
      subTag: '6 step essential Guide for certification',
      title: '6 step essential Guide for certification',
      bg: '#98c9a3',
      textColor: '#1a3824',
      icon: PackageCheck,
      desc: 'Start your Certification journey with our expert guidance- Your step by step document for an seamless and effortless certification process now',
      link: '/resources/guide.pdf',
      isDownload: true,
      cta: 'Download Now'
    },
    {
      subTag: 'ISO Training',
      title: 'Risk Management',
      bg: '#f2a925',
      textColor: '#ffffff',
      icon: ShieldAlert,
      desc: 'Risk management is an increasingly important business driver and stakeholders have become much more concerned about risk...',
      link: '/services/risk-management',
      cta: 'View More'
    }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: '64px', paddingBottom: '88px', position: 'relative' }}>
      <div className="container">
        
        {/* Main Layout Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Hero Banner Card (Indigo #1a1854 Background, 0px Rounded Corners) */}
          <div
            style={{
              backgroundColor: '#1a1854',
              color: '#ffffff',
              borderRadius: '0px',
              padding: '40px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            {/* Background Geometric Grid Accent */}
            <svg
              style={{
                position: 'absolute',
                right: '40px',
                top: '20px',
                width: '120px',
                height: '80px',
                opacity: 0.15,
                pointerEvents: 'none'
              }}
            >
              <pattern id="heroGridPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              </pattern>
              <rect width="120" height="80" fill="url(#heroGridPattern)" />
            </svg>

            <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.15 }}>
                Our Services
              </h2>

              <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.65, marginBottom: '24px', fontWeight: 500 }}>
                We at Traibcert, are an Independent, Impartial Certification Body for various ISO standards taking pride in supporting your compliance needs for certification- Audits, Training, inspection&amp; Regulatory Compliance. We are most sort after by all customers for the well qualified audit team delivering most consistentreport in a reliable manner.
              </p>

              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#f9b933',
                  color: '#1a1854',
                  padding: '10px 20px 10px 24px',
                  borderRadius: '8px',
                  fontSize: '14.5px',
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
          </div>

          {/* Perfect 3-Column Uniform Grid Layout for All 6 Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px'
            }}
          >
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              const directions = ['reveal-left', 'reveal-bottom', 'reveal-right', 'reveal-left', 'reveal-scale', 'reveal-right'];
              const dirClass = directions[index];
              return (
                <div
                  key={index}
                  className={`reveal-item ${dirClass} stagger-${(index % 4) + 1}`}
                  style={{
                    backgroundColor: card.bg,
                    color: card.textColor,
                    padding: '32px 28px',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle Creative Modern Corner Geometry Accent Pattern */}
                  <svg
                    style={{
                      position: 'absolute',
                      right: '-10px',
                      top: '-10px',
                      width: '72px',
                      height: '72px',
                      opacity: 0.16,
                      pointerEvents: 'none'
                    }}
                  >
                    <circle cx="36" cy="36" r="32" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="36" cy="36" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                  </svg>

                  <div>
                    {/* Optional Sub-tag */}
                    {card.subTag && (
                      <div style={{ fontSize: '11px', fontWeight: 800, opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                        {card.subTag}
                      </div>
                    )}

                    {/* Service Icon */}
                    <div style={{ position: 'relative', width: '56px', height: '56px', marginBottom: '18px', display: 'flex', alignItems: 'center' }}>
                      <Icon size={46} strokeWidth={1.6} style={{ color: card.textColor }} />
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: card.textColor, marginBottom: '10px', lineHeight: 1.25 }}>
                      {card.title}
                    </h3>

                    <p style={{ fontSize: '13.5px', color: card.textColor, opacity: 0.92, lineHeight: 1.55, margin: 0 }}>
                      {card.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    {card.isDownload ? (
                      <a
                        href={card.link}
                        download
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: card.textColor,
                          fontSize: '13px',
                          fontWeight: 800,
                          textDecoration: 'none',
                          borderBottom: `1.5px solid ${card.textColor}`,
                          paddingBottom: '2px'
                        }}
                      >
                        <Download size={14} />
                        <span>{card.cta}</span>
                      </a>
                    ) : (
                      <Link
                        href={card.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: card.textColor,
                          fontSize: '13px',
                          fontWeight: 800,
                          textDecoration: 'none',
                          borderBottom: `1.5px solid ${card.textColor}`,
                          paddingBottom: '2px'
                        }}
                      >
                        <span>{card.cta}</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {/* Bottom Tag if present */}
                    {card.bottomTag && (
                      <span style={{ fontSize: '11px', opacity: 0.75, fontStyle: 'italic' }}>
                        {card.bottomTag}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
