'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-9001-training'
  },
  {
    id: 'iso-10002',
    title: 'ISO 10002:2018 Customer satisfaction Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-10002-training'
  },
  {
    id: 'iso-14001',
    title: 'ISO 14001:2015 Environmental management systems Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-14001-training'
  },
  {
    id: 'iso-45001',
    title: 'ISO 45001:2018 Occupational Health & safety Assessment System Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-45001-training'
  },
  {
    id: 'iso-22000',
    title: 'ISO 22000:2018 Food safety management systems Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-22000-training'
  },
  {
    id: 'iso-20000',
    title: 'ISO 20000-1:2018 IT Service Management System Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-20000-training'
  },
  {
    id: 'iso-22301',
    title: 'ISO 22301:2019 Business Continuity Management Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-22301-training'
  },
  {
    id: 'iso-27001',
    title: 'ISO 27001:2022 Information Security Management System Training',
    subTag: 'In House Training',
    image: '/assets/images/Home/process_meeting.jpg',
    slug: 'iso-27001-training'
  }
];

export const TrainingCoursesSection: React.FC = () => {
  return (
    <section id="training" style={{ backgroundColor: '#ffffff', padding: '72px 0 88px', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header (Matching Screenshot) */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#1a1854', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            TRAINING
          </h2>
          <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
            At TRAIBCERT, we have developed a suite of ISO training courses, total package of the approach, highly interactive with real world examples and case studies,
          </p>
        </div>

        {/* 3-Column Training Cards Grid (Matching Screenshot) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {trainingCourses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease'
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                {/* Course Image Thumbnail Header */}
                <div style={{ height: '210px', width: '100%', backgroundColor: '#090e2e', overflow: 'hidden' }}>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Course Title & In House Training Subtag */}
                <div style={{ padding: '24px 20px 20px' }}>
                  <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: '#1a1854', marginBottom: '10px', lineHeight: 1.4 }}>
                    {course.title}
                  </h3>

                  <div style={{ fontSize: '13.5px', color: '#94a3b8', fontWeight: 600, marginBottom: '24px' }}>
                    {course.subTag}
                  </div>

                  <Link
                    href={`/training/${course.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#1a1854',
                      color: '#ffffff',
                      padding: '10px 24px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 800,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
                      (e.currentTarget as HTMLElement).style.color = '#1a1854';
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1854';
                      (e.currentTarget as HTMLElement).style.color = '#ffffff';
                    }}
                  >
                    <span>VIEW MORE</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
