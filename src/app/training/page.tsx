import React from 'react';
import Link from 'next/link';
import { GraduationCap, ExternalLink, ArrowRight } from 'lucide-react';
import { trainingCoursesData } from '@/config/training';
import { siteConfig } from '@/config/site';

export default function TrainingLandingPage() {
  return (
    <div style={{ backgroundColor: 'var(--gray-50)', padding: '60px 0 80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px' }}>
          <span className="eyebrow">CQI IRCA & TRAIBCERT Academy</span>
          <h1 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            ISO Training & Lead Auditor Courses
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '24px' }}>
            Build certified auditor competence across 14 international standards. Flexible live online and classroom delivery.
          </p>
          <a
            href={siteConfig.academyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ padding: '12px 24px' }}
          >
            <GraduationCap size={18} />
            <span>Go to E-Learning Academy (academy.traibcert.org.uk)</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {trainingCoursesData.filter(t => t.slug !== 'training-overview').map(course => (
            <div
              key={course.slug}
              style={{
                background: 'var(--white)',
                padding: '28px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--gray-200)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '13px', color: 'var(--ink)' }}>{course.code}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '8px 0' }}>{course.name}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-700)', lineHeight: 1.5, marginBottom: '16px' }}>{course.summary}</p>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '20px' }}>
                  <strong>Course Levels:</strong> {course.levels.join(' · ')}
                </div>
              </div>

              <Link href={`/training/${course.slug}`} className="btn btn-outline" style={{ width: '100%', fontSize: '13px' }}>
                <span>Course Info & Schedule</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
