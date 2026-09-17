function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const articleImages: Record<string, string> = {
  "future-of-sustainable-architecture": unsplash("1518005020951-eccb494ad742", 1200),
  "designing-homes-that-adapt-to-you": unsplash("1600210492486-724fe5c67fb0", 1200),
  "smart-materials-for-a-better-tomorrow": unsplash("1487958449943-2429e8be8625", 1200),
};

export const serviceImages: Record<string, string> = {
  architecture: "/vv3.jpg",
  "residential-construction": "/vv1.jpg",
  "renovation-home-extensions": "/vv4.jpg",
  interiors: "/vv2.jpg",
  "project-management": unsplash("1560518883-ce09059eeffa", 1200),
};

export const aboutImage = "/vv1.jpg";
export const contactImage = "/vv3.jpg";
