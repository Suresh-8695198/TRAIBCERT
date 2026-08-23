'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface TrainingCourse {
  id: string;
  title: string;
  subTag: string;
  image: string;
  slug: string;
}

const trainingCourses: TrainingCourse[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001 Quality Management Certification Training',
    subTag: 'In House Training',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    slug: 'iso-9001-training'
  },
  {
    id: 'iso-10002',
    title: 'ISO 10002:2018 Customer satisfaction Training',
    subTag: 'In House Training',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    slug: 'iso-10002-training'
  },
  {
    id: 'iso-14001',
    title: 'ISO 14001:2015 Environmental management systems Training',
    subTag: 'In House Training',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    slug: 'iso-14001-training'
  },
  {
    id: 'iso-45001',
    title: 'ISO 45001:2018 Occupational Health & safety Assessment System Training',
    subTag: 'In House Training',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    slug: 'iso-45001-training'
  },
  {
    id: 'iso-22000',
    title: 'ISO 22000:2018 Food safety management systems Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/inspection.jpg',
    slug: 'iso-22000-training'
  },
  {
    id: 'iso-20000',
    title: 'ISO 20000-1:2018 IT Service Management System Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/inspection1.jpg',
    slug: 'iso-20000-training'
  },
  {
    id: 'iso-22301',
    title: 'ISO 22301:2019 Business Continuity Management Training',
    subTag: 'In House Training',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    slug: 'iso-22301-training'
  },
  {
    id: 'iso-27001',
    title: 'ISO 27001:2022 Information Security Management System Training',
    subTag: 'In House Training',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    slug: 'iso-27001-training'
  }
];

export const TrainingCoursesSection: React.FC = () => {
  return (
    <section id="training" style={{ backgroundColor: '#ffffff', padding: '72px 0 88px', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#1a1854', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            TRAINING
          </h2>
          <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
            At TRAIBCERT, we have developed a suite of ISO training courses, total package of the approach, highly interactive with real world examples and case studies.
          </p>
        </div>

        {/* 3-Column Training Cards Responsive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {trainingCourses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease'
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.12)';
                const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLElement;
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                
                {/* Course Image Header with Smooth Zoom Physics */}
                <div style={{ height: '210px', width: '100%', backgroundColor: '#0f172a', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                </div>

                {/* Course Details Content Body (Flex Grow to align View More button evenly across all cards) */}
                <div style={{ padding: '24px 22px 22px', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1a1854', marginBottom: '10px', lineHeight: 1.4 }}>
                    {course.title}
                  </h3>

                  <div style={{ fontSize: '13px', color: '#0284c7', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {course.subTag}
                  </div>

                  {/* Signature View More Button (Indigo #1a1854 + Yellow #f9b933 arrow badge with spring rotate) */}
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <Link
                      href={`/training/${course.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: '#1a1854',
                        color: '#ffffff',
                        padding: '8px 16px 8px 22px',
                        borderRadius: '8px',
                        fontSize: '13.5px',
                        fontWeight: 800,
                        textDecoration: 'none',
                        boxShadow: 'none',
                        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#252175';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                        const badge = (e.currentTarget as HTMLElement).querySelector('.arrow-badge') as HTMLElement;
                        if (badge) badge.style.transform = 'translate(3px, -3px) rotate(45deg) scale(1.15)';
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1854';
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
                          width: '26px',
                          height: '26px',
                          borderRadius: '6px',
                          backgroundColor: '#f9b933',
                          color: '#1a1854',
                          flexShrink: 0,
                          transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      >
                        <ArrowUpRight size={15} strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
