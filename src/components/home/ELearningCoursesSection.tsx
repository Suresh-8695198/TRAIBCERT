'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, User, ShoppingCart, Check, ArrowRight } from 'lucide-react';

interface Course {
  id: string;
  category: string;
  title: string;
  duration: string;
  originalPrice: string;
  salePrice: string;
  description: string;
  rating: number;
  enrolled: string;
  image: string;
  isBestseller?: boolean;
}

const coursesData: Course[] = [
  {
    id: 'iso-9001-foundation',
    category: 'ISO 9001',
    title: 'ISO 9001:2015 Foundation Training',
    duration: '2 Hours',
    originalPrice: '£89.00',
    salePrice: '£40.00',
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.6,
    enrolled: '8,434',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: true
  },
  {
    id: 'iso-9001-awareness',
    category: 'ISO 9001',
    title: 'ISO 9001:2015 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£229.00',
    salePrice: '£179.00',
    description: 'Awareness online course is a comprehensive package that delves into every nook and corner you deserve to know about ISO 9001',
    rating: 4.7,
    enrolled: '8,980',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: true
  },
  {
    id: 'iso-9001-internal-auditor',
    category: 'ISO 9001',
    title: 'ISO 9001:2015 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£269.00',
    salePrice: '£189.00',
    description: 'Provide the knowledge and skills required to perform an internal audit of part of a quality management system',
    rating: 4.8,
    enrolled: '8,566',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-14001-awareness',
    category: 'ISO 14001',
    title: 'ISO 14001:2015 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£195.00',
    description: 'Awareness Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.6,
    enrolled: '6,899',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-14001-internal-auditor',
    category: 'ISO 14001',
    title: 'ISO 14001:2015 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£529.00',
    salePrice: '£329.00',
    description: 'The course is designed to suit all who are interested to play a significant role in the Environmental management system',
    rating: 4.5,
    enrolled: '6,485',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-45001-foundation',
    category: 'ISO 45001',
    title: 'ISO 45001:2018 Foundation Training',
    duration: '2 Hours',
    originalPrice: '£99.00',
    salePrice: '£49.00',
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.6,
    enrolled: '7,213',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: true
  },
  {
    id: 'iso-45001-awareness',
    category: 'ISO 45001',
    title: 'ISO 45001:2018 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£195.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.8,
    enrolled: '7,759',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: true
  },
  {
    id: 'iso-45001-internal-auditor',
    category: 'ISO 45001',
    title: 'ISO 45001:2018 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£529.00',
    salePrice: '£329.00',
    description: 'The structured training materials and course tutor’s aim’s at providing staff with needed basic knowledge / experience',
    rating: 4.9,
    enrolled: '8,305',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-27001-foundation',
    category: 'ISO 27001',
    title: 'ISO 27001:2022 Foundation Training',
    duration: '2 Hours',
    originalPrice: '£99.00',
    salePrice: '£49.00',
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.7,
    enrolled: '7,449',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: true
  },
  {
    id: 'iso-27001-awareness',
    category: 'ISO 27001',
    title: 'ISO 27001:2022 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£359.00',
    salePrice: '£229.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.7,
    enrolled: '7,126',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-27001-internal-auditor',
    category: 'ISO 27001',
    title: 'ISO 27001:2022 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£529.00',
    salePrice: '£329.00',
    description: 'The course is designed to suit all who are interested to play a significant role in the Information secuirty management system',
    rating: 4.9,
    enrolled: '7,672',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-31000-awareness',
    category: 'ISO 31000',
    title: 'ISO 31000:2018 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£399.00',
    salePrice: '£249.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.6,
    enrolled: '4,275',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-31000-internal-auditor',
    category: 'ISO 31000',
    title: 'ISO 31000:2018 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£599.00',
    salePrice: '£449.00',
    description: 'The course is designed to suit all who are interested to play a significant role in the Risk management system',
    rating: 4.3,
    enrolled: '4,598',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-22301-awareness',
    category: 'ISO 22301',
    title: 'ISO 22301:2019 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£399.00',
    salePrice: '£249.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.7,
    enrolled: '5,116',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-22301-internal-auditor',
    category: 'ISO 22301',
    title: 'ISO 22301:2019 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£599.00',
    salePrice: '£449.00',
    description: 'The course is designed to suit all who are interested to play a significant role in the Business continuity management system',
    rating: 4.4,
    enrolled: '5,439',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-22000-foundation',
    category: 'ISO 22000',
    title: 'ISO 22000:2018 Foundation Training',
    duration: '2 Hours',
    originalPrice: '£99.00',
    salePrice: '£49.00',
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.8,
    enrolled: '4,793',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-22000-awareness',
    category: 'ISO 22000',
    title: 'ISO 22000:2018 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£195.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.8,
    enrolled: '5,339',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-22000-internal-auditor',
    category: 'ISO 22000',
    title: 'ISO 22000:2018 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£529.00',
    salePrice: '£329.00',
    description: 'The course is designed to suit all who are interested to play a significant role in the Food safety management system',
    rating: 4.7,
    enrolled: '5,885',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-50001-awareness',
    category: 'ISO 50001',
    title: 'ISO 50001:2018 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£199.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.9,
    enrolled: '6,431',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-50001-internal-auditor',
    category: 'ISO 50001',
    title: 'ISO 50001:2018 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£529.00',
    salePrice: '£329.00',
    description: 'The course is designed to suit all who are interested to play a significant role in the Energy management system',
    rating: 4.7,
    enrolled: '6,108',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-17025-foundation',
    category: 'ISO 17025',
    title: 'ISO 17025:2017 Foundation Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£195.00',
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.7,
    enrolled: '5,785',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-17043-foundation',
    category: 'ISO 17043',
    title: 'ISO 17043:2010 Foundation Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£195.00',
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.6,
    enrolled: '6,008',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-17043-awareness',
    category: 'ISO 17043',
    title: 'ISO 17043:2010 Awareness Training',
    duration: '16 Hours',
    originalPrice: '£529.00',
    salePrice: '£329.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.6,
    enrolled: '5,685',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-13528-foundation',
    category: 'ISO 13528',
    title: 'ISO 13528:2015 Foundation Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£199.00',
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge',
    rating: 4.7,
    enrolled: '6,231',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-13528-awareness',
    category: 'ISO 13528',
    title: 'ISO 13528:2015 Awareness Training',
    duration: '16 Hours',
    originalPrice: '£529.00',
    salePrice: '£329.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.7,
    enrolled: '5,908',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-20000-awareness',
    category: 'ISO 20000',
    title: 'ISO 20000:2018 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£199.00',
    description: 'The anticipated objective of both the tutors and pedagogues is to pre-dominantly provide the authorized staff with the essential basic knowledge / experience',
    rating: 4.8,
    enrolled: '6,131',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  },
  {
    id: 'iso-20000-internal-auditor',
    category: 'ISO 20000',
    title: 'ISO 20000:2018 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£329.00',
    salePrice: '£229.00',
    description: 'The course is designed to suit all who are interested to play a significant role in the IT service management system',
    rating: 4.8,
    enrolled: '5,585',
    image: '/assets/images/Home/process_meeting.jpg',
    isBestseller: false
  }
];

