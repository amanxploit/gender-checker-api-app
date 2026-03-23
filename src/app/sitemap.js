// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://gender-checker-app.vercel.app';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}