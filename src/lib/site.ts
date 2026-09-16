export const site = {
  name: "VV Builders",
  legalName: "VV Builders Pvt. Ltd.",
  shortName: "VV Builders",
  tagline: "We Build Timeless Spaces. Built Around You.",
  description:
    "VV Builders is an architecture and construction studio delivering bespoke residential, commercial, and interior projects — from concept to completion, engineered to last.",
  url: "https://www.vvbuilders.com",
  email: "hello@vvbuilders.com",
  phone: "+1 (212) 555-0198",
  phoneRaw: "+12125550198",
  address: {
    street: "123 Design Avenue",
    city: "New York",
    region: "NY",
    postal: "10001",
    country: "US",
  },
  founded: "2009",
  social: {
    linkedin: "https://www.linkedin.com/company/vvbuilders",
    instagram: "https://www.instagram.com/vvbuilders",
    pinterest: "https://www.pinterest.com/vvbuilders",
    twitter: "https://twitter.com/vvbuilders",
  },
};

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "320+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "25+", label: "Industry Awards" },
];

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: "compass" | "home" | "building" | "sofa" | "clipboard";
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "architecture",
    name: "Architecture",
    shortDescription: "Concept-driven designs that blend creativity and functionality.",
    description:
      "Our architecture studio translates ambition into buildable form. Every concept begins with site, light, and how people actually move through a space, then develops through iterative modeling, material study, and code-aware detailing into a design that is as functional as it is expressive.",
    icon: "compass",
    highlights: [
      "Site analysis & feasibility studies",
      "Concept design & 3D visualization",
      "Permit & zoning documentation",
      "Sustainable & passive design strategy",
    ],
  },
  {
    slug: "residential-construction",
    name: "Residential Construction",
    shortDescription: "Bespoke homes built with precision and care.",
    description:
      "From custom single-family homes to multi-unit residences, our construction teams execute architectural vision with exacting craftsmanship, transparent scheduling, and a single point of accountability from groundbreaking to move-in.",
    icon: "home",
    highlights: [
      "Custom & luxury home construction",
      "Additions, renovations & remodels",
      "Structural & foundation work",
      "Licensed, bonded & insured crews",
    ],
  },
  {
    slug: "commercial-builds",
    name: "Commercial Builds",
    shortDescription: "High-performance spaces for modern businesses.",
    description:
      "We deliver office towers, retail environments, and mixed-use developments engineered for performance and built to operate efficiently for decades — coordinated tightly with owners, tenants, and municipal stakeholders.",
    icon: "building",
    highlights: [
      "Ground-up commercial construction",
      "Tenant improvement & fit-out",
      "Mixed-use & multifamily development",
      "LEED & energy-code compliance",
    ],
  },
  {
    slug: "interiors",
    name: "Interiors",
    shortDescription: "Beautiful, functional interiors tailored to your lifestyle.",
    description:
      "Our interiors team shapes the experience inside every structure we build — material palettes, lighting, millwork, and furnishing plans that feel considered, livable, and unmistakably yours.",
    icon: "sofa",
    highlights: [
      "Residential & commercial interior design",
      "Custom millwork & cabinetry",
      "Lighting & materials specification",
      "Furniture, fixtures & equipment (FF&E)",
    ],
  },
  {
    slug: "project-management",
    name: "Project Management",
    shortDescription: "Seamless execution from concept to completion.",
    description:
      "A dedicated project manager owns your schedule, budget, and subcontractor coordination end to end, giving you one clear line of communication and predictable delivery at every milestone.",
    icon: "clipboard",
    highlights: [
      "Budgeting & cost control",
      "Schedule & milestone tracking",
      "Subcontractor & vendor coordination",
      "Quality assurance & final walkthrough",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Interiors";
  year: string;
  size: string;
  summary: string;
  description: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "horizon-residence",
    name: "Horizon Residence",
    location: "Los Angeles, CA",
    category: "Residential",
    year: "2024",
    size: "6,200 sq ft",
    summary: "A hillside home built around glass, light, and the horizon line.",
    description:
      "Set into a sloped hillside lot, Horizon Residence uses cantilevered volumes and full-height glazing to frame uninterrupted views while keeping the home's footprint light on the land. Passive cooling, a native landscape plan, and an integrated pool terrace complete the composition.",
    featured: true,
  },
  {
    slug: "aurora-office-tower",
    name: "Aurora Office Tower",
    location: "New York, NY",
    category: "Commercial",
    year: "2023",
    size: "180,000 sq ft",
    summary: "A 22-story commercial tower engineered for modern hybrid work.",
    description:
      "Aurora Office Tower delivers column-free floorplates, a triple-height lobby, and a curtain wall system tuned for daylight and energy performance, giving tenants flexible, healthy space in the heart of the city.",
    featured: true,
  },
  {
    slug: "edgewood-villa",
    name: "Edgewood Villa",
    location: "Austin, TX",
    category: "Residential",
    year: "2023",
    size: "5,400 sq ft",
    summary: "A courtyard villa balancing indoor-outdoor living with Texas heat.",
    description:
      "Edgewood Villa wraps a shaded central courtyard with deep overhangs, cross-ventilated living spaces, and locally sourced limestone, delivering a resilient home tuned to its climate without sacrificing openness.",
    featured: true,
  },
  {
    slug: "maple-street-residences",
    name: "Maple Street Residences",
    location: "Seattle, WA",
    category: "Residential",
    year: "2022",
    size: "48 units",
    summary: "A boutique multifamily building woven into an established block.",
    description:
      "Maple Street Residences adds 48 thoughtfully scaled units to an existing Seattle neighborhood, with a brick and timber palette chosen to sit comfortably alongside its older neighbors while meeting modern efficiency standards.",
    featured: true,
  },
  {
    slug: "birchwood-corporate-campus",
    name: "Birchwood Corporate Campus",
    location: "Denver, CO",
    category: "Commercial",
    year: "2022",
    size: "95,000 sq ft",
    summary: "A three-building campus organized around a shared central green.",
    description:
      "Birchwood Corporate Campus links three low-rise office buildings around a landscaped commons, encouraging movement between teams while giving each building its own identity and daylighting strategy.",
    featured: false,
  },
  {
    slug: "the-linden-penthouse",
    name: "The Linden Penthouse",
    location: "Chicago, IL",
    category: "Interiors",
    year: "2024",
    size: "3,100 sq ft",
    summary: "A full interior renovation of a top-floor penthouse residence.",
    description:
      "The Linden Penthouse interior program reworks circulation, opens the kitchen to a reconfigured living room, and introduces a warm material palette of white oak, honed stone, and brushed brass throughout.",
    featured: false,
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
};

export const articles: Article[] = [
  {
    slug: "future-of-sustainable-architecture",
    title: "The Future of Sustainable Architecture",
    excerpt:
      "How passive design, low-carbon materials, and smarter building envelopes are reshaping what it means to build responsibly.",
    content: [
      "Sustainable architecture has moved well beyond solar panels and recycled materials. Today it starts at the earliest design decisions: orientation, massing, and envelope performance that reduce energy demand before a single mechanical system is specified.",
      "At VV Builders, every project begins with a passive-design review — daylighting, natural ventilation, and thermal mass are considered alongside aesthetics, not after them. The result is buildings that perform better and cost less to operate over their lifetime.",
      "Material selection matters just as much. We prioritize low-embodied-carbon materials, regionally sourced timber and stone, and construction assemblies designed for durability and eventual disassembly rather than demolition.",
    ],
    date: "2026-05-12",
    readTime: "6 min read",
    category: "Sustainability",
  },
  {
    slug: "designing-homes-that-adapt-to-you",
    title: "Designing Homes That Adapt to You",
    excerpt:
      "Flexible floor plans, modular millwork, and rooms that change purpose as life does — a look at adaptive residential design.",
    content: [
      "The most livable homes are not the most decorated ones — they are the ones that flex. A guest room that becomes a nursery, a home office that folds away for weekend guests, a kitchen island that reconfigures for a dinner party or a homework session.",
      "We design residential interiors around this kind of adaptability from day one: movable partitions, multi-purpose millwork, and electrical and lighting plans that support more than one use for every room.",
      "The payoff is a home that grows with a family instead of requiring renovation every time life changes.",
    ],
    date: "2026-04-28",
    readTime: "5 min read",
    category: "Residential",
  },
  {
    slug: "smart-materials-for-a-better-tomorrow",
    title: "Smart Materials for a Better Tomorrow",
    excerpt:
      "Self-healing concrete, phase-change insulation, and other emerging materials construction teams should be watching.",
    content: [
      "Material science is catching up with architectural ambition. Self-healing concrete that seals its own micro-cracks, phase-change materials that stabilize indoor temperature, and mass timber systems that sequester carbon are moving from research labs into real projects.",
      "Our project managers track these emerging materials closely, evaluating them not for novelty but for measurable gains in durability, performance, and total cost of ownership.",
      "Adopting the right material at the right stage of a project can extend a building's lifespan by decades — that is the standard we hold every specification to.",
    ],
    date: "2026-04-10",
    readTime: "7 min read",
    category: "Innovation",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "Understanding your vision, goals, and requirements.",
  },
  {
    step: "02",
    title: "Design",
    description: "Crafting intelligent designs that inspire and perform.",
  },
  {
    step: "03",
    title: "Build",
    description: "Expert construction with quality and precision.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "On-time delivery with attention to every detail.",
  },
  {
    step: "05",
    title: "Beyond",
    description: "Ongoing support to ensure lasting satisfaction.",
  },
];

export const faqs = [
  {
    question: "What areas does VV Builders serve?",
    answer:
      "VV Builders takes on residential, commercial, and interiors projects nationwide, with active project teams currently based in New York, Los Angeles, Austin, Seattle, Denver, and Chicago.",
  },
  {
    question: "How long does a typical project take, from design to completion?",
    answer:
      "Timelines vary by scope. A custom home typically runs 10–16 months from initial concept to move-in, while commercial builds and multifamily developments range from 14–30 months depending on size and permitting.",
  },
  {
    question: "Does VV Builders handle both architecture and construction?",
    answer:
      "Yes. VV Builders is a design-build studio, meaning our architecture and construction teams work under one roof and one contract, so design intent carries through to the finished building without handoff gaps.",
  },
  {
    question: "Can VV Builders work with an architect I've already hired?",
    answer:
      "Absolutely. We regularly partner with independent architects and designers, joining as the construction and project management team while respecting the established design direction.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Start by sharing your project details through our contact form or by calling our studio directly. We'll schedule an initial consultation to understand scope before providing a detailed proposal.",
  },
];
