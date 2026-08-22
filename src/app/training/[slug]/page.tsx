import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GraduationCap, CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';
import { trainingCoursesData } from '@/config/training';
import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  return trainingCoursesData.map(course => ({ slug: course.slug }));
}

export default function TrainingDetailPage({ params }: { params: { slug: string } }) {
  const course = trainingCoursesData.find(c => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--topbar), var(--ink))', color: '#fff', padding: '64px 0' }}>
        <div className="container">
          <div style={{ fontSize: '13px', color: 'var(--gold)', marginBottom: '12px' }}>
            <Link href="/training">Training</Link> / <span>{course.code}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>{course.name}</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '700px', lineHeight: 1.6 }}>{course.summary}</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px' }}>
        <div>
          <div style={{ background: 'var(--white)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', marginBottom: '32px' }}>
            <h2 className="heading-md" style={{ marginBottom: '16px' }}>Selectable Course Modules</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {course.levels.map((lvl, i) => (
                <div key={i} style={{ border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--ink)' }}>{course.code} — {lvl} Level</h4>
                    <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginTop: '4px' }}>Certified by CQI IRCA / TRAIBCERT Academy</p>
                  </div>
                  <a href={siteConfig.academyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ fontSize: '12px', padding: '8px 14px' }}>
                    <span>Enroll on Academy</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', alignSelf: 'start' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Corporate In-House Training</h3>
          <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '20px' }}>
            Need dedicated training for a group of 5+ employees? We deliver customized in-house training at your facility or via dedicated online sessions.
          </p>
          <Link href="/contact/enquiry" className="btn btn-ink" style={{ width: '100%' }}>
            Request In-House Training Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
