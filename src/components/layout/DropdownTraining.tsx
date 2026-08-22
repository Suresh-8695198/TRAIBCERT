import React from 'react';
import Link from 'next/link';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { trainingCoursesData } from '@/config/training';

export const DropdownTraining: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '520px',
      maxHeight: '500px',
      backgroundColor: 'var(--white)',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: '0 0 var(--radius-md) var(--radius-md)',
      border: '1px solid var(--gray-100)',
      borderTop: '3px solid var(--ink)',
      padding: '20px',
      zIndex: 100,
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid var(--gray-100)' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <GraduationCap size={16} /> ISO Training Courses ({trainingCoursesData.length - 1})
        </h4>
        <a
          href="https://academy.traibcert.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '11.5px', color: 'var(--ink)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <span>E-Learning Academy</span>
          <ExternalLink size={12} />
        </a>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {trainingCoursesData.map(course => (
          <li key={course.slug}>
            <Link
              href={course.slug === 'training-overview' ? '/training' : `/training/${course.slug}`}
              onClick={onClose}
              style={{
                fontSize: '13px',
                color: 'var(--gray-900)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                borderRadius: 'var(--radius-sm)',
                transition: 'background 0.2s'
              }}
              className="training-item"
            >
              <div>
                <span>{course.code} — {course.name.replace(' Training', '')}</span>
                <div style={{ fontSize: '11px', color: 'var(--gray-500)', fontWeight: 400 }}>
                  {course.levels.join(' · ')}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
