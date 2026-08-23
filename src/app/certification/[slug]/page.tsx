import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Award, 
  BookOpen, 
  Users, 
  ClipboardCheck, 
  ChevronRight, 
  TrendingUp 
} from 'lucide-react';
import { certificationsData } from '@/config/certifications';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export function generateStaticParams() {
  return certificationsData.map(cert => ({ slug: cert.slug }));
}

export default function CertificationDetailPage({ params }: { params: { slug: string } }) {
  const cert = certificationsData.find(c => c.slug === params.slug);

  if (!cert) {
    notFound();
  }

  // Define structured certification process phases
  const processPhases = [
    {
      title: 'Gap Analysis',
      desc: 'Identify discrepancies between current management practices and the standard requirements.',
      icon: BookOpen
    },
    {
      title: 'Implementation & Training',
      desc: 'Build policies, adjust operations, and train team members on new standard compliance practices.',
      icon: Users
    },
    {
      title: 'Internal Audit Verification',
      desc: 'Review systems internally to verify operational readiness and compliance before final assessment.',
      icon: ClipboardCheck
    },
    {
      title: 'Accredited Certification',
      desc: 'An external auditor reviews and awards the certificate, validating your compliance.',
      icon: Award
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--font-sans)', color: '#1e293b' }}>
      
      {/* Modernized Hero Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0a1628 0%, #1a1854 100%)', 
        color: '#fff', 
        padding: '72px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{ 
          position: 'absolute', 
          top: '-20%', 
          right: '5%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(0,201,167,0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontSize: '13px', 
            color: 'rgba(255,255,255,0.6)', 
            marginBottom: '20px' 
          }}>
            <Link href="/certification" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Certification</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#00c9a7', fontWeight: 600 }}>{cert.code}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
            <div>
              {/* Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '13px', 
                  fontWeight: 800, 
                  background: 'rgba(255,255,255,0.08)', 
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '4px 12px', 
                  borderRadius: '6px' 
                }}>
                  {cert.code}
                </span>
                {cert.tag && (
                  <span style={{ 
                    fontSize: '11px', 
                    fontWeight: 800, 
                    color: cert.tag === 'NEW' ? '#00c9a7' : '#f0b742',
                    backgroundColor: cert.tag === 'NEW' ? 'rgba(0,201,167,0.12)' : 'rgba(240,183,66,0.12)',
                    padding: '4px 12px', 
                    borderRadius: '100px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {cert.tag}
                  </span>
                )}
              </div>

              <h1 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(32px, 4.5vw, 52px)', 
                fontWeight: 700, 
                lineHeight: 1.15, 
                marginBottom: '20px' 
              }}>
                Achieve <span style={{ color: '#00c9a7' }}>{cert.code}</span> Certification
              </h1>
              
              <p style={{ 
                fontSize: '17px', 
                color: 'rgba(255,255,255,0.85)', 
                lineHeight: 1.6, 
                maxWidth: '620px', 
                marginBottom: '32px' 
              }}>
                {cert.summary}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn" style={{ 
                  backgroundColor: '#00c9a7', 
                  color: '#0a1628', 
                  fontWeight: 800, 
                  padding: '14px 28px', 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>Request Quote & Scope</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Quick Value Proposition Card */}
            <div style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '16px', 
              padding: '32px', 
              backdropFilter: 'blur(8px)' 
            }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#f0b742', textTransform: 'uppercase', letterSpacing: '1px' }}>
                WHY TRAIBCERT?
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#fff', marginTop: '4px', marginBottom: '16px' }}>
                ASCB Accredited Partner
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'rgba(255,255,255,0.85)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7', flexShrink: 0 }} /> Global ASCB Accreditation</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7', flexShrink: 0 }} /> Qualified Lead Assessor Team</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7', flexShrink: 0 }} /> Reliable Reporting & Feedback</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7', flexShrink: 0 }} /> 100% Secure Data Handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details and Scope Grid */}
      <section style={{ padding: '64px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'start' }}>
            
            {/* Left Column: Key Benefits and Process */}
            <div>
              {/* Key Benefits Card */}
              <div style={{ 
                background: '#fff', 
                padding: '36px', 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0', 
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                marginBottom: '32px' 
              }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0a1628', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <TrendingUp size={22} style={{ color: '#00c9a7' }} />
                  Key Benefits of {cert.code}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px' }}>
                  {cert.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#334155' }}>
                      <CheckCircle2 size={18} style={{ color: '#00c9a7', flexShrink: 0, marginTop: '2px' }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Scope Card */}
              <div style={{ 
                background: '#fff', 
                padding: '36px', 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0', 
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                marginBottom: '32px' 
              }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0a1628', marginBottom: '14px' }}>
                  Target Scope & Applicability
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  {cert.scope}
                </p>
              </div>

              {/* Certification Steps Process visual */}
              <div style={{ 
                background: '#fff', 
                padding: '36px', 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0', 
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
              }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0a1628', marginBottom: '24px' }}>
                  The Path to Certification
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  {processPhases.map((phase, idx) => {
                    const Icon = phase.icon;
                    return (
                      <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '8px', 
                          background: '#f1f5f9', 
                          color: '#2c2a75', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0 
                        }}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0a1628', marginBottom: '4px' }}>
                            {idx + 1}. {phase.title}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                            {phase.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Zoho Bigin Lead Enquiry Form */}
            <div id="quote-form" style={{ 
              background: '#fff', 
              padding: '36px 32px', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 10px 25px -5px rgba(10,22,40,0.05)', 
              position: 'sticky', 
              top: '24px' 
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0a1628', marginBottom: '8px' }}>
                Request Quote for {cert.code}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '24px', lineHeight: 1.5 }}>
                Submit the enquiry below to route directly to our Technical Assessment team pipeline.
              </p>
              <ZohoBiginForm defaultStandard={cert.code} />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
