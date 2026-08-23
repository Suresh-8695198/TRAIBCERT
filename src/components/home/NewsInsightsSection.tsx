'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, FileText, Video, Newspaper, Calendar, Mic, FileDown } from 'lucide-react';

const newsCards = [
  {
    tag: 'WHITE PAPERS',
    title: 'Why ISO Implementations Fail',
    ctaText: 'Get the Guide',
    href: '/resources/downloads'
  },
  {
    tag: 'ISO ADVISOR',
    title: 'How to Set Your Team Up for ISO 9001:2026 Revision',
    ctaText: 'Read Full Article',
    href: '/resources/blog'
  },
  {
    tag: 'WEBINARS',
    title: 'Navigating Cyber Essentials & ISO 27001 Compliance',
    ctaText: 'Watch the Webinar',
    href: '/resources/knowledge-base'
  }
];

const tabFilters = [
  { id: 'all', label: 'All Insights', icon: Newspaper },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'articles', label: 'Articles', icon: FileText },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'podcasts', label: 'Podcasts', icon: Mic },
  { id: 'whitepapers', label: 'White Papers', icon: FileDown }
];

export const NewsInsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('podcasts');

  return (
    <section style={{ backgroundColor: '#151845', color: '#ffffff', padding: '88px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        
        {/* Section Title (Matching Frame 6) */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
            News & Industry Insights
          </h2>
        </div>

        {/* 3 Light Cyan Cards Grid (Matching Frame 6) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '40px' }}>
          {newsCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#e0f2fe',
                borderRadius: '14px',
                padding: '32px 28px',
                color: '#1a1854',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px'
              }}
            >
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284c7', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px', display: 'block' }}>
                  {card.tag}
                </span>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1854', lineHeight: 1.3, marginBottom: '24px' }}>
                  {card.title}
                </h3>
              </div>

              <div>
                <Link
                  href={card.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#0047e0',
                    fontSize: '14.5px',
                    fontWeight: 800,
                    textDecoration: 'none'
                  }}
                >
                  <span>{card.ctaText}</span>
                  <div style={{ width: '26px', height: '26px', backgroundColor: '#0047e0', color: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowUpRight size={15} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Center All News & Insight Button (Matching Frame 6) */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <Link
            href="/resources/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 800,
              textDecoration: 'none'
            }}
          >
            <span>All News and Insight</span>
            <div style={{ width: '28px', height: '28px', backgroundColor: '#00c9a7', color: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

        {/* Bottom Segmented Filter Tab Bar (Matching Frame 7) */}
        <div style={{
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          backgroundColor: 'rgba(255,255,255,0.03)'
        }}>
          {tabFilters.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: isActive ? '#00c9a7' : 'transparent',
                  color: isActive ? '#1a1854' : '#ffffff',
                  border: 'none',
                  borderRight: '1px solid rgba(255,255,255,0.12)',
                  padding: '16px 14px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={18} style={{ color: isActive ? '#1a1854' : '#00c9a7' }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
