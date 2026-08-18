import { useEffect } from "react";

const SITE_NAME = "HatwarTech";
const SITE_URL = "https://hatwartech.com";

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Sets document title + meta description + Open Graph tags + canonical URL per page.
export function useSEO({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", `${SITE_URL}${path}`);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);

    setLinkTag("canonical", `${SITE_URL}${path}`);
  }, [title, description, path]);
}
