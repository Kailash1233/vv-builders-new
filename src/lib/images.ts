function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const heroImage = unsplash("1600596542815-ffad4c1539a9", 2000, 85);

export const projectImages: Record<string, string> = {
  "horizon-residence": unsplash("1600585154340-be6161a56a0c", 1400),
  "aurora-office-tower": unsplash("1486406146926-c627a92ad1ab", 1400),
  "edgewood-villa": unsplash("1600047509807-ba8f99d2cdde", 1400),
  "maple-street-residences": unsplash("1449844908441-8829872d2607", 1400),
  "birchwood-corporate-campus": unsplash("1497366216548-37526070297c", 1400),
  "the-linden-penthouse": unsplash("1616486338812-3dadae4b4ace", 1400),
};

export const articleImages: Record<string, string> = {
  "future-of-sustainable-architecture": unsplash("1518005020951-eccb494ad742", 1200),
  "designing-homes-that-adapt-to-you": unsplash("1600210492486-724fe5c67fb0", 1200),
  "smart-materials-for-a-better-tomorrow": unsplash("1487958449943-2429e8be8625", 1200),
};

export const serviceImages: Record<string, string> = {
  architecture: unsplash("1524230572899-a752b3835840", 1200),
  "residential-construction": unsplash("1600566753086-00f18fb6b3ea", 1200),
  "commercial-builds": unsplash("1497366811353-6870744d04b2", 1200),
  interiors: unsplash("1600607687939-ce8a6c25118c", 1200),
  "project-management": unsplash("1560518883-ce09059eeffa", 1200),
};

export const aboutImage = unsplash("1493809842364-78817add7ffb", 1400);
export const contactImage = unsplash("1497366811353-6870744d04b2", 1200);
