'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

const solutionsList = [
  {
    title: 'Certification & Compliance Audit',
    description: 'Talent and compliance solutions that enhance operational integrity, aligning workforce capabilities to drive business and sales success.'
  },
  {
    title: 'ISO Lead & Internal Auditor Training',
    description: 'Scalable training and reinforcement programs that build lasting compliance and leadership skills across your organization.'
  },
  {
    title: 'Third-Party Inspection & Verification',
    description: 'Targeted inspection strategies that strengthen client relationships, boost quality retention, and uncover growth opportunities.'
  }
];

export const SplitSolutionsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Side: Solutions List with Chevron Arrows (Matching Frame 3) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {solutionsList.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ color: '#00c9a7', flexShrink: 0, marginTop: '2px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1854', marginBottom: '8px', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Photo with Cyan Left Strip (Matching Frame 3) */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '420px', display: 'flex' }}>
            <div style={{ width: '8px', backgroundColor: '#00c9a7', flexShrink: 0 }} />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="TRAIBCERT Audit Team & Solutions"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
