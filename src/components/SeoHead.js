import { useEffect, useMemo } from "react";

// Default value for some meta data
const defaultMeta = {
  title: 'KeDA Tech',
  siteName: 'KeDA Tech',
  description:
    'ERP landing pages',
  // change base url of your web (without '/' at the end)
  type: 'website',
  robots: 'follow, index',
  // change with url of your image (recommended dimension = 1.91:1)
  author: 'Lorem Ipsum'
};

/**
 * React SEO component that updates document title and meta tags
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const meta = useMemo(() => ({
    ...defaultMeta,
    ...props,
    title: props.templateTitle
      ? `${props.templateTitle} | ${props.siteName || defaultMeta.siteName}`
      : (props.title || defaultMeta.title),
  }), [props]);

  useEffect(() => {
    // Update document title
    document.title = meta.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = meta.description;

    // Update robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = meta.robots;

    // Update Open Graph meta tags
    const ogTags = {
      'og:type': meta.type,
      'og:site_name': meta.siteName,
      'og:description': meta.description,
      'og:title': meta.title,
      'og:image': meta.image,
      'og:url': meta.url
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = meta.url;

  }, [meta]);

  return null; // This component doesn't render anything
};

export default SeoHead;