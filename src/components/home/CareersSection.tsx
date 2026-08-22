import React from 'react';
import Link from 'next/link';
import { UserCheck, Mail, ArrowRight, Briefcase, Award } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const CareersSection: React.FC = () => {
  return (
    <section id="careers" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid var(--gray-200)' }}>
      <div className="container">
        
        <div style={{
          backgroundColor: '#1a1854',
          borderRadius: '24px',
          padding: '56px 48px',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(26, 24, 84, 0.25)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Subtle Background Glow Decorative Elements */}
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,185,51,0.15) 0%, rgba(26,24,84,0) 70%)', pointerEvents: 'none' }} />

          {/* Left Column: Callout Content */}
          <div style={{ zIndex: 1 }}>
            <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '16px' }}>
              CAREERS & AUDITOR NETWORK
            </span>

            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
              Join the TRAIBCERT <span style={{ color: '#f9b933' }}>Lead Auditor Network</span>
            </h2>

            <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '28px' }}>
              Are you a CQI IRCA qualified ISO lead auditor or experienced cyber security assessor? TRAIBCERT is continuously expanding its audit network across the UK, Europe, and Middle East.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#ffffff', fontWeight: 600 }}>
                <Award size={18} style={{ color: '#f9b933' }} />
                <span>IRCA Lead Auditor Roles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#ffffff', fontWeight: 600 }}>
                <Briefcase size={18} style={{ color: '#f9b933' }} />
                <span>Sub-contract & Full-time</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#ffffff', fontWeight: 600 }}>
                <UserCheck size={18} style={{ color: '#f9b933' }} />
                <span>UK & UAE Audit Hubs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#ffffff', fontWeight: 600 }}>
                <Mail size={18} style={{ color: '#f9b933' }} />
                <span>Competitive Audit Rates</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={`mailto:${siteConfig.contact.infoEmail}?subject=Auditor%20Application%20-%20TRAIBCERT`} className="btn btn-gold" style={{ padding: '12px 24px', fontSize: '14px' }}>
                <Mail size={16} />
                <span>Submit Auditor CV</span>
              </a>
              <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff', padding: '12px 20px', fontSize: '14px' }}>
                <span>Contact Recruitment</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: Information Card */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '16px',
            padding: '32px',
            backdropFilter: 'blur(8px)',
            zIndex: 1
          }}>
            <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
              Auditor Qualifications We Seek
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'rgba(255,255,255,0.85)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#f9b933', fontWeight: 800 }}>•</span>
                <span>ISO 9001 / 14001 / 45001 IRCA Registered Lead Auditor</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#f9b933', fontWeight: 800 }}>•</span>
                <span>ISO 27001 & Cyber Essentials Assessor Certification</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#f9b933', fontWeight: 800 }}>•</span>
                <span>Pre-Shipment & Cargo Inspection Technical Specialists</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#f9b933', fontWeight: 800 }}>•</span>
                <span>Minimum 5 years industrial auditing experience</span>
              </li>
            </ul>

            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: '12.5px', color: 'rgba(255,255,255,0.7)' }}>
              Send your CV directly to <a href={`mailto:${siteConfig.contact.infoEmail}`} style={{ color: '#f9b933', fontWeight: 700 }}>{siteConfig.contact.infoEmail}</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
