import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, Star, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '72px 0 96px', borderRadius: '0 0 48px 48px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Background Lighting Gradient & Accent Glows */}
      <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,185,51,0.12) 0%, rgba(44,42,117,0) 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(44,42,117,0) 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Hero Content */}
          <div>
            <div className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px' }}>
              <ShieldCheck size={16} />
              <span style={{ letterSpacing: '0.5px' }}>UKAS & ASCB ACCREDITED CERTIFICATION BODY</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(34px, 4.2vw, 52px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.5px', marginTop: '20px', marginBottom: '20px', color: '#ffffff' }}>
              Accelerate Trust & Compliance with <span style={{ color: '#f9b933', position: 'relative', display: 'inline-block' }}>
                Global ISO Certification
              </span>
            </h1>
            
            <p style={{ fontSize: '16.5px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '600px' }}>
              TRAIBCERT Limited provides independent UK certification, Cyber Essentials assessments, IRCA training, and pre-shipment inspection services across the UK, UAE, and internationally.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
              <Link href="/contact/enquiry" className="btn btn-gold" style={{ padding: '14px 28px', fontSize: '15px', borderRadius: '10px' }}>
                <span>Get a Fast ISO Quote</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/certification/cyber-essentials" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff', padding: '14px 24px', fontSize: '15px', borderRadius: '10px' }}>
                <span>Cyber Essentials Scheme</span>
              </Link>
            </div>

            {/* Floating 4-Feature Horizontal Pill Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '14px',
              padding: '14px 18px',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#ffffff', fontWeight: 700 }}>
                <Zap size={16} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span>Fast Lead Quotes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#ffffff', fontWeight: 700 }}>
                <Star size={16} style={{ color: '#f9b933', flexShrink: 0, fill: '#f9b933' }} />
                <span>99.4% Pass Rate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#ffffff', fontWeight: 700 }}>
                <CheckCircle2 size={16} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span>£0 Transfer Fees</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#ffffff', fontWeight: 700 }}>
                <CheckCircle2 size={16} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span>45+ Countries</span>
              </div>
            </div>
          </div>

          {/* Right Hero Cards Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Card 1: ISO 9001 September 2026 Revision Campaign Tile */}
            <div style={{
              backgroundColor: '#151347',
              border: '1px solid rgba(249,185,51,0.3)',
              borderRadius: '0 40px 0 40px',
              padding: '32px',
              boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Corner Ribbon */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '100%', backgroundColor: '#f9b933' }} />

              <span style={{ display: 'inline-block', backgroundColor: '#f9b933', color: '#2c2a75', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.5px' }}>
                SEPTEMBER 2026 REVISION
              </span>

              <h3 style={{ fontSize: '21px', fontWeight: 800, color: '#ffffff', marginBottom: '10px', lineHeight: 1.25 }}>
                ISO 9001:2026 Transition Gap Assessment
              </h3>

              <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, marginBottom: '22px' }}>
                The revised ISO 9001 standard introduces updated risk guidelines and climate-action requirements. Plan your transition early with our UK lead auditors.
              </p>

              <Link href="/certification/iso-9001" className="btn btn-gold" style={{ width: '100%', padding: '12px', fontSize: '14px', borderRadius: '8px' }}>
                <span>Book ISO 9001 Gap Audit</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2: Cyber Essentials Badge Card */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#f9b933', color: '#2c2a75', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', margin: 0 }}>IASME Cyber Essentials Plus</h4>
                  <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', margin: '2px 0 0' }}>UK Government Tender Approved</p>
                </div>
              </div>
              <Link href="/certification/cyber-essentials" style={{ color: '#f9b933', fontSize: '13px', fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Verify →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
