const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'JS', 'data.js');
const SITEMAP_FILE = path.join(ROOT, 'sitemap.xml');
const LLMS_FILE = path.join(ROOT, 'llms.txt');

const SITE = {
  name: 'Eqan Ahmad',
  title: 'Eqan Ahmad | Full Stack Software Engineer',
  url: 'https://eqanahmad.com/',
  email: 'eqan.ahmad123@gmail.com',
  resume: 'https://resume.eqanahmad.com',
  summary: 'Portfolio of Eqan Ahmad, a full stack software engineer based in Paris building GenAI, quantum, cloud, Web3, desktop, and MVP products.',
  location: 'Paris, France',
  lastmod: new Date().toISOString().slice(0, 10)
};

function loadPortfolioData() {
  const source = fs.readFileSync(DATA_FILE, 'utf8');
  const sandbox = {};
  vm.runInNewContext(
    `${source}\n;globalThis.__PORTFOLIO_DATA__ = PORTFOLIO_DATA;`,
    sandbox,
    { filename: 'JS/data.js' }
  );

  if (!sandbox.__PORTFOLIO_DATA__) {
    throw new Error('Unable to load PORTFOLIO_DATA from JS/data.js');
  }

  return sandbox.__PORTFOLIO_DATA__;
}

function stripHtml(html) {
  return String(html || '')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function uniqBy(items, getKey) {
  const seen = new Set();
  return items.filter((item) => {
    const key = getKey(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildProjectSummaries(data) {
  const cardProjects = [
    ...(data.featuredProjects || []),
    ...(data.projects || [])
  ];

  const projects = cardProjects.map((project) => {
    const modal = data.projectModals?.[project.id] || {};
    return {
      title: modal.title || project.title,
      subtitle: modal.subtitle || project.subtitle || '',
      category: project.category || '',
      year: project.year || '',
      tags: modal.tags || project.tags || [],
      link: modal.link || '',
      details: stripHtml(modal.content || '')
    };
  });

  return uniqBy(projects, (project) => project.title);
}

function buildProfileLinks(data) {
  return uniqBy(
    [
      ...(data.socials || []),
      ...(data.services || [])
        .filter((item) => item.href && /^https?:\/\//.test(item.href))
        .map((item) => ({ label: item.label, href: item.href })),
      ...(data.contacts || [])
        .filter((item) => item.href && /^https?:\/\//.test(item.href))
        .map((item) => ({ label: item.label, href: item.href }))
    ],
    (item) => item.href
  );
}

function generateLlms(data) {
  const expertise = (data.expertise || []).map((item) => item.label);
  const projects = buildProjectSummaries(data).slice(0, 10);
  const profiles = buildProfileLinks(data);

  const lines = [
    '# Auto-generated from JS/data.js. Do not edit manually.',
    '',
    `# ${SITE.name}`,
    '',
    `> ${SITE.summary}`,
    '',
    `Canonical site: ${SITE.url}`,
    `Primary page: ${SITE.url}`,
    `Contact: mailto:${SITE.email}`,
    `Resume: ${SITE.resume}`,
    `Location: ${SITE.location}`,
    '',
    '## Summary',
    '',
    `${SITE.name} is a full stack software engineer focused on shipping ambitious software products from idea to production. The portfolio highlights work across generative AI, quantum computing, cloud infrastructure, developer platforms, Web3, desktop software, and startup MVPs.`,
    '',
    'The site includes:',
    '- About and positioning information',
    '- Services and expertise areas',
    '- Project case studies',
    '- Experience highlights',
    '- Honors and education',
    '- Testimonials',
    '- Contact and profile links',
    '',
    '## Key areas of work',
    '',
    ...expertise.map((label) => `- ${label}`),
    '- MVP architecture and rapid product delivery',
    '',
    '## Selected projects',
    ''
  ];

  projects.forEach((project) => {
    const meta = [project.category, project.year].filter(Boolean).join(' | ');
    const detail = project.details ? ` ${project.details}` : '';
    const tags = project.tags.length ? ` Stack: ${project.tags.slice(0, 8).join(', ')}.` : '';
    lines.push(`- ${project.title}${meta ? ` (${meta})` : ''}: ${project.subtitle}${tags}${detail}`);
  });

  lines.push('', '## Profiles', '');

  profiles.forEach((profile) => {
    lines.push(`- ${profile.label}: ${profile.href}`);
  });

  lines.push(
    '',
    '## Crawling notes',
    '',
    "This is a public portfolio site. The homepage is the primary canonical source for the site's content."
  );

  return `${lines.join('\n')}\n`;
}

function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Auto-generated from JS/data.js. Do not edit manually. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE.url}</loc>
    <lastmod>${SITE.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}

function main() {
  const data = loadPortfolioData();
  fs.writeFileSync(LLMS_FILE, generateLlms(data), 'utf8');
  fs.writeFileSync(SITEMAP_FILE, generateSitemap(), 'utf8');
  console.log('Generated llms.txt and sitemap.xml from JS/data.js');
}

main();
