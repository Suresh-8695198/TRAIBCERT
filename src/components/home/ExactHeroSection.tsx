'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export const ExactHeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ backgroundColor: '#2c2a75', color: '#ffffff', position: 'relative', overflow: 'hidden', paddingTop: '64px', paddingBottom: '88px' }}>
      
      {/* Background Decorative Lighting Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(249, 185, 51, 0.12) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(26, 24, 84, 0.6) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: '48px', alignItems: 'flex-start' }}>
          
          {/* Left Column Text Content */}
          <div style={{ paddingTop: '16px' }}>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(249, 185, 51, 0.15)', border: '1px solid rgba(249, 185, 51, 0.3)', color: '#f9b933', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '24px' }}>
              <ShieldCheck size={15} />
              <span>INDEPENDENT, IMPARTIAL CERTIFICATION BODY</span>
            </div>

            <h1 style={{ fontSize: 'clamp(34px, 4.2vw, 52px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: '20px' }}>
              Supporting Your Compliance & ISO Certification Needs
            </h1>

            <p style={{ fontSize: '17px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6, marginBottom: '36px', maxWidth: '580px' }}>
              We at TRAIBCERT, are an Independent, Impartial Certification Body for various ISO standards taking pride in supporting your compliance needs for Certification- Audits, Training, Inspection & Regulatory Compliance.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <Link
                href="/contact/enquiry"
                className="btn btn-gold"
                style={{ padding: '14px 28px', fontSize: '15px', borderRadius: '8px' }}
              >
                <span>Get Started Now</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/certification"
                className="btn btn-outline"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff', padding: '14px 24px', fontSize: '15px', borderRadius: '8px' }}
              >
                <span>View Our Services</span>
              </Link>
            </div>

            {/* Accreditation Badges Strip */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '20px 24px',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
            }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#2c2a75' }}>
                  Globally Recognized Accreditations
                </div>
                <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>
                  UKAS & ASCB Aligned Audits in 45+ Countries
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ backgroundColor: '#fff4d1', color: '#c99327', fontSize: '11px', fontWeight: 800, padding: '6px 10px', borderRadius: '6px' }}>ASCB</div>
                <div style={{ backgroundColor: '#fff4d1', color: '#c99327', fontSize: '11px', fontWeight: 800, padding: '6px 10px', borderRadius: '6px' }}>IASME</div>
                <div style={{ backgroundColor: '#e5f6ee', color: '#2f9e6e', fontSize: '11px', fontWeight: 800, padding: '6px 10px', borderRadius: '6px' }}>IRCA</div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Quote Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '36px 32px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid #e2e8f0',
            color: '#0f172a'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#2c2a75', lineHeight: 1.25, marginBottom: '6px' }}>
                Request Your Free Certification Quote
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Complete our simple form for an instant proposal from our UK lead audit team.
              </p>
            </div>

            <ZohoBiginForm defaultStandard="ISO 9001:2015" />
          </div>

        </div>

      </div>
    </section>
  );
};
