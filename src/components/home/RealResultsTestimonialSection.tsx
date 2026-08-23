'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export const RealResultsTestimonialSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#151845', color: '#ffffff', padding: '88px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Headline (Matching Frames 4 & 5) */}
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '48px', lineHeight: 1.2 }}>
          Real Results. Real ROI
        </h2>

        {/* 2-Column Testimonial & Video Block */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', marginBottom: '40px' }}>
          
          {/* Left: White Testimonial Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            color: '#1a1854',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '340px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
          }}>
            <div>
              <blockquote style={{ fontSize: 'clamp(18px, 2.5vw, 23px)', fontWeight: 700, color: '#1a1854', lineHeight: 1.4, margin: '0 0 24px' }}>
                “TRAIBCERT has a very logical, structured approach to ISO audits. We achieved 100% compliance and saw 20 percent growth in operational efficiency year-after-year.”
              </blockquote>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link
                href="/resources/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#0047e0',
                  fontSize: '15px',
                  fontWeight: 800,
                  textDecoration: 'none'
                }}
              >
                <span>View Full Testimonial</span>
                <div style={{ width: '28px', height: '28px', backgroundColor: '#0047e0', color: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Video Thumbnail Card with Overlay */}
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            height: '340px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
            backgroundColor: '#0a0d2a'
          }}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Client Video Testimonial"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
            />

            {/* Central Play Button */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#0047e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              cursor: 'pointer'
            }}>
              <Play size={26} style={{ marginLeft: '4px', fill: '#0047e0' }} />
            </div>

            {/* Author Badge Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600
            }}>
              — Roy Cook, Managing Director
            </div>
          </div>

        </div>

        {/* Bottom Slider Control Bar (Matching Frame 5) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <ChevronLeft size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '40px', height: '3px', backgroundColor: '#ffffff', borderRadius: '2px' }} />
            <span style={{ width: '6px', height: '6px', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '50%' }} />
            <span style={{ width: '6px', height: '6px', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '50%' }} />
          </div>

          <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};
