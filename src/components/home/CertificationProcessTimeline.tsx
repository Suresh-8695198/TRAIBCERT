'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
    <section
      id="certification-process"
      style={{
        backgroundImage: "url('/assets/images/Home/certification_section_hme.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        color: '#ffffff',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '76px 0 84px'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '640px' }}>
          
          {/* Section Heading */}
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Our Certification Process<br />and Time Line
          </h2>

          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.88)', marginBottom: '36px', fontWeight: 500 }}>
            Our certification &amp; training services are offer for various ISO STANDARDS.
          </p>

          {/* Interactive Process Tabs Pill Bar */}
          <div className="process-tabs-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', paddingBottom: '18px' }}>
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  style={{
                    backgroundColor: isActive ? '#00aeef' : 'transparent',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '9px 22px',
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
                        bottom: '-9px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #00aeef'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tab Description Text */}
          <div style={{ marginBottom: '36px', minHeight: '90px' }}>
            <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.68, margin: 0, fontWeight: 400 }}>
              {activeTab.desc}
            </p>
          </div>

          {/* Yellow View More Button */}
          <div>
            <Link
              href="/contact"
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
      </div>
    </section>
  );
};
