import heroImage from "@/assets/barber-hero.jpg";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "");

function absoluteUrl(path: string) {
  if (!siteUrl) return undefined;

  try {
    return new URL(path.replace(/^\/+/, ""), `${siteUrl}/`).href;
  } catch {
    return undefined;
  }
}

export function createPageSeo({ title, description, path }: PageSeo) {
  const canonicalUrl = absoluteUrl(path);
  const socialImageUrl = absoluteUrl(heroImage);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_MA" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(canonicalUrl ? [{ property: "og:url", content: canonicalUrl }] : []),
      ...(socialImageUrl
        ? [
            { property: "og:image", content: socialImageUrl },
            {
              property: "og:image:alt",
              content: "Visuel d’ambiance du barber shop Élégance à Nador",
            },
            { name: "twitter:image", content: socialImageUrl },
          ]
        : []),
    ],
    links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
  };
}

export function getSiteUrl(path: string) {
  return absoluteUrl(path);
}
