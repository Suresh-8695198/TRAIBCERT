import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "TRAIBCERT made our ISO 9001 and ISO 27001 integrated audit seamless. Their UK auditors were exceptionally thorough, pragmatic, and delivered our accredited certificates ahead of our major government tender deadline.",
    author: "Jonathan Harris",
    role: "Chief Operating Officer",
    company: "Apex Technology Solutions UK",
    standard: "ISO 9001 & ISO 27001"
  },
  {
    quote: "Transferring our existing ISO certificates to TRAIBCERT saved us over £3,500 in annual audit fees with zero transfer disruption. The audit team guided us through every step with absolute transparency.",
    author: "Sarah Jenkins",
    role: "Head of Compliance & Quality",
    company: "MedTech Logistics International",
    standard: "ISO 13485 & ISO 14001"
  },
  {
    quote: "Achieving Cyber Essentials Plus certification through TRAIBCERT was straightforward and fast. Their IASME certified assessor conducted thorough vulnerability scans and provided clear remediation advice.",
    author: "David Miller",
    role: "Director of IT Infrastructure",
    company: "FinServ Global Middle East",
    standard: "Cyber Essentials Plus"
  }
];

export const ClientSuccessSection: React.FC = () => {
  return (
    <section id="testimonials" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Trusted by Over 5,000 Organisations Worldwide
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6 }}>
            Hear how our accredited certification and lead auditor guidance empower companies across the UK, UAE, and international markets.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', color: '#f9b933', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f9b933" />
                  ))}
                </div>

                <span style={{ backgroundColor: '#fff4d1', color: '#c99327', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '16px', display: 'inline-block' }}>
                  {t.standard}
                </span>

                <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2c2a75', color: '#ffffff', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#2c2a75', margin: 0 }}>{t.author}</h4>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0' }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
