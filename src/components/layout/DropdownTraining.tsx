import React from 'react';
import Link from 'next/link';
import { trainingCoursesData } from '@/config/training';

export const DropdownTraining: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '520px',
        maxWidth: 'calc(100vw - 48px)',
        backgroundColor: '#ffffff',
        boxShadow: '0 12px 40px rgba(20, 20, 40, 0.14)',
        borderRadius: '0 0 8px 8px',
        border: '1px solid #ededf0',
        borderTop: '2px solid #f9b933',
        padding: '14px 8px',
        zIndex: 1000
      }}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <ul style={{ listStyle: 'none', maxHeight: '520px', overflowY: 'auto', margin: 0, padding: 0 }}>
        <li>
          <Link
            href="/training"
            onClick={onClose}
            style={{
              display: 'block',
              padding: '10px 18px',
              fontSize: '13.5px',
              fontWeight: 700,
              color: '#2c2a75',
              backgroundColor: '#f8f8fa',
              borderBottom: '1px solid #ededf0',
              borderRadius: '4px 4px 0 0',
              marginBottom: '4px',
              textDecoration: 'none'
            }}
          >
            All Training Programmes →
          </Link>
        </li>
        {trainingCoursesData.filter(c => c.slug !== 'training-overview').map(course => (
          <li key={course.slug}>
            <Link
              href={`/training/${course.slug}`}
              onClick={onClose}
              style={{
                display: 'block',
                padding: '10px 18px',
                fontSize: '13.5px',
                color: '#4a4a5a',
                fontWeight: 500,
                lineHeight: 1.3,
                borderRadius: '4px',
                textDecoration: 'none'
              }}
            >
              <div>
                <span style={{ fontWeight: 600, color: '#2c2a75' }}>{course.code} — {course.name.replace(' Training', '')}</span>
                <span style={{ display: 'block', fontSize: '11px', color: '#8a8a9a', fontWeight: 400, marginTop: '2px' }}>
                  {course.levels.join(' · ')}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

