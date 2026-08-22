'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const accordionItems = [
  {
    id: 1,
    title: 'Connection with Modern ISO Standards & Tenders',
    content: 'Our accredited certification frameworks have been developed and refined to meet UK government procurement requirements, Cyber Essentials Plus mandates, and international commercial supplier criteria.'
  },
  {
    id: 2,
    title: 'Transparent Fixed Pricing & £0 Transfer Fees',
    content: 'No hidden auditor travel surcharges, unexpected management fees, or transfer penalties. Switch your existing ISO certificates to TRAIBCERT completely free without interrupting your remaining 3-year audit cycle.'
  },
  {
    id: 3,
    title: 'CQI IRCA Certified Lead Auditors',
    content: 'Audits are conducted by highly experienced UK and Middle East lead auditors who bring pragmatic, business-focused insights to every Stage 1 and Stage 2 assessment.'
  },
  {
    id: 4,
    title: 'Customized to Your Business Needs & Schedule',
    content: 'We tailor audit schedules, combined ISO management system assessments, and remote/on-site audit options around your operational timetable to minimize business disruption.'
  }
];

export const WhyChooseUsAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <section id="why-choose-us" style={{ backgroundColor: '#f8fafc', padding: '88px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            WHY TRAIBCERT IS THE PREFERRED CHOICE
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#2c2a75', lineHeight: 1.2, marginBottom: '16px' }}>
            Why Leading Organisations Partner with TRAIBCERT
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            Over 15 years of proven certification excellence, connecting 5,000+ certified clients across 45+ countries worldwide.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Column: 1-4 Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {accordionItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 8px 24px rgba(44, 42, 117, 0.08)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    style={{
                      width: '100%',
                      padding: '24px 28px',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      outline: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: isOpen ? '#c99327' : '#64748b' }}>
                        {item.id}
                      </span>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2c2a75', margin: 0 }}>
                        {item.title}
                      </h3>
                    </div>

                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: isOpen ? '#fff4d1' : '#f1f5f9', color: isOpen ? '#c99327' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 28px 24px 68px', fontSize: '14.5px', color: '#475569', lineHeight: 1.65 }}>
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Senior Auditor Photo Frame with Brand Indigo & Gold Accent Frame */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* TRAIBCERT Primary Indigo Backdrop Shape */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '85%',
              height: '90%',
              backgroundColor: '#2c2a75',
              borderRadius: '24px',
              zIndex: 1
            }} />

            {/* Honey Yellow Brand Accent Stripes */}
            <div style={{ position: 'absolute', top: '-10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 2 }}>
              <div style={{ width: '36px', height: '8px', backgroundColor: '#f9b933', borderRadius: '2px' }} />
              <div style={{ width: '24px', height: '8px', backgroundColor: '#f9b933', borderRadius: '2px' }} />
            </div>

            {/* High-Resolution Senior Auditor Photo */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
              alt="TRAIBCERT Senior Lead Auditor"
              style={{
                width: '82%',
                height: '460px',
                objectFit: 'cover',
                borderRadius: '20px',
                position: 'relative',
                zIndex: 3,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            />

          </div>

        </div>

      </div>
    </section>
  );
};
