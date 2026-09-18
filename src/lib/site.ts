export const site = {
  name: "V.V Builders",
  legalName: "V.V Builders",
  shortName: "V.V Builders",

  tagline: "We Build Timeless Spaces. Built Around You.",

  description:
    "V.V Builders is a residential and commercial construction company based in Padappai, Tambaram, Chennai, building homes, villas, renovations, and home extensions across South Chennai.",

  url: "https://www.vvbuilders.co.in",

  email: "info@vvbuilders.co.in",

  phone: "+91 95436 06050",
  phoneRaw: "+919543606050",
  whatsappNumber: "919543606050",

  address: {
    street: "Padappai",
    city: "Tambaram",
    region: "Tamil Nadu",
    postal: "",
    country: "India",
  },

  founded: "2009",

  // Replace with the real profile/page URLs when ready.
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    whatsapp: "",
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
  icon: "home" | "building" | "renovate" | "clipboard";
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "residential-construction",
    name: "Residential Construction",
    shortDescription: "Bespoke homes and villas built with precision and care.",
    description:
      "From independent houses to multi-storey villas, our construction crews execute every stage in-house — foundation, structure, plumbing, electrical, and finishing — with a single point of accountability from groundbreaking to handover.",
    icon: "home",
    highlights: [
      "Custom home & villa construction",
      "Foundation & structural work",
      "Plumbing, electrical & finishing",
      "Licensed, experienced site crews",
    ],
  },
  {
    slug: "commercial-construction",
    name: "Commercial Construction",
    shortDescription: "Durable, code-compliant spaces built for business.",
    description:
      "We build shops, small commercial complexes, and mixed-use buildings engineered for daily wear and long-term operating costs, coordinated closely with owners from approval through fit-out-ready handover.",
    icon: "building",
    highlights: [
      "Shops & small commercial buildings",
      "Mixed-use & multi-unit structures",
      "Approval-ready structural planning",
      "On-time, on-budget delivery",
    ],
  },
  {
    slug: "renovation-home-extensions",
    name: "Renovation & Home Extensions",
    shortDescription: "Thoughtful upgrades that respect what's already there.",
    description:
      "From an additional floor to a full structural overhaul, our renovation teams work around your household's rhythm, tying new construction seamlessly into the existing building for a result that feels like it was always meant to be there.",
    icon: "renovate",
    highlights: [
      "Additional floors & room extensions",
      "Structural repair & waterproofing",
      "Kitchen & bathroom reconstruction",
      "Facade, compound wall & terrace upgrades",
    ],
  },
  {
    slug: "project-management",
    name: "Project Management",
    shortDescription: "Seamless execution from concept to completion.",
    description:
      "A dedicated site engineer owns your schedule, budget, and material procurement end to end, giving you one clear line of communication and predictable delivery at every milestone — no juggling separate contractors.",
    icon: "clipboard",
    highlights: [
      "Budgeting & material cost control",
      "Schedule & milestone tracking",
      "Sub-contractor & vendor coordination",
      "Quality checks & final handover walkthrough",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: "Residential" | "Renovation" | "Commercial";
  status: "Completed" | "Ongoing";
  year: string;
  size: string;
  summary: string;
  description: string;
  image: string;
  gallery?: string[];
  highlights?: string[];
  featured: boolean;
};

// NOTE: These projects use your real project photography (vv1–vv4.jpg),
// but the names, exact localities, sizes, and years are placeholders —
// swap in your actual project details in this file whenever you have them.
export const projects: Project[] = [
  {
    slug: "padappai-garden-villa",
    name: "Padappai Garden Villa",
    location: "Padappai, Chennai",
    category: "Residential",
    status: "Completed",
    year: "2023",
    size: "3,200 sq ft",
    summary:
      "A palm-shaded family villa built around stone cladding, courtyards, and natural light.",
    description:
      "Set behind a gated compound wall and shaded by mature palms and frangipani trees, this two-storey family villa pairs a clean white plaster facade with local stone cladding at the entrance. Louvred wooden screens filter light into the upper-floor bedrooms, while a covered veranda extends the living area into the garden.",
    image: "/vv1.jpg",
    highlights: [
      "Reinforced foundation rated for a future third floor",
      "Stone-clad entrance porch built from locally sourced material",
      "Rainwater harvesting pit integrated into the compound design",
      "Cross-ventilated bedroom layout to cut down on AC running costs",
    ],
    featured: true,
  },
  {
    slug: "tambaram-modern-residence",
    name: "Tambaram Modern Residence",
    location: "Tambaram, Chennai",
    category: "Residential",
    status: "Completed",
    year: "2024",
    size: "2,800 sq ft",
    summary:
      "A contemporary home in board-formed concrete and timber louvres, built for the evening light.",
    description:
      "Designed around a double-height entrance and a landscaped front lawn, this residence uses exposed concrete, warm timber slat screens, and full-height glazing to stay bright by day and glow from within after dark. A covered carport and paved driveway complete the street-facing elevation.",
    image: "/vv3.jpg",
    gallery: ["/vv2.jpg"],
    highlights: [
      "Elevated plinth to stay clear of monsoon-season water levels",
      "Exposed concrete finish specified for Chennai's humidity and heat",
      "Covered carport plus visitor parking within the compound",
      "Warm-toned interior fit-out finished alongside the main build",
    ],
    featured: true,
  },
  {
    slug: "south-chennai-heritage-restoration",
    name: "Heritage Home Restoration",
    location: "South Chennai",
    category: "Renovation",
    status: "Completed",
    year: "2022",
    size: "2,400 sq ft",
    summary:
      "A sensitive restoration that revived a traditional veranda-and-courtyard home for modern living.",
    description:
      "This restoration preserved the character of a traditional red-oxide veranda — timber columns, a hanging swing, and terracotta roof tiles — while quietly upgrading the structure, wiring, and waterproofing behind the scenes. The result keeps a family's original home intact for another generation.",
    image: "/vv4.jpg",
    highlights: [
      "Original timber columns retained and structurally reinforced",
      "Full re-wiring and re-plumbing without disturbing the facade",
      "New terrace waterproofing ahead of the northeast monsoon",
      "Completed while the family continued living on-site",
    ],
    featured: true,
  },
  {
    slug: "guduvanchery-residential-villa",
    name: "Guduvanchery Residential Villa",
    location: "Guduvanchery, Chennai",
    category: "Residential",
    status: "Ongoing",
    year: "2026",
    size: "2,600 sq ft",
    summary: "A three-bedroom independent villa currently at the superstructure stage.",
    description:
      "Foundation and ground-floor structural work are complete; the team is currently casting the first-floor slab. The plan includes an elevated plinth and a dedicated stormwater outlet, both specified for this GST Road-corridor plot's monsoon drainage pattern.",
    image: "",
    featured: false,
  },
  {
    slug: "selaiyur-independent-house",
    name: "Selaiyur Independent House",
    location: "Selaiyur, Chennai",
    category: "Residential",
    status: "Ongoing",
    year: "2026",
    size: "1,950 sq ft",
    summary: "A compact family home in the finishing and fit-out stage.",
    description:
      "Structural work is complete and the site is now in electrical, plumbing, and flooring fit-out. Expected handover is on schedule, with final waterproofing checks planned ahead of the next monsoon season.",
    image: "",
    featured: false,
  },
];

export const completedProjects = projects.filter((p) => p.status === "Completed");
export const ongoingProjects = projects.filter((p) => p.status === "Ongoing");

export type Testimonial = {
  name: string;
  location: string;
  headline: string;
  description: string;
  youtubeId: string;
};

// Add the real YouTube Shorts video ID for each client (the part after
// "shorts/" in the URL) once the videos are ready — leave blank to show
// a "coming soon" placeholder card instead of a broken embed.
export const testimonials: Testimonial[] = [
  {
    name: "Client, Padappai",
    location: "Padappai, Chennai",
    headline: "\"They handled everything, start to finish.\"",
    description:
      "On working with one team for design, approval, and construction without juggling separate contractors.",
    youtubeId: "",
  },
  {
    name: "Client, Tambaram",
    location: "Tambaram, Chennai",
    headline: "\"Our home was ready exactly when they said it would be.\"",
    description: "On staying on schedule through a full monsoon season without delays.",
    youtubeId: "",
  },
  {
    name: "Client, South Chennai",
    location: "South Chennai",
    headline: "\"They restored our old home without losing what made it ours.\"",
    description: "On a heritage restoration that kept the family living on-site throughout.",
    youtubeId: "",
  },
];

export const founder = {
  role: "Founder & Managing Director",
  bio: [
    "V.V Builders was founded on a simple idea: a client should be able to trust one team for their entire project, from the first site visit to the final handover — no confusion between a designer, a contractor, and a site supervisor who have never spoken to each other.",
    "That approach still shapes every project the company takes on today. Every site is personally reviewed at each major milestone, every budget is discussed openly before work begins, and every client gets a direct line to the person actually responsible for their build.",
  ],
};

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
    slug: "house-construction-cost-in-chennai",
    title: "House Construction Cost in Chennai: What to Budget in 2026",
    excerpt:
      "A realistic breakdown of per-square-foot construction rates across Chennai, and what actually changes the number for South Chennai localities like Tambaram and Padappai.",
    content: [
      "The most common question we get from families planning a new home is simple: what will it actually cost per square foot? As of 2026, basic construction in Chennai runs roughly ₹2,000–₹2,150 per sq ft, standard construction (the most commonly chosen tier) runs ₹2,250–₹2,500 per sq ft, and premium construction with higher-end finishes runs ₹2,600–₹3,000 per sq ft.",
      "Location changes the number too. Central Chennai localities like Anna Nagar or Adyar typically run ₹2,800–₹3,500 per sq ft, while South and West Chennai — Tambaram, Padappai, Chromepet, Pallavaram, and the GST Road belt — usually come in lower, around ₹2,100–₹2,400 per sq ft for standard-quality construction, simply because land and logistics costs are lower here.",
      "These rates typically exclude land cost, compound walls, landscaping, and interior furnishings, and you should budget separately for CMDA or local-body approval fees. The single biggest lever on your final number isn't the builder you choose — it's the specification: floor finishes, kitchen fittings, and bathroom fixtures can easily swing a project by ₹300–₹600 per sq ft on their own.",
      "Our advice to every family starting this process: ask any builder for a detailed material specification sheet alongside their per-square-foot quote, not just a single headline number. A quote without a specification is a promise you can't hold anyone to later.",
    ],
    date: "2026-08-20",
    readTime: "6 min read",
    category: "Cost & Budgeting",
  },
  {
    slug: "cmda-vs-panchayat-approval-chennai",
    title: "CMDA vs. Panchayat Approval: What Chennai Homeowners Need to Know",
    excerpt:
      "Building in Padappai, Mudichur, or Guduvanchery? Here's why your plot's approval authority matters before you finalize a construction plan.",
    content: [
      "Not every plot in and around Chennai falls under the same approval authority, and this catches a lot of first-time builders off guard. The Chennai Metropolitan Development Authority (CMDA) governs construction within the Chennai Metropolitan Area. Areas outside that boundary — including large parts of Chengalpattu district such as Padappai, Mudichur, Guduvanchery, Urapakkam, and Vandalur — typically fall under DTCP (Directorate of Town and Country Planning) or the local Panchayat instead.",
      "Why does this matter? The permitted floors, setback requirements, and documentation differ between authorities, and a plan approved for one jurisdiction won't automatically satisfy another. It also affects resale and bank loan approval later — lenders scrutinize approval paperwork closely, so getting it right at the start saves real trouble years down the line.",
      "One detail that surprises a lot of clients: CMDA approvals expire after three years if construction hasn't started, while DTCP approvals don't carry the same expiry. If you've bought a plot and are taking your time to plan, it's worth confirming which authority applies and what your timeline actually is.",
      "Before we draw up a single wall, we confirm which authority your plot falls under and handle the approval paperwork as part of the project — it's one less thing for you to chase between government offices.",
    ],
    date: "2026-07-15",
    readTime: "5 min read",
    category: "Approvals & Compliance",
  },
  {
    slug: "monsoon-proofing-construction-gst-road-belt",
    title: "Building Along the GST Road Belt? Here's How We Plan for the Monsoon",
    excerpt:
      "Mudichur, Selaiyur, Mannivakkam, and Perungalathur see real waterlogging every monsoon. Here's what that means for how a house should actually be built here.",
    content: [
      "If you're building a home in Mudichur, Selaiyur, Mannivakkam, or Perungalathur, you already know these are low-lying areas that see genuine waterlogging during the northeast monsoon. This isn't a reason to avoid building here — these remain some of the most affordable, fast-growing residential belts in South Chennai — but it does change how a house should be designed and built.",
      "The single most effective step is plinth height. We survey the site's historical water levels and neighbouring road levels before finalizing the plinth, so the ground floor sits clear of typical flood lines rather than at the minimum the approval drawing allows.",
      "Beyond that, three things matter most: a compound wall with a proper stormwater outlet instead of a sealed boundary that traps water on your plot, waterproofing at the foundation and terrace applied as a distinct construction stage (not an afterthought), and drainage slope planned around your specific plot rather than a standard layout copied from elsewhere.",
      "None of this adds significant cost if it's planned from day one — it's expensive only when it's retrofitted after the first flooded monsoon. If you're building anywhere along this corridor, ask your builder specifically how they're handling plinth height and stormwater drainage before you approve the plan.",
    ],
    date: "2026-06-22",
    readTime: "6 min read",
    category: "Construction Planning",
  },
  {
    slug: "renovate-or-rebuild-chennai-home",
    title: "Renovate or Rebuild? How to Decide for Your Chennai Home",
    excerpt:
      "A structural checklist for older Chennai homes — when a renovation makes sense, and when it's genuinely cheaper to start over.",
    content: [
      "We get this question constantly from families with a home that's 20–40 years old: is it worth renovating, or should we just rebuild? The honest answer depends less on the home's age and more on three specific things.",
      "First, the foundation and structural frame. If the existing foundation is sound and the structural columns show no cracking or corrosion, renovation is almost always the more economical route — you're preserving the most expensive part of the building. Second, floor-to-ceiling height and layout flexibility: older homes built to older norms sometimes can't accommodate a modern layout without expensive structural changes. Third, the scope of what you actually want changed — a kitchen and bathroom upgrade is a straightforward renovation; adding a full additional floor on an old foundation needs a proper structural assessment first.",
      "Our approach on every renovation enquiry is the same: a structural engineer inspects the existing building before we quote anything. That inspection tells you honestly whether you're looking at a renovation, a renovation with foundation reinforcement, or a rebuild — and it costs far less than discovering the answer halfway through construction.",
    ],
    date: "2026-05-30",
    readTime: "5 min read",
    category: "Renovation",
  },
  {
    slug: "questions-to-ask-a-builder-in-chennai",
    title: "5 Questions to Ask Any Builder Before You Sign a Construction Contract",
    excerpt:
      "What to ask before hiring a construction company in Chennai — the questions that actually reveal whether a builder will deliver.",
    content: [
      "Choosing a builder is one of the largest financial decisions most families make, and most of the risk in a construction project comes down to five questions that are easy to ask and revealing to hear answered.",
      "1. Can I see a completed project I can actually visit? A builder confident in their work will take you to one. 2. Is the quote per square foot backed by a written material specification? A number without a spec sheet is negotiable after you've already committed. 3. Who is my single point of contact on-site, and how often will I get an update? 4. What is your plan for approvals — CMDA, DTCP, or Panchayat — for my specific plot? 5. What happens if the project runs over the agreed timeline — is that written into the contract?",
      "A builder who answers all five clearly and in writing is one worth trusting with a multi-lakh, multi-month commitment. We build our own client agreements around exactly these five points, because we'd want the same clarity if we were the ones hiring.",
    ],
    date: "2026-05-08",
    readTime: "5 min read",
    category: "Hiring a Builder",
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
    question: "What areas does V.V Builders serve?",
    answer:
      "V.V Builders takes on residential and commercial construction, renovation, and home-extension projects across South Chennai — including Padappai, Tambaram, Chromepet, Pallavaram, Selaiyur, Guduvanchery, and the surrounding areas of Chengalpattu district.",
  },
  {
    question: "How long does a typical project take, from start to completion?",
    answer:
      "Timelines vary by scope. A custom home or villa typically runs 8–14 months from foundation to move-in, while renovations and home extensions usually take 3–8 months depending on size and approval requirements.",
  },
  {
    question: "Do you provide architectural design too?",
    answer:
      "Our core expertise is construction — we are builders first. If you need architectural drawings or a fresh design, we can arrange a trusted architect to prepare your plans, then take over full construction and project management from that point through handover.",
  },
  {
    question: "Can V.V Builders work with an architect I've already hired?",
    answer:
      "Absolutely. We regularly execute construction for plans prepared by independent architects, joining as the construction and project management team while following the approved design exactly.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Share your project details through our contact form, call us, or message us on WhatsApp. We'll schedule a site visit to understand scope before providing a detailed, itemized quote.",
  },
];
