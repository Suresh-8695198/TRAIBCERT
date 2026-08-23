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
  ArrowRight
} from 'lucide-react';

export const OurServicesSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: '64px', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Heading + Main Description + Yellow View More Button */}
          <div style={{ paddingRight: '12px' }}>
            <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#1e293b', marginBottom: '24px', letterSpacing: '-0.5px' }}>
              Our <span style={{ color: '#1e293b' }}>Services</span>
            </h2>
            
            <p style={{ fontSize: '15.5px', color: '#64748b', lineHeight: 1.7, marginBottom: '32px', fontWeight: 500 }}>
              We at <strong>Traibcert</strong>, are an Independent, Impartial Certification Body for various ISO standards taking pride in supporting your compliance needs for certification- Audits, Training, inspection&amp; Regulatory Compliance. We are most sort after by all customers for the well qualified audit team delivering most consistentreport in a reliable manner.
            </p>

            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9b933',
                color: '#1a1854',
                padding: '13px 32px',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(249, 185, 51, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.backgroundColor = '#e0a520';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
              }}
            >
              <span>View More</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Right Column: 2-Column Grid of 6 Services */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px 24px'
            }}
          >
            {/* 1. Certification */}
            <div style={{ padding: '16px 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ color: '#f9b933', flexShrink: 0 }}>
                  <Award size={36} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b', margin: 0 }}>
                  Certification
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                At TRAIBCERT, we offer certification services to our clients applicable to any type of manufacturing...
              </p>
              <Link
                href="/services/certification"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>VIEW MORE</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* 2. Training */}
            <div style={{ padding: '16px 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ color: '#f9b933', flexShrink: 0 }}>
                  <GraduationCap size={36} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b', margin: 0 }}>
                  Training
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                At TRAIBCERT, we have developed a suite of ISO training courses, total package of the approach, highly ‘ interactive with real world examples...
              </p>
              <Link
                href="/services/training"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>VIEW MORE</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* 3. Inspection */}
            <div style={{ padding: '16px 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ color: '#f9b933', flexShrink: 0 }}>
                  <FileCheck size={36} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b', margin: 0 }}>
                  Inspection
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                The present scenario of business environment, out-sourcing majority of jobs &amp;services to the appropriate agencies....
              </p>
              <Link
                href="/services/inspection"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>VIEW MORE</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* 4. E-Learning (Highlighted Card with Light Blue BG) */}
            <div
              style={{
                backgroundColor: '#cbe5fb',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(203, 229, 251, 0.5)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ color: '#f9b933', flexShrink: 0 }}>
                  <Monitor size={36} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1854', margin: 0 }}>
                  E-Learning
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                Learning conducted via electronic media, typically on the Internet. successful e-learning depends on the self-motivation of individuals to study effectively.
              </p>
              <Link
                href="/services/e-learning"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>VIEW MORE</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* 5. 6 step essential Guide for certification (Highlighted Card with Light Blue BG) */}
            <div
              style={{
                backgroundColor: '#cbe5fb',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(203, 229, 251, 0.5)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ color: '#f9b933', flexShrink: 0 }}>
                  <PackageCheck size={36} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#1a1854', margin: 0, lineHeight: 1.3 }}>
                  6 step essential Guide for certification
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                Start your Certification journey with our expert guidance- Your step by step document for an seamless and effortless certification process now
              </p>
              <a
                href="/resources/guide.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>DOWNLOAD NOW</span>
                <ArrowRight size={13} />
              </a>
            </div>

            {/* 6. Risk Management */}
            <div style={{ padding: '16px 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ color: '#f9b933', flexShrink: 0 }}>
                  <ShieldAlert size={36} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b', margin: 0 }}>
                  Risk Management
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                Risk management is an increasingly important business driver and stakeholders have become much more concerned about risk...
              </p>
              <Link
                href="/services/risk-management"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>VIEW MORE</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
