'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Award, CheckCircle2, Building2, Users } from 'lucide-react';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export const HeroWithQuoteForm: React.FC = () => {
  return (
    <section id="hero" style={{ backgroundColor: '#2c2a75', color: '#ffffff', position: 'relative', overflow: 'hidden', paddingTop: '56px', paddingBottom: '88px' }}>
      
      {/* Dark Indigo Technical Radial Background Overlay (Clean, Corporate, No Neon Glows) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(249, 185, 51, 0.08) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(26, 24, 84, 0.6) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Main Grid: Left Content & Right Floating Quote Form */}
        <div className="hero-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px', 
          alignItems: 'flex-start'
        }}>
          
          {/* Left Column Content */}
          <div className="hero-animate-in" style={{ paddingTop: '12px' }}>
            
            {/* Top Eyebrow Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff4d1', border: '1px solid #fde68a', color: '#c99327', padding: '6px 14px', borderRadius: '9px', marginBottom: '20px', fontSize: 'clamp(10px, 2vw, 12px)' }}>
              <ShieldCheck size={15} />
              <span>INDEPENDENT, IMPARTIAL CERTIFICATION BODY</span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(24px, 6vw, 52px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: '20px' }}>
              Accredited ISO Certification & Cyber Security Body
            </h1>

            {/* Sub-headline */}
            <p style={{ fontSize: 'clamp(14px, 3vw, 16.5px)', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6, marginBottom: '36px', maxWidth: '580px' }}>
              We at TRAIBCERT are an Independent, Impartial Certification Body taking pride in supporting your compliance needs for ISO Certification, IRCA Training, and Pre-Shipment Inspection services.
            </p>

            {/* 2 Hero Pill Selection Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '44px' }}>
              
              <Link
                href="/certification"
                className="hero-pill-card"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#2c2a75',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                  border: '1.5px solid transparent'
                }}
              >
                <div>
                  <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                    MORE THAN 500 EMPLOYEES
                  </div>
                  <div style={{ fontSize: 'clamp(13px, 3vw, 15px)', fontWeight: 800, color: '#2c2a75' }}>
                    Enterprise ISO Systems
                  </div>
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#2c2a75', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ArrowUpRight size={18} />
                </div>
              </Link>

              <Link
                href="/certification/cyber-essentials"
                className="hero-pill-card"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#2c2a75',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                  border: '1.5px solid transparent'
                }}
              >
                <div>
                  <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                    FEWER THAN 500 EMPLOYEES
                  </div>
                  <div style={{ fontSize: 'clamp(13px, 3vw, 15px)', fontWeight: 800, color: '#2c2a75' }}>
                    Small to Mid-Sized Businesses
                  </div>
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#2c2a75', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ArrowUpRight size={18} />
                </div>
              </Link>

            </div>

            {/* Bottom 50K+ Trust Metric & Badges Strip */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: 'clamp(16px, 4vw, 24px)',
              color: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: '#fff4d1', border: '1px solid #fde68a', borderRadius: '10px', padding: '8px 14px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: 800, color: '#2c2a75', lineHeight: 1 }}>
                    5,000+
                  </div>
                  <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#c99327', textTransform: 'uppercase', marginTop: '2px' }}>
                    CERTIFIED
                  </div>
                </div>

                <div style={{ fontSize: 'clamp(12px, 2vw, 13px)', fontWeight: 700, color: '#475569', lineHeight: 1.4 }}>
                  Global Customers, Clients and Partners Certified with TRAIBCERT
                </div>
              </div>

              {/* Accreditations Badges Strip */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ backgroundColor: '#fff4d1', color: '#c99327', fontSize: '11px', fontWeight: 800, padding: '4px 8px', borderRadius: '6px' }}>ASCB</div>
                  <div style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 600, marginTop: '2px' }}>Accredited</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ backgroundColor: '#fff4d1', color: '#c99327', fontSize: '11px', fontWeight: 800, padding: '4px 8px', borderRadius: '6px' }}>IASME</div>
                  <div style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 600, marginTop: '2px' }}>Partner</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ backgroundColor: '#e5f6ee', color: '#2f9e6e', fontSize: '11px', fontWeight: 800, padding: '4px 8px', borderRadius: '6px' }}>IRCA</div>
                  <div style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 600, marginTop: '2px' }}>Approved</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating White Lead/Quote Form */}
          <div className="hero-animate-in" style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: 'clamp(24px, 6vw, 36px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid #e2e8f0',
            color: '#0f172a',
            position: 'relative',
            height: 'fit-content'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 800, color: '#2c2a75', lineHeight: 1.25, marginBottom: '6px' }}>
                Let's connect – we'll guide you to the right solution
              </h3>
              <p style={{ fontSize: 'clamp(12px, 2vw, 13.5px)', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Complete our fast form below for an instant fixed proposal from our UK lead audit team.
              </p>
            </div>

            {/* Zoho Bigin Native Form */}
            <ZohoBiginForm defaultStandard="ISO 9001:2015" />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          section#hero {
            padding-top: 32px;
            padding-bottom: 56px;
          }
        }

        @media (max-width: 480px) {
          section#hero {
            padding-top: 24px;
            padding-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
};
