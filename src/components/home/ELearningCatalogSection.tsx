'use client';

import React, { useState } from 'react';
import { Star, Clock, ShoppingCart, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

const eLearningCourses = [
  { title: 'ISO 9001:2015 Foundation Training', duration: '2 Hours', originalPrice: '£89.00', price: '£40.00', rating: 4.6, reviews: '8,434', desc: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills and intellectual minds.', category: 'ISO 9001' },
  { title: 'ISO 9001:2015 Awareness Training', duration: '8 Hours', originalPrice: '£229.00', price: '£179.00', rating: 4.7, reviews: '8,980', desc: 'Awareness online course is a comprehensive package that delves into every nook and corner you deserve to know about ISO 9001.', category: 'ISO 9001' },
  { title: 'ISO 9001:2015 Internal Auditor Training', duration: '16 Hours', originalPrice: '£269.00', price: '£189.00', rating: 4.8, reviews: '8,566', desc: 'Provide the knowledge and skills required to perform an internal audit of part of a quality management system.', category: 'ISO 9001' },
  { title: 'ISO 14001:2015 Awareness Training', duration: '8 Hours', originalPrice: '£329.00', price: '£195.00', rating: 4.6, reviews: '6,899', desc: 'Awareness Courses are uniquely and specifically structured and designed to upgrade individual skills and environmental knowledge.', category: 'ISO 14001' },
  { title: 'ISO 14001:2015 Internal Auditor Training', duration: '16 Hours', originalPrice: '£529.00', price: '£329.00', rating: 4.5, reviews: '6,485', desc: 'The course is designed to suit all who are interested to play a significant role in the Environmental management system.', category: 'ISO 14001' },
  { title: 'ISO 45001:2018 Foundation Training', duration: '2 Hours', originalPrice: '£99.00', price: '£49.00', rating: 4.6, reviews: '7,213', desc: 'Foundation Courses are uniquely and specifically structured and designed to upgrade individual skills and safety minds.', category: 'ISO 45001' },
  { title: 'ISO 45001:2018 Awareness Training', duration: '8 Hours', originalPrice: '£329.00', price: '£195.00', rating: 4.8, reviews: '7,759', desc: 'Provide authorized staff with essential basic knowledge and experience in occupational health and safety.', category: 'ISO 45001' },
  { title: 'ISO 45001:2018 Internal Auditor Training', duration: '16 Hours', originalPrice: '£529.00', price: '£329.00', rating: 4.9, reviews: '8,305', desc: 'Structured training materials aimed at providing staff with needed basic knowledge to perform OHSMS internal audits.', category: 'ISO 45001' },
  { title: 'ISO 27001:2022 Foundation Training', duration: '2 Hours', originalPrice: '£99.00', price: '£49.00', rating: 4.7, reviews: '7,449', desc: 'Foundation Courses structured to upgrade skills and information security knowledge for modern digital teams.', category: 'ISO 27001' },
  { title: 'ISO 27001:2022 Awareness Training', duration: '8 Hours', originalPrice: '£359.00', price: '£229.00', rating: 4.7, reviews: '7,126', desc: 'Provides authorized staff with essential basic knowledge and practical experience in information security controls.', category: 'ISO 27001' },
  { title: 'ISO 27001:2022 Internal Auditor Training', duration: '16 Hours', originalPrice: '£529.00', price: '£329.00', rating: 4.9, reviews: '7,672', desc: 'Designed to suit all who are interested to play a significant role in the Information security management system.', category: 'ISO 27001' },
  { title: 'ISO 31000:2018 Awareness Training', duration: '8 Hours', originalPrice: '£399.00', price: '£249.00', rating: 4.6, reviews: '4,275', desc: 'Provide staff with essential basic knowledge and principles of ISO 31000 risk management frameworks.', category: 'ISO 31000' },
  { title: 'ISO 31000:2018 Internal Auditor Training', duration: '16 Hours', originalPrice: '£599.00', price: '£449.00', rating: 4.3, reviews: '4,598', desc: 'Designed for professionals playing a significant role in risk management system assessments.', category: 'ISO 31000' },
  { title: 'ISO 22301:2019 Awareness Training', duration: '8 Hours', originalPrice: '£399.00', price: '£249.00', rating: 4.7, reviews: '5,116', desc: 'Essential basic knowledge and operational continuity principles under ISO 22301 standard guidelines.', category: 'ISO 22301' },
  { title: 'ISO 22301:2019 Internal Auditor Training', duration: '16 Hours', originalPrice: '£599.00', price: '£449.00', rating: 4.4, reviews: '5,439', desc: 'Play a significant role in auditing business continuity management systems across operational disruptions.', category: 'ISO 22301' },
  { title: 'ISO 22000:2018 Foundation Training', duration: '2 Hours', originalPrice: '£99.00', price: '£49.00', rating: 4.8, reviews: '4,793', desc: 'Foundation course upgrading individual skills in food safety management standards and HACCP principles.', category: 'ISO 22000' },
  { title: 'ISO 22000:2018 Awareness Training', duration: '8 Hours', originalPrice: '£329.00', price: '£195.00', rating: 4.8, reviews: '5,339', desc: 'Comprehensive package delving into essential food safety requirements for processing and food business.', category: 'ISO 22000' },
  { title: 'ISO 22000:2018 Internal Auditor Training', duration: '16 Hours', originalPrice: '£529.00', price: '£329.00', rating: 4.7, reviews: '5,885', desc: 'Skills required to perform internal audits of food safety management systems across supply chains.', category: 'ISO 22000' },
  { title: 'ISO 50001:2018 Awareness Training', duration: '8 Hours', originalPrice: '£329.00', price: '£199.00', rating: 4.9, reviews: '6,431', desc: 'Provides staff with essential basic knowledge in energy management systems and efficiency targets.', category: 'ISO 50001' },
  { title: 'ISO 50001:2018 Internal Auditor Training', duration: '16 Hours', originalPrice: '£529.00', price: '£329.00', rating: 4.7, reviews: '6,108', desc: 'Course designed to suit internal auditors responsible for energy performance reviews.', category: 'ISO 50001' },
  { title: 'ISO 17025:2017 Foundation Training', duration: '8 Hours', originalPrice: '£329.00', price: '£195.00', rating: 4.7, reviews: '5,785', desc: 'Foundation Courses structured to upgrade testing & calibration laboratory skills.', category: 'Lab & Inspection' },
  { title: 'ISO 17043:2010 Foundation Training', duration: '8 Hours', originalPrice: '£329.00', price: '£195.00', rating: 4.6, reviews: '6,008', desc: 'Proficiency testing provider requirements and fundamental skills upgrade.', category: 'Lab & Inspection' },
  { title: 'ISO 17043:2010 Awareness Training', duration: '16 Hours', originalPrice: '£529.00', price: '£329.00', rating: 4.6, reviews: '5,685', desc: 'Authorized staff training for proficiency testing provider awareness.', category: 'Lab & Inspection' },
  { title: 'ISO 13528:2015 Foundation Training', duration: '8 Hours', originalPrice: '£329.00', price: '£199.00', rating: 4.7, reviews: '6,231', desc: 'Statistical methods for use in proficiency testing foundation module.', category: 'Lab & Inspection' },
  { title: 'ISO 13528:2015 Awareness Training', duration: '16 Hours', originalPrice: '£529.00', price: '£329.00', rating: 4.7, reviews: '5,908', desc: 'Essential basic knowledge for statistical methods in proficiency testing.', category: 'Lab & Inspection' },
  { title: 'ISO 20000:2018 Awareness Training', duration: '8 Hours', originalPrice: '£329.00', price: '£199.00', rating: 4.8, reviews: '6,131', desc: 'Essential basic knowledge in IT Service Management System.', category: 'IT & Cyber' },
  { title: 'ISO 20000:2018 Internal Auditor Training', duration: '16 Hours', originalPrice: '£329.00', price: '£229.00', rating: 4.8, reviews: '5,585', desc: 'Auditing IT Service management system operations and SLA processes.', category: 'IT & Cyber' }
];

export const ELearningCatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'ISO 22000'];

  const filteredCourses = activeCategory === 'All'
    ? eLearningCourses
    : eLearningCourses.filter(c => c.category === activeCategory);

  return (
    <section id="e-learning" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            ONLINE E-LEARNING ACADEMY
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            E-Learning Courses Catalog
          </h2>
          <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6 }}>
            Learning conducted via electronic media, typically on the Internet. Successful e-learning depends on self-motivation of individuals to study effectively with instant verified certification.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? '#2c2a75' : '#f1f5f9',
                color: activeCategory === cat ? '#ffffff' : '#334155',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: 700,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredCourses.slice(0, 8).map((course, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.25s ease, boxShadow 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, backgroundColor: '#fff4d1', color: '#c99327', padding: '3px 8px', borderRadius: '4px' }}>
                    {course.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                    <Clock size={14} style={{ color: '#2c2a75' }} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2c2a75', lineHeight: 1.3, marginBottom: '10px' }}>
                  {course.title}
                </h3>

                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                  {course.desc}
                </p>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#475569', marginBottom: '20px' }}>
                  <Star size={15} fill="#f9b933" style={{ color: '#f9b933' }} />
                  <strong style={{ color: '#0f172a' }}>{course.rating}</strong>
                  <span style={{ color: '#64748b' }}>({course.reviews} reviews)</span>
                </div>
              </div>

              {/* Price & Buy Button */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ textDecoration: 'line-through', fontSize: '12px', color: '#94a3b8', marginRight: '6px' }}>{course.originalPrice}</span>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: '#2c2a75' }}>{course.price}</span>
                </div>

                <a
                  href={siteConfig.academyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ padding: '8px 16px', fontSize: '13px' }}
                >
                  <ShoppingCart size={14} />
                  <span>Buy Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href={siteConfig.academyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink"
            style={{ padding: '12px 28px', fontSize: '14.5px' }}
          >
            <span>Visit E-Learning Academy (27+ Courses)</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
