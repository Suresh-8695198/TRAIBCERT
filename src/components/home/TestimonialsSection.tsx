import React from 'react';
import { Star, CheckCircle2, Award, Globe, ShieldCheck } from 'lucide-react';

const clientTestimonials = [
  {
    quote: "TRAIBCERT made our ISO 9001 and ISO 27001 integrated audit seamless. Their UK auditors were exceptionally thorough, pragmatic, and delivered our accredited certificates ahead of our major government tender deadline.",
    author: "Jonathan Harris",
    role: "Chief Operating Officer",
    company: "Apex Technology Solutions UK",
    location: "London, United Kingdom",
    standard: "ISO 9001 & ISO 27001"
  },
  {
    quote: "Transferring our existing ISO certificates to TRAIBCERT saved us over £3,500 in annual audit fees with zero transfer disruption. The audit team guided us through every step with absolute transparency.",
    author: "Sarah Jenkins",
    role: "Head of Compliance & Quality",
    company: "MedTech Logistics International",
    location: "Manchester, United Kingdom",
    standard: "ISO 13485 & ISO 14001"
  },
  {
    quote: "Achieving Cyber Essentials Plus certification through TRAIBCERT was straightforward and fast. Their IASME certified assessor conducted thorough vulnerability scans and provided clear remediation advice.",
    author: "David Miller",
    role: "Director of IT Infrastructure",
    company: "FinServ Global Middle East",
    location: "Dubai, United Arab Emirates",
    standard: "Cyber Essentials Plus"
  }
];

const stats = [
  { metric: '5,000+', label: 'Certified Organisations', icon: ShieldCheck },
  { metric: '45+', label: 'Global Markets Served', icon: Globe },
  { metric: '99.4%', label: 'First-Time Audit Pass Rate', icon: CheckCircle2 },
  { metric: '15+ Yrs', label: 'Accreditation Excellence', icon: Award }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" style={{ backgroundColor: '#ffffff', padding: '88px 0' }}>
      <div className="container">
        
        {/* Top 4-Metric Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          marginBottom: '64px',
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid var(--gray-200)'
        }}>
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--gold-soft)', color: 'var(--gold-strong)', marginBottom: '12px' }}>
                  <Icon size={22} />
                </div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--ink)', lineHeight: 1 }}>
                  {s.metric}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--gray-600)', fontWeight: 600, marginTop: '6px' }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            What Our Clients Say About Us
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            Trusted by over 5,000 organisations across the UK, UAE, and international markets for accredited ISO certification and Cyber Essentials.
          </p>
        </div>

        {/* Testimonials Container Block */}
        <div style={{
          backgroundColor: '#2c2a75',
          borderRadius: '0 48px 0 48px',
          padding: '56px 40px',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(44, 42, 117, 0.25)'
        }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {clientTestimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Star Rating */}
                  <div style={{ display: 'flex', gap: '4px', color: '#f9b933', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={16} fill="#f9b933" />
                    ))}
                  </div>

                  {/* Standard Badge */}
                  <span style={{ backgroundColor: 'var(--gold-soft)', color: 'var(--gold-strong)', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '16px', display: 'inline-block' }}>
                    {t.standard}
                  </span>

                  <p style={{ fontSize: '14px', color: 'var(--gray-800)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '24px' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--gray-100)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#2c2a75', color: '#ffffff', fontWeight: 800, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--ink)', margin: 0 }}>{t.author}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--gray-600)', margin: '2px 0 0' }}>{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
