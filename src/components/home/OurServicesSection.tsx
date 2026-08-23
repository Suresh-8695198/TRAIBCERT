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
      decorTop: '+',
      decorBottom: 'o',
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
      decorTop: '^',
      decorBottom: '+',
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
      decorTop: 'x',
      decorBottom: 'o',
      desc: 'The present scenario of business environment, out-sourcing majority of jobs &services to the appropriate agencies....',
      link: '/services/inspection',
      cta: 'View More'
    },
    {
      title: 'E-Learning',
      bg: '#ee6c4d',
      textColor: '#ffffff',
      icon: Monitor,
      decorTop: '+',
      decorBottom: '(+)',
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
      decorTop: 'o',
      decorBottom: '+',
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
      decorTop: '+',
      decorBottom: 'x',
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
          
          {/* Top Hero Banner Card (Header Title: "Our Services" + Exact User Paragraph + View More Button) */}
          <div
            style={{
              backgroundColor: '#e5a33c',
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
            {/* Background Line-Art Accents (+ o x decor) */}
            <div style={{ position: 'absolute', right: '40px', top: '15px', opacity: 0.18, fontSize: '26px', userSelect: 'none' }}>
              + &nbsp; o &nbsp; x &nbsp; + &nbsp; o
            </div>

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
                  gap: '8px',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  fontSize: '14.5px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  boxShadow: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#262378';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1854';
                }}
              >
                <span>View More</span>
                <ArrowRight size={16} />
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
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: card.bg,
                    color: card.textColor,
                    padding: '32px 28px',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Optional Sub-tag */}
                    {card.subTag && (
                      <div style={{ fontSize: '11px', fontWeight: 800, opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                        {card.subTag}
                      </div>
                    )}

                    {/* Line Art Icon with + o x accent decorations */}
                    <div style={{ position: 'relative', width: '64px', height: '64px', marginBottom: '18px' }}>
                      <Icon size={46} strokeWidth={1.6} style={{ color: card.textColor }} />
                      <span style={{ position: 'absolute', top: '-4px', right: '0px', fontSize: '12px', opacity: 0.8 }}>
                        {card.decorTop}
                      </span>
                      <span style={{ position: 'absolute', bottom: '0px', right: '-8px', fontSize: '10px', opacity: 0.8 }}>
                        {card.decorBottom}
                      </span>
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
