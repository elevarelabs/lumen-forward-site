import { routes, site } from "@/lib/site";

export default function sitemap() {
  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}${routes.privacy}`, lastModified: new Date() },
  ];
}
