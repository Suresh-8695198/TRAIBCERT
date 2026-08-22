'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Video, FileText, Calendar, Mic, BookOpen, Layers } from 'lucide-react';

const insightCards = [
  {
    category: 'WHITE PAPERS',
    title: 'ISO 9001:2026 Transition Action Guide',
    linkText: 'Get the Guide',
    href: '/resources/downloads',
    imgUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'AUDITOR ADVISOR',
    title: 'How to Pass Stage 1 & 2 ISO Audits First Time',
    linkText: 'Read Full Article',
    href: '/resources/blog',
    imgUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'EXECUTIVE WEBINARS',
    title: 'ISO 27001:2022 Annex A Controls Masterclass',
    linkText: 'Watch Webinar',
    href: '/resources/knowledge-base',
    imgUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
  }
];

const filterTabs = [
  { label: 'All Insights', icon: Layers },
  { label: 'Videos', icon: Video },
  { label: 'Articles', icon: FileText },
  { label: 'Events', icon: Calendar },
  { label: 'Podcasts', icon: Mic },
  { label: 'White Papers', icon: BookOpen }
];

export const NewsAndInsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Insights');

  return (
    <section id="insights" style={{ backgroundColor: '#1a1854', color: '#ffffff', padding: '88px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Top Header Row (Matching Video Frame 00:14) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
              EXPERT KNOWLEDGE HUB
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              News & Industry Insights
            </h2>
          </div>

          <Link href="/resources/blog" style={{ color: '#f9b933', fontSize: '15px', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>All News and Insights</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* 3 Resource Cards Grid (Matching Video Frame 00:14-00:18) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '56px' }}>
          {insightCards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                color: '#2c2a75',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
                transition: 'transform 0.25s ease'
              }}
            >
              {/* Top Image Preview */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(44, 42, 117, 0.9)', backdropFilter: 'blur(4px)', color: '#f9b933', fontSize: '10px', fontWeight: 800, padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>
                  {card.category}
                </div>
              </div>

              {/* Content Area */}
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2c2a75', lineHeight: 1.35, marginBottom: '20px' }}>
                  {card.title}
                </h3>

                <Link
                  href={card.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#2c2a75',
                    fontSize: '14px',
                    fontWeight: 800,
                    textDecoration: 'none'
                  }}
                >
                  <span>{card.linkText}</span>
                  <ArrowUpRight size={16} style={{ color: '#c99327' }} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 6-Filter Interactive Tab Bar (Matching Video Frame 00:15-00:22) */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '14px',
          padding: '8px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '8px'
        }}>
          {filterTabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                style={{
                  backgroundColor: isActive ? '#f9b933' : 'transparent',
                  color: isActive ? '#2c2a75' : '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  fontWeight: 800,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
