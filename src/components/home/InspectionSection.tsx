'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const InspectionSection: React.FC = () => {
  return (
    <section id="inspection-services" style={{ backgroundColor: '#ffffff', padding: '88px 0', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Heading + Text + Yellow View More Button */}
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#1a1854', marginBottom: '20px', lineHeight: 1.25, letterSpacing: '-0.5px' }}>
              Inspection / Third party<br />inspection
            </h2>

            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '32px', fontWeight: 400 }}>
              The present scenario of business environment, out-sourcing majority of jobs &amp;services to the appropriate agencies is on the increase and out-sourcing of inspection / Third Party Inspection and \validation activities are no exception to that. Whether your project is a new build, major modification or conversion; maintaining safety, reliability and integrity in compliance with the applicable codes, standards and technical project requirements are of utmost importance.Inspection /Third Party Inspection s help minimize risk ensuring that both customer standards
            </p>

            <Link
              href="/services/inspection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9b933',
                color: '#1a1854',
                padding: '12px 30px',
                borderRadius: '30px',
                fontSize: '14.5px',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#e0a520';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
              }}
            >
              <span>View More</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Dual Overlapping/Offset Inspection Images (Matching Screenshot) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
            
            {/* Left Image: Inspector with Clipboard */}
            <div style={{ borderRadius: '24px 8px 24px 24px', overflow: 'hidden', height: '360px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
              <img
                src="/assets/images/Home/process_meeting.jpg"
                alt="Third Party Inspection Clipboard Audit"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Right Image: Quality Control Gloves Inspection (Shifted Down) */}
            <div style={{ borderRadius: '24px 24px 24px 8px', overflow: 'hidden', height: '360px', marginTop: '40px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
              <img
                src="/assets/images/Home/process_meeting.jpg"
                alt="Precision Technical Inspection"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