const categories = ['All Courses', 'ISO 9001', 'ISO 45001', 'ISO 27001', 'ISO 14001', 'ISO 22000'];

export const ELearningCoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCourses = selectedCategory === 'All Courses'
    ? coursesData
    : coursesData.filter(c => c.category === selectedCategory);

  const displayedCourses = filteredCourses.slice(0, visibleCount);

  return (
    <section id="e-learning" style={{ backgroundColor: '#f8fafc', padding: '72px 0 88px', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#1a1854', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            E-LEARNING
          </h2>
          <p style={{ fontSize: '15px', color: '#64748b', margin: 0, fontWeight: 500 }}>
            Accredited online ISO auditor foundation, awareness &amp; internal auditor training courses with instant certification.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {categories.map((cat) => {
            const isActive = cat === selectedCategory;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(6);
                }}
                style={{
                  backgroundColor: isActive ? '#1a1854' : '#ffffff',
                  color: isActive ? '#ffffff' : '#334155',
                  border: '1px solid #cbd5e1',
                  borderRadius: '20px',
                  padding: '8px 20px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses 2-Column / 3-Column Responsive Grid (Matching Screenshot Layout) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.25s ease'
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
            >
              <div>
                {/* Course Image Container with Yellow BESTSELLER Ribbon */}
                <div style={{ position: 'relative', height: '190px', width: '100%', backgroundColor: '#090e2e', overflow: 'hidden' }}>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

                  {course.isBestseller && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        backgroundColor: '#f9b933',
                        color: '#1a1854',
                        fontWeight: 800,
                        fontSize: '11px',
                        padding: '4px 12px',
                        borderRadius: '2px',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                      }}
                    >
                      BESTSELLER
                    </div>
                  )}
                </div>

                {/* Duration & Price Bar (Matching Screenshot Format) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                >
                  <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#0284c7' }}>
                    Course Duration: {course.duration}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'line-through' }}>
                      {course.originalPrice}
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#0284c7' }}>
                      {course.salePrice}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div style={{ padding: '20px 20px 16px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1a1854', marginBottom: '12px', lineHeight: 1.35 }}>
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, margin: 0, minHeight: '60px' }}>
                    {course.description}
                  </p>

                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Link
                      href={`/e-learning/${course.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        backgroundColor: '#1a1854',
                        color: '#ffffff',
                        padding: '9px 28px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 800,
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
                      <span>Buy Now</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Rating & Enrolled Footer Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  backgroundColor: '#fafafa',
                  borderTop: '1px solid #f1f5f9',
                  fontSize: '12.5px',
                  color: '#475569'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontWeight: 700, marginRight: '2px' }}>Rating:</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f9b933" color="#f9b933" />
                  ))}
                  <span style={{ fontWeight: 700, marginLeft: '4px', color: '#1a1854' }}>{course.rating}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <User size={14} style={{ color: '#0284c7' }} />
                  <span style={{ fontWeight: 600 }}>({course.enrolled})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button if more courses available */}
        {visibleCount < filteredCourses.length && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              style={{
                backgroundColor: '#1a1854',
                color: '#ffffff',
                border: 'none',
                borderRadius: '24px',
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
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
              <span>Load More Courses ({filteredCourses.length - visibleCount} Remaining)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
