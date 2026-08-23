'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProcessTab {
  id: string;
  label: string;
  title: string;
  desc: string;
}

const tabs: ProcessTab[] = [
  {
    id: 'get-started',
    label: 'Get Started',
    title: 'Get Started with TRAIBCERT Training & Guidance',
    desc: 'Our training services helps organisation teams to understand the standard requirements better during implementation, We will also help you understand what implementation of a quality management system is all about – Contact Us to know more on our training modules'
  },
  {
    id: 'implementation',
    label: 'Implementation',
    title: 'Expert Implementation & GAP Analysis Audits',
    desc: 'With our help Expert guidance you can select a tailored professional management consultant in your industry vertex. We make GAP analysis audits and evaluate your processes and determine the most effective way to enhance the management system. Our assistance enables you to get the most value from your implementation.'
  },
  {
    id: 'certification',
    label: 'Certification',
    title: 'Independent Accredited Certification Services',
    desc: 'Our core activity of certification service is offered for various standards. Kindly Fill the enquiry form to know more in our proposal and gain the certification.'
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    title: 'Surveillance Audits & Continuous System Improvement',
    desc: 'Surveillance audits and periodic system reviews ensure ongoing compliance and continuous improvement of your ISO management system across standard revisions.'
  }
];

export const CertificationProcessTimeline: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('implementation');
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[1];

  return (
    <section style={{ backgroundColor: '#134767', color: '#ffffff', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', minHeight: '520px' }}>
        
        {/* Left Column: Process Information & Interactive Tabs */}
        <div style={{ padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#ffffff', marginBottom: '8px', lineHeight: 1.15 }}>
            Our Certification Process<br />and Time Line
          </h2>

          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.88)', marginBottom: '32px', fontWeight: 500 }}>
            Our certification &amp; training services are offer for various ISO STANDARDS.
          </p>

          {/* Interactive Process Tabs Pill Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', paddingBottom: '16px' }}>
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  style={{
                    backgroundColor: isActive ? '#00b4d8' : 'transparent',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: isActive ? '6px' : '0px',
                    padding: '8px 18px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #00b4d8'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div style={{ marginBottom: '32px', minHeight: '110px' }}>
            <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.65, margin: 0 }}>
              {activeTab.desc}
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9b933',
                color: '#1a1854',
                padding: '12px 28px',
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
        </div>

        {/* Right Column: Hero Image (World Map Meeting Photo) */}
        <div
          style={{
            backgroundImage: "url('/assets/images/Home/process_meeting.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '360px'
          }}
        />

      </div>
    </section>
  );
};
