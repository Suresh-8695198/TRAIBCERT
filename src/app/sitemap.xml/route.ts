import { siteConfig } from '@/config/site';
import { certificationsData } from '@/config/certifications';
import { industriesData } from '@/config/industries';
import { trainingCoursesData } from '@/config/training';
import { policiesData } from '@/config/policies';

export async function GET() {
  const baseUrl = siteConfig.url;

  const certUrls = certificationsData.map(cert => `
    <url>
      <loc>${baseUrl}/certification/${cert.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('');

  const indUrls = industriesData.map(ind => `
    <url>
      <loc>${baseUrl}/resources/industries/${ind.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  const trainUrls = trainingCoursesData.map(tr => `
    <url>
      <loc>${baseUrl}/training/${tr.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  const policyUrls = policiesData.map(pol => `
    <url>
      <loc>${baseUrl}/legal/${pol.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.4</priority>
    </url>
  `).join('');

  const staticUrls = [
    '',
    '/certification',
    '/training',
    '/resources/industries',
    '/resources/blog',
    '/resources/knowledge-base',
    '/resources/downloads',
    '/resources/further-topics',
    '/resources/faq',
    '/resources/certificate-transfer',
    '/contact',
    '/contact/enquiry',
    '/verify-certificate'
  ].map(path => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${certUrls}
  ${indUrls}
  ${trainUrls}
  ${policyUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
