function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const articleImages: Record<string, string> = {
  "house-construction-cost-in-chennai": unsplash("1600596542815-ffad4c1539a9", 1200),
  "cmda-vs-panchayat-approval-chennai": "/vv3.jpg",
  "monsoon-proofing-construction-gst-road-belt": "/vv1.jpg",
  "renovate-or-rebuild-chennai-home": "/vv4.jpg",
  "questions-to-ask-a-builder-in-chennai": "/vv2.jpg",
};

export const serviceImages: Record<string, string> = {
  "residential-construction": "/vv1.jpg",
  "commercial-construction": unsplash("1497366216548-37526070297c", 1200),
  "renovation-home-extensions": "/vv4.jpg",
  "project-management": unsplash("1560518883-ce09059eeffa", 1200),
};

export const aboutImage = "/vv1.jpg";
export const contactImage = "/vv3.jpg";
