'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, User, ShoppingCart, ArrowRight, ArrowLeft } from 'lucide-react';

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
    description: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills, improve intellectual minds to accumulate excessive knowledge.',
    rating: 4.8,
    enrolled: '8,434',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    isBestseller: true
  },
  {
    id: 'iso-9001-awareness',
    category: 'ISO 9001',
    title: 'ISO 9001:2015 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£229.00',
    salePrice: '£179.00',
    description: 'Awareness online course is a comprehensive package that delves into every nook and corner you deserve to know about ISO 9001 Quality Management.',
    rating: 4.7,
    enrolled: '8,980',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    isBestseller: true
  },
  {
    id: 'iso-9001-internal-auditor',
    category: 'ISO 9001',
    title: 'ISO 9001:2015 Internal Auditor Training',
    duration: '16 Hours',
    originalPrice: '£269.00',
    salePrice: '£189.00',
    description: 'Provide the knowledge and skills required to perform an internal audit of part of a quality management system in accordance with ISO 19011.',
    rating: 4.9,
    enrolled: '8,566',
    image: '/assets/images/Home/inspection.jpg',
    isBestseller: false
  },
  {
    id: 'iso-14001-awareness',
    category: 'ISO 14001',
    title: 'ISO 14001:2015 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£195.00',
    description: 'Awareness Courses are uniquely and specifically structured and designed to upgrade individual skills in environmental management.',
    rating: 4.6,
    enrolled: '6,899',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    isBestseller: false
  },
  {
    id: 'iso-45001-awareness',
    category: 'ISO 45001',
    title: 'ISO 45001:2018 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£329.00',
    salePrice: '£195.00',
    description: 'Provides authorized staff with essential knowledge and practical skills for occupational health and safety management.',
    rating: 4.8,
    enrolled: '7,759',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    isBestseller: true
  },
  {
    id: 'iso-27001-awareness',
    category: 'ISO 27001',
    title: 'ISO 27001:2022 Awareness Training',
    duration: '8 Hours',
    originalPrice: '£359.00',
    salePrice: '£229.00',
    description: 'Master the core controls and principles of information security management system implementation across modern IT infrastructure.',
    rating: 4.9,
    enrolled: '7,126',
    image: '/assets/images/Home/inspection1.jpg',
    isBestseller: true
  }
];

const categories = ['All Courses', 'ISO 9001', 'ISO 45001', 'ISO 27001', 'ISO 14001', 'ISO 22000'];

