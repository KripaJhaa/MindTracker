import { useEffect } from 'react';
import { seoConfig, getCanonicalUrl } from '../utils/seoConfig';

const SEOHead = ({ 
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  keywords = seoConfig.defaultKeywords,
  image = seoConfig.defaultImage,
  url = "",
  type = "website",
  schemaData = null
}) => {
  useEffect(() => {
    const fullTitle = title.includes('MindTracker') ? title : `${title} | MindTracker`;
    const canonicalUrl = getCanonicalUrl(url);

    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update or create link tags
    const updateLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', 'MindTracker Team');
    updateMeta('robots', 'index, follow');
    
    // Open Graph tags
    updateMeta('og:type', type, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', `${seoConfig.baseUrl}${image}`, true);
    updateMeta('og:site_name', seoConfig.siteName, true);

    // Twitter tags
    updateMeta('twitter:card', 'summary_large_image', true);
    updateMeta('twitter:url', canonicalUrl, true);
    updateMeta('twitter:title', fullTitle, true);
    updateMeta('twitter:description', description, true);
    updateMeta('twitter:image', `${seoConfig.baseUrl}${image}`, true);

    // Canonical URL
    updateLink('canonical', canonicalUrl);

    // Structured data
    if (schemaData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaData);
    }
  }, [title, description, keywords, image, url, type, schemaData]);

  return null; // This component doesn't render anything
};

export default SEOHead;
