import { useEffect } from 'react';

function upsertMeta(attr, key, value) {
  if (!value) return;
  let selector = `${attr}="${key}"`;
  let el = document.head.querySelector(`meta[${selector}]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Layout({
  title,
  description,
  keywords,
  canonical,
  og = {},
  twitter = {},
  jsonLd,
  children,
}) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Basic meta
    upsertMeta('name', 'description', description);
    if (Array.isArray(keywords)) {
      upsertMeta('name', 'keywords', keywords.join(', '));
    } else if (typeof keywords === 'string') {
      upsertMeta('name', 'keywords', keywords);
    }

    // Canonical
    if (canonical) {
      const isAbsolute = /^https?:\/\//i.test(canonical);
      const href = isAbsolute ? canonical : `${window.location.origin}${canonical.startsWith('/') ? '' : '/'}${canonical}`;
      upsertLink('canonical', href);
    }

    // Open Graph
    upsertMeta('property', 'og:title', og.title || title);
    upsertMeta('property', 'og:description', og.description || description);
    upsertMeta('property', 'og:type', og.type || 'website');
    upsertMeta('property', 'og:url', og.url || window.location.href);
    upsertMeta('property', 'og:image', og.image);

    // Twitter
    upsertMeta('name', 'twitter:card', twitter.card || 'summary_large_image');
    upsertMeta('name', 'twitter:title', twitter.title || title);
    upsertMeta('name', 'twitter:description', twitter.description || description);
    upsertMeta('name', 'twitter:image', twitter.image || og.image);

    // JSON-LD
    let ld = document.getElementById('ld-json');
    if (jsonLd) {
      if (!ld) {
        ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.id = 'ld-json';
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(jsonLd);
    } else if (ld) {
      // remove if previously set
      ld.remove();
    }
  }, [title, description, JSON.stringify(keywords), canonical, JSON.stringify(og), JSON.stringify(twitter), JSON.stringify(jsonLd)]);

  return children;
}