export const ELearningCoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCourses = selectedCategory === 'All Courses'
    ? coursesData
    : coursesData.filter(c => c.category === selectedCategory);

  // Auto Scroll Carousel Effect (every 4.5 seconds)
  useEffect(() => {
    if (filteredCourses.length <= 3) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (filteredCourses.length - 2));
    }, 4500);
    return () => clearInterval(timer);
  }, [filteredCourses.length]);

  const handleNext = () => {
    if (filteredCourses.length > 3) {
      setCurrentIndex(prev => (prev + 1) % (filteredCourses.length - 2));
    }
  };

  const handlePrev = () => {
    if (filteredCourses.length > 3) {
      setCurrentIndex(prev => (prev - 1 + (filteredCourses.length - 2)) % (filteredCourses.length - 2));
    }
  };

  return (
    <section id="e-learning" style={{ backgroundColor: '#ffffff', padding: '72px 0 88px', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
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
                  setCurrentIndex(0);
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

        {/* 3D Radial Cylinder Carousel Track Container */}
        <div style={{ position: 'relative' }}>
          
          {/* Navigation Arrows (Show only if more than 3 courses) */}
          {filteredCourses.length > 3 && (
            <>
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '-22px',
                  top: '44%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 16px rgba(26, 24, 84, 0.25)',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
                  (e.currentTarget as HTMLElement).style.color = '#1a1854';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1854';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '-22px',
                  top: '44%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#1a1854',
                  color: '#ffffff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 16px rgba(26, 24, 84, 0.25)',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
                  (e.currentTarget as HTMLElement).style.color = '#1a1854';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1854';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ArrowRight size={20} />
              </button>
            </>
          )}

          {/* 3D Rotatable Radial Carousel Track for Each and Every Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              padding: '24px 0'
            }}
          >
            {filteredCourses.slice(currentIndex, currentIndex + 3).map((course, idx) => {
              // Dynamic 3D Rotation angles for each and every card
              const isCenter = idx === 1;
              const isLeft = idx === 0;
              
              // Each card gets a distinct 3D rotation tilt angle
              const baseRotateY = isCenter ? 0 : isLeft ? 16 : -16;
              const baseScale = isCenter ? 1.05 : 0.94;
              const baseTranslateZ = isCenter ? 30 : -40;

              return (
                <div
                  key={course.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: isCenter ? '2px solid #1a1854' : '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    boxShadow: isCenter ? '0 8px 24px rgba(15, 23, 42, 0.08)' : '0 2px 8px rgba(15, 23, 42, 0.04)',
                    transform: `perspective(1200px) rotateY(${baseRotateY}deg) scale(${baseScale}) translateZ(${baseTranslateZ}px)`,
                    opacity: isCenter ? 1 : 0.9,
                    zIndex: isCenter ? 5 : 2,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    // Professional corporate hover physics
                    (e.currentTarget as HTMLElement).style.transform = `perspective(1200px) rotateY(${baseRotateY > 0 ? -6 : baseRotateY < 0 ? 6 : 0}deg) scale(${isCenter ? 1.08 : 1.02}) translateZ(40px) rotateX(4deg)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.12)';
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                    const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLElement;
                    if (img) img.style.transform = 'scale(1.1) rotate(1deg)';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = `perspective(1200px) rotateY(${baseRotateY}deg) scale(${baseScale}) translateZ(${baseTranslateZ}px)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = isCenter ? '0 8px 24px rgba(15, 23, 42, 0.08)' : '0 2px 8px rgba(15, 23, 42, 0.04)';
                    (e.currentTarget as HTMLElement).style.opacity = isCenter ? '1' : '0.9';
                    const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLElement;
                    if (img) img.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    
                    {/* Real Course Photo Image */}
                    <div style={{ position: 'relative', height: '210px', width: '100%', backgroundColor: '#0f172a', overflow: 'hidden', flexShrink: 0 }}>
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

                      {course.isBestseller && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '16px',
                            left: '0px',
                            backgroundColor: '#f9b933',
                            color: '#1a1854',
                            fontWeight: 800,
                            fontSize: '11px',
                            padding: '6px 16px 6px 14px',
                            clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                          }}
                        >
                          BESTSELLER
                        </div>
                      )}
                    </div>

                    {/* Duration & Price Bar */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 22px',
                        borderBottom: '1px solid #f1f5f9',
                        backgroundColor: '#fafafa',
                        flexShrink: 0
                      }}
                    >
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#0284c7' }}>
                        Course Duration: {course.duration}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'line-through' }}>
                          {course.originalPrice}
                        </span>
                        <span style={{ fontSize: '16px', fontWeight: 800, color: '#0284c7' }}>
                          {course.salePrice}
                        </span>
                      </div>
                    </div>

                    {/* Course Details Content Body (Flex Grow to align Buy Now button evenly across all cards) */}
                    <div style={{ padding: '22px 22px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1854', marginBottom: '12px', lineHeight: 1.35 }}>
                        {course.title}
                      </h3>

                      <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, margin: 0, marginBottom: '20px' }}>
                        {course.description}
                      </p>

                      {/* Buy Now Button (Aligned evenly across all cards via marginTop: auto) */}
                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                        <Link
                          href={`/e-learning/${course.id}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: '#1a1854',
                            color: '#ffffff',
                            padding: '8px 16px 8px 22px',
                            borderRadius: '8px',
                            fontSize: '14px',
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
                          <span>Buy Now</span>
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
                            <ShoppingCart size={14} strokeWidth={2.5} />
                          </span>
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
                      padding: '14px 22px',
                      backgroundColor: '#f8fafc',
                      borderTop: '1px solid #f1f5f9',
                      fontSize: '12.5px',
                      color: '#475569',
                      flexShrink: 0
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
              );
            })}
          </div>

          {/* Carousel Pagination Dots at Bottom (Show only if more than 3 courses) */}
          {filteredCourses.length > 3 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '36px' }}>
              {Array.from({ length: filteredCourses.length - 2 }).map((_, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: isActive ? '28px' : '10px',
                      height: '10px',
                      borderRadius: '5px',
                      backgroundColor: isActive ? '#1a1854' : '#cbd5e1',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
