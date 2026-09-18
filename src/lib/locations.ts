export type Location = {
  slug: string;
  name: string;
  isPrimary?: boolean;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  context: string[];
  landmarks: string[];
};

// The Chennai pillar page links to every locality below, and every
// locality page links back to it — keep new areas added here in sync
// with the footer's "Areas We Serve" list (src/components/Footer.tsx
// reads this file directly, so no separate edit is needed there).
export const locations: Location[] = [
  {
    slug: "chennai",
    name: "Chennai",
    isPrimary: true,
    h1: "Chennai's Trusted Residential & Commercial Construction Company",
    metaTitle: "Best Construction Company in Chennai | V.V Builders",
    metaDescription:
      "V.V Builders is a residential and commercial construction company serving Tambaram, Padappai, Chromepet, Pallavaram, and South Chennai — homes, villas, renovations, and extensions built end to end.",
    intro:
      "V.V Builders builds homes, villas, and commercial spaces across South Chennai's Tambaram–Chengalpattu belt, from established neighbourhoods inside Tambaram City Corporation to fast-growing Panchayat areas along GST Road.",
    context: [
      "South Chennai spans very different jurisdictions in a short distance — CMDA limits, the newer Tambaram City Municipal Corporation, and DTCP or Panchayat-governed areas in Chengalpattu district all sit within a few kilometres of each other. Each comes with its own approval process, and getting that wrong is the single most common reason a construction project stalls.",
      "It's also a region with real, well-documented monsoon drainage challenges along the GST Road corridor. We plan plinth height, stormwater outlets, and waterproofing around each site's actual conditions, not a generic template.",
    ],
    landmarks: [],
  },
  {
    slug: "tambaram",
    name: "Tambaram",
    h1: "Best Construction Company in Tambaram, Chennai",
    metaTitle: "Best Construction Company in Tambaram | V.V Builders",
    metaDescription:
      "Residential and commercial construction in Tambaram, Chennai — homes, villas, renovations, and extensions built by a local team that knows the area.",
    intro:
      "Tambaram is our home base, and one of South Chennai's most established residential hubs — well connected by the Chennai Suburban Railway and GST Road, with a mix of independent houses, villas, and smaller apartment developments.",
    context: [
      "Tambaram was upgraded to a full Municipal Corporation, which changed how building plan approvals are processed here compared to the surrounding Panchayat areas — we handle that paperwork as part of every project so it's one less thing for you to navigate.",
      "Plot sizes and street widths vary block to block in Tambaram, so we start every quote with an actual site visit rather than a generic per-square-foot number.",
    ],
    landmarks: ["Tambaram Railway Station", "GST Road", "Tambaram Sanatorium"],
  },
  {
    slug: "east-tambaram",
    name: "East Tambaram",
    h1: "Best Construction Company in East Tambaram",
    metaTitle: "Best Construction Company in East Tambaram | V.V Builders",
    metaDescription:
      "Trusted residential construction, renovation, and home extensions in East Tambaram, Chennai.",
    intro:
      "East Tambaram is a predominantly residential neighbourhood close to Tambaram Railway Station, popular with families for its access to schools, hospitals, and daily conveniences within walking distance.",
    context: [
      "Most East Tambaram plots fall within Tambaram City Corporation limits, which affects the approval process and permitted building height compared to Panchayat areas nearby — we confirm this for you before finalizing any plan.",
      "Because it's a mature, built-up locality, construction here often means working on tighter, already-defined plots — our teams are used to coordinating with immediate neighbours and managing site logistics on narrower streets.",
    ],
    landmarks: ["Tambaram Railway Station", "Tambaram Sanatorium"],
  },
  {
    slug: "west-tambaram",
    name: "West Tambaram",
    h1: "Best Construction Company in West Tambaram",
    metaTitle: "Best Construction Company in West Tambaram | V.V Builders",
    metaDescription:
      "Residential and commercial construction in West Tambaram, Chennai, including plots along the GST Road corridor prone to monsoon waterlogging.",
    intro:
      "West Tambaram sits along the GST Road corridor, an area that has seen fast plotted-development growth over the past decade alongside some genuine monsoon-season waterlogging in its lower-lying pockets.",
    context: [
      "We treat plinth height and stormwater drainage as non-negotiable planning steps for any West Tambaram site, based on the road level and drainage pattern of that specific plot.",
      "Depending on the exact street, a West Tambaram plot may fall under Corporation or Panchayat jurisdiction — we verify this before submitting any approval paperwork.",
    ],
    landmarks: ["GST Road", "Tambaram West Bus Terminus"],
  },
  {
    slug: "padappai",
    name: "Padappai",
    h1: "Best Construction Company in Padappai, Chennai",
    metaTitle: "Best Construction Company in Padappai | V.V Builders",
    metaDescription:
      "V.V Builders is based in Padappai, Chennai, building villas, independent homes, and renovations for families across the area.",
    intro:
      "Padappai is where V.V Builders is based, and where we've built our longest-standing relationships — a quieter, Panchayat-administered part of Chengalpattu district known for larger plot sizes and independent villa construction.",
    context: [
      "Because Padappai typically falls outside CMDA limits, approvals here usually go through DTCP or the local Panchayat rather than CMDA — a distinction that affects your building height, setbacks, and paperwork.",
      "Larger, more flexible plot sizes here mean more room for gardens, courtyards, and future extensions — something we factor into the foundation and structural plan from day one, even if a client isn't building it all now.",
    ],
    landmarks: ["Padappai Bus Terminus", "GST Road"],
  },
  {
    slug: "mudichur",
    name: "Mudichur",
    h1: "Best Construction Company in Mudichur, Chennai",
    metaTitle: "Best Construction Company in Mudichur | V.V Builders",
    metaDescription:
      "Construction and renovation in Mudichur, Chennai, built with monsoon drainage and plinth height planned specifically for this GST Road-belt locality.",
    intro:
      "Mudichur is one of South Chennai's fastest-growing, most affordable residential belts — and also one with a well-documented history of monsoon waterlogging that shapes how we approach every build here.",
    context: [
      "We survey historical water levels and neighbouring road levels before setting plinth height on any Mudichur site, rather than building to the bare approval minimum.",
      "A proper stormwater outlet in the compound wall, foundation waterproofing as its own construction stage, and site-specific drainage slope are standard on every Mudichur project we take on — not optional upgrades.",
    ],
    landmarks: ["GST Road", "Mudichur Bus Terminus"],
  },
  {
    slug: "mannivakkam",
    name: "Mannivakkam",
    h1: "Best Construction Company in Mannivakkam, Chennai",
    metaTitle: "Best Construction Company in Mannivakkam | V.V Builders",
    metaDescription:
      "Residential construction and home extensions in Mannivakkam, Chennai, from a builder that plans around this GST Road-belt locality's drainage conditions.",
    intro:
      "Mannivakkam, just off the GST Road belt near Mudichur and Tambaram, has become a popular choice for first-time home builders thanks to comparatively affordable land and steady infrastructure growth.",
    context: [
      "Like its neighbouring localities along this corridor, Mannivakkam sees seasonal waterlogging in low-lying stretches — plinth height and drainage planning are built into our process here from the first site visit.",
      "Most plots in Mannivakkam are approved through DTCP or Panchayat channels rather than CMDA; we manage that approval process as part of the project.",
    ],
    landmarks: ["GST Road", "Mudichur–Mannivakkam Main Road"],
  },
  {
    slug: "manimangalam",
    name: "Manimangalam",
    h1: "Best Construction Company in Manimangalam, Chennai",
    metaTitle: "Best Construction Company in Manimangalam | V.V Builders",
    metaDescription:
      "Independent home and villa construction in Manimangalam, Chennai, a quieter Chengalpattu-district locality bordering Tambaram.",
    intro:
      "Manimangalam offers a quieter, semi-rural setting bordering Tambaram, with generally larger plot sizes than the more built-up localities closer to GST Road — well suited to independent villas with room to grow.",
    context: [
      "As a Panchayat-governed part of Chengalpattu district, Manimangalam's approval process runs through DTCP or the local Panchayat, and permitted building parameters differ from Corporation areas nearby.",
      "Larger plots here give us room to plan for future extensions, a garden, or a second structure without cramping the main house — worth discussing at the design stage even if it's not part of the first phase.",
    ],
    landmarks: ["Tambaram–Manimangalam Road"],
  },
  {
    slug: "perungalathur",
    name: "Perungalathur",
    h1: "Best Construction Company in Perungalathur, Chennai",
    metaTitle: "Best Construction Company in Perungalathur | V.V Builders",
    metaDescription:
      "Residential construction and renovation in Perungalathur, Chennai, well connected by suburban rail and GST Road.",
    intro:
      "Perungalathur combines strong suburban rail connectivity with a mix of independent houses and apartment developments along the GST Road corridor, making it one of South Chennai's more accessible growth areas.",
    context: [
      "Perungalathur sits within the same monsoon-affected GST Road belt as its neighbouring localities — we plan plinth height and stormwater drainage accordingly on every site here.",
      "Good rail and road access make Perungalathur practical for both a primary residence and a small commercial build — we handle both under one roof.",
    ],
    landmarks: ["Perungalathur Railway Station", "GST Road"],
  },
  {
    slug: "vandalur",
    name: "Vandalur",
    h1: "Best Construction Company in Vandalur, Chennai",
    metaTitle: "Best Construction Company in Vandalur | V.V Builders",
    metaDescription:
      "Residential and commercial construction in Vandalur, Chennai, a growing Chengalpattu-district locality on GST Road.",
    intro:
      "Best known for the Arignar Anna Zoological Park, Vandalur has grown steadily as an affordable, well-connected locality along GST Road, with a mix of Corporation and Panchayat-administered pockets.",
    context: [
      "We confirm whether a given Vandalur plot falls under CMDA, DTCP, or Panchayat jurisdiction before drawing up any plan — the approval path and permitted building parameters differ between them.",
      "Vandalur's continued infrastructure growth makes it a practical choice for both new home construction and small commercial builds, which we handle under the same project management team.",
    ],
    landmarks: ["Arignar Anna Zoological Park", "GST Road", "Vandalur Railway Station"],
  },
  {
    slug: "urapakkam",
    name: "Urapakkam",
    h1: "Best Construction Company in Urapakkam, Chennai",
    metaTitle: "Best Construction Company in Urapakkam | V.V Builders",
    metaDescription:
      "Independent home construction in Urapakkam, Chennai, a Village Panchayat locality in Chengalpattu district's Vandalur taluk.",
    intro:
      "Urapakkam is a Village Panchayat locality in Vandalur taluk that's transitioning from a rural setting into a suburban one, with rising demand for independent family homes on newly developed plots.",
    context: [
      "Construction approvals in Urapakkam run through the Panchayat or DTCP rather than CMDA — we handle this paperwork so you're not navigating multiple government offices yourself.",
      "As a developing area, infrastructure like drainage and road levels can vary significantly street to street; our site survey accounts for this before we finalize a plinth height.",
    ],
    landmarks: ["Vandalur–Urapakkam Road", "GST Road"],
  },
  {
    slug: "guduvanchery",
    name: "Guduvanchery",
    h1: "Best Construction Company in Guduvanchery, Chennai",
    metaTitle: "Best Construction Company in Guduvanchery | V.V Builders",
    metaDescription:
      "Residential and commercial construction in Guduvanchery, Chennai, an industrial and residential hub on GST Road with suburban rail access.",
    intro:
      "Guduvanchery is a mixed industrial and residential hub along GST Road, with strong suburban rail connectivity driving steady demand for both new homes and small commercial construction.",
    context: [
      "The mix of residential and light-industrial activity in Guduvanchery means construction here often needs to account for nearby commercial traffic and utility access — something our site planning factors in early.",
      "As with the rest of this GST Road belt, we plan drainage and plinth height around the monsoon conditions specific to each plot rather than a standard template.",
    ],
    landmarks: ["Guduvanchery Railway Station", "GST Road"],
  },
  {
    slug: "selaiyur",
    name: "Selaiyur",
    h1: "Best Construction Company in Selaiyur, Chennai",
    metaTitle: "Best Construction Company in Selaiyur | V.V Builders",
    metaDescription:
      "Residential construction and renovation in Selaiyur, Chennai, planned around this South Chennai locality's known monsoon drainage patterns.",
    intro:
      "Selaiyur has seen strong residential price growth in recent years, but it's also a locality with well-known monsoon-season waterlogging — a reality we plan around on every project here rather than treat as an afterthought.",
    context: [
      "Site-specific plinth height, a compound wall with a real stormwater outlet, and dedicated foundation and terrace waterproofing are standard on every Selaiyur build we take on.",
      "We survey the surrounding road and drainage levels before finalizing any plan, not just the plot itself, since water behaviour in Selaiyur is very much a neighbourhood-level pattern.",
    ],
    landmarks: ["Selaiyur Main Road", "Tambaram–Velachery Main Road"],
  },
  {
    slug: "medavakkam",
    name: "Medavakkam",
    h1: "Best Construction Company in Medavakkam, Chennai",
    metaTitle: "Best Construction Company in Medavakkam | V.V Builders",
    metaDescription:
      "Residential construction and home extensions in Medavakkam, Chennai, a popular IT-adjacent South Chennai suburb.",
    intro:
      "Medavakkam is a well-established, IT-adjacent residential suburb bordering Sholinganallur, Velachery, and Keelkattalai — home to a mix of independent houses, villas, and apartment developments.",
    context: [
      "Medavakkam is administered by a Village Panchayat, which affects the approval process for new construction compared to Corporation-governed neighbourhoods nearby — we confirm this before any plan is finalized.",
      "As a dense, established suburb, Medavakkam construction often involves tighter plots and close-set neighbours — our teams are experienced at managing site access and shared-boundary work carefully.",
    ],
    landmarks: ["Medavakkam Junction", "Medavakkam–Sholinganallur Main Road"],
  },
  {
    slug: "chromepet",
    name: "Chromepet",
    h1: "Best Construction Company in Chromepet, Chennai",
    metaTitle: "Best Construction Company in Chromepet | V.V Builders",
    metaDescription:
      "Residential and commercial construction in Chromepet, Chennai, an established suburban railway-connected locality.",
    intro:
      "Chromepet is a well-developed, established residential locality served by its own suburban railway station, with a settled infrastructure that makes renovation and infill construction just as common as new builds.",
    context: [
      "Chromepet now falls under Tambaram City Municipal Corporation, which changed the local approval process from what it was under the earlier municipal structure — we keep our paperwork current with this.",
      "Because Chromepet is largely built out, a lot of our work here is renovation, additional floors, and careful new construction on infill plots between existing homes.",
    ],
    landmarks: ["Chromepet Railway Station", "GST Road", "200 Feet Road"],
  },
  {
    slug: "pallavaram",
    name: "Pallavaram",
    h1: "Best Construction Company in Pallavaram, Chennai",
    metaTitle: "Best Construction Company in Pallavaram | V.V Builders",
    metaDescription:
      "Residential and commercial construction in Pallavaram, Chennai, close to Chennai Airport with established infrastructure.",
    intro:
      "Pallavaram is one of South Chennai's older, more established localities, sitting on GST Road close to Chennai International Airport, with mature infrastructure and a mix of residential and commercial activity.",
    context: [
      "Pallavaram's municipal structure has evolved into Tambaram City Municipal Corporation, which governs the current building approval process here.",
      "Proximity to the airport and GST Road makes Pallavaram a practical location for small commercial construction alongside residential work, and we handle both under one project team.",
    ],
    landmarks: ["Chennai International Airport", "GST Road", "Pallavaram Bus Depot"],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export const secondaryLocations = locations.filter((l) => !l.isPrimary);
