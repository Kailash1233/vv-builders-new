export const site = {
  name: "V.V Builders",
  legalName: "V.V Builders",
  shortName: "V.V Builders",

  tagline: "We Build Timeless Spaces. Built Around You.",

  description:
    "V.V Builders is a builders and construction company based in Padappai, Tambaram, Chennai, specializing in residential construction, villas, renovation, and home extensions across South Chennai.",

  url: "https://www.vvbuilders.co.in",

  email: "info@vvbuilders.co.in",

  phone: "+91 95436 06050",
  phoneRaw: "+919543606050",

  address: {
    street: "Padappai",
    city: "Tambaram",
    region: "Tamil Nadu",
    postal: "",
    country: "India",
  },

  founded: "2009",

  social: {
    linkedin: "",
    instagram: "",
    pinterest: "",
    twitter: "",
  },
};

export const stats = [
  { value: "15+", label: "Years of Experience", icon: "medal" as const },
  { value: "150+", label: "Projects Completed", icon: "building" as const },
  { value: "98%", label: "Client Satisfaction", icon: "users" as const },
  { value: "10+", label: "Industry Awards", icon: "award" as const },
];

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: "compass" | "home" | "renovate" | "sofa" | "clipboard";
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "architecture",
    name: "Architecture",
    shortDescription:
      "Concept-driven designs that blend creativity and functionality.",
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
    slug: "renovation-home-extensions",
    name: "Renovation & Home Extensions",
    shortDescription: "Thoughtful upgrades that respect what's already there.",
    description:
      "From additional floors to full interior overhauls, our renovation teams work around your household's rhythm, blending new construction seamlessly with existing structures for a result that feels like it was always meant to be there.",
    icon: "renovate",
    highlights: [
      "Additional floors & room extensions",
      "Kitchen & bathroom remodels",
      "Structural repair & waterproofing",
      "Facade and courtyard upgrades",
    ],
  },
  {
    slug: "interiors",
    name: "Interiors",
    shortDescription:
      "Beautiful, functional interiors tailored to your lifestyle.",
    description:
      "Our interiors team shapes the experience inside every structure we build — material palettes, lighting, millwork, and furnishing plans that feel considered, livable, and unmistakably yours.",
    icon: "sofa",
    highlights: [
      "Residential interior design & styling",
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
  category: "Residential" | "Renovation" | "Interiors";
  year: string;
  size: string;
  summary: string;
  description: string;
  image: string;
  featured: boolean;
};

// NOTE: These four projects use your real project photography (vv1–vv4.jpg),
// but the names, exact localities, sizes, and years are placeholders —
// swap in your actual project details whenever you have them.
export const projects: Project[] = [
  {
    slug: "padappai-garden-villa",
    name: "Padappai Garden Villa",
    location: "Padappai, Chennai",
    category: "Residential",
    year: "2023",
    size: "3,200 sq ft",
    summary:
      "A palm-shaded family villa built around stone cladding, courtyards, and natural light.",
    description:
      "Set behind a gated compound wall and shaded by mature palms and frangipani trees, this two-storey family villa pairs a clean white plaster facade with local stone cladding at the entrance. Louvred wooden screens filter light into the upper-floor bedrooms, while a covered veranda extends the living area into the garden.",
    image: "/vv1.jpg",
    featured: true,
  },
  {
    slug: "tambaram-modern-residence",
    name: "Tambaram Modern Residence",
    location: "Tambaram, Chennai",
    category: "Residential",
    year: "2024",
    size: "2,800 sq ft",
    summary:
      "A contemporary home in board-formed concrete and timber louvres, built for the evening light.",
    description:
      "Designed around a double-height entrance and a landscaped front lawn, this residence uses exposed concrete, warm timber slat screens, and full-height glazing to stay bright by day and glow from within after dark. A covered carport and paved driveway complete the street-facing elevation.",
    image: "/vv3.jpg",
    featured: true,
  },
  {
    slug: "south-chennai-heritage-restoration",
    name: "Heritage Home Restoration",
    location: "South Chennai",
    category: "Renovation",
    year: "2022",
    size: "2,400 sq ft",
    summary:
      "A sensitive restoration that revived a traditional veranda-and-courtyard home for modern living.",
    description:
      "This restoration preserved the character of a traditional red-oxide veranda — timber columns, a hanging swing, and terracotta roof tiles — while quietly upgrading the structure, wiring, and waterproofing behind the scenes. The result keeps a family's original home intact for another generation.",
    image: "/vv4.jpg",
    featured: true,
  },
  {
    slug: "contemporary-interior-fit-out",
    name: "Contemporary Interior Fit-Out",
    location: "Chennai",
    category: "Interiors",
    year: "2023",
    size: "1,800 sq ft",
    summary:
      "A warm, materials-first interior featuring cane furniture, jaali screens, and courtyard views.",
    description:
      "This interior fit-out pairs a restrained material palette — polished cement flooring, teak furniture, and a hand-carved jaali screen — with large garden-facing windows that keep the living area connected to greenery throughout the day.",
    image: "/vv2.jpg",
    featured: true,
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
      "VV Builders takes on residential construction, villa, renovation, and home-extension projects across South Chennai, including Padappai, Tambaram, and the surrounding areas of Tamil Nadu.",
  },
  {
    question:
      "How long does a typical project take, from design to completion?",
    answer:
      "Timelines vary by scope. A custom home or villa typically runs 8–14 months from initial concept to move-in, while renovations and home extensions usually take 3–8 months depending on size and permitting.",
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
