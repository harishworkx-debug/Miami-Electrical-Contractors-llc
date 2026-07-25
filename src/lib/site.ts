export const site = {
  name: "Miami Electrical Contractors LLC",
  short: "Miami Electrical Contractors",
  phone: "+1 (305) 610-2998",
  phoneHref: "tel:+13056102998",
  whatsapp: "https://wa.me/13056102998",
  address: "2121 Biscayne Blvd #1099, Miami, FL 33137",
  street: "2121 Biscayne Blvd #1099",
  city: "Miami",
  state: "FL",
  zip: "33137",
  hours: "Open 24 Hours · Mon – Sun",
  email: "estimates@miamielectricalcontractors.com",
  tagline: "Veteran-Owned Electrical Contractor · Miami, FL",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  hero: string;
  image: string;
  benefits: string[];
  problems: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
  body: string;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services: Service[] = [
  {
    slug: "residential-electrical",
    title: "Residential Electrical",
    short: "Whole-home electrical service for Miami homeowners — from outlets to full rewires.",
    hero: "Premium residential electrical service across Miami and South Florida.",
    image: img("photo-1558002038-1055907df827"),
    benefits: [
      "Licensed, insured & veteran-owned",
      "Same-day appointments across Miami",
      "Flat, upfront pricing — no surprises",
      "Clean, code-compliant workmanship",
    ],
    problems: [
      "Flickering lights or dimming outlets",
      "Breakers that trip repeatedly",
      "Outdated aluminum or knob-and-tube wiring",
      "Burning smell or discoloration at outlets",
    ],
    process: [
      { title: "Free Estimate", body: "We diagnose the issue in-home and quote a fixed price before any work begins." },
      { title: "Scheduled Service", body: "A licensed electrician arrives on-time with the parts and tools required." },
      { title: "Code-Compliant Repair", body: "All work meets NEC and City of Miami permitting standards." },
      { title: "Final Walkthrough", body: "We test every circuit, clean the workspace and warranty the job." },
    ],
    faqs: [
      { q: "Do you offer 24-hour residential service?", a: "Yes. We dispatch a licensed electrician anywhere in Miami-Dade 24/7 for emergencies." },
      { q: "Can you handle full home rewires?", a: "Absolutely — we specialize in older Miami homes, condo remodels and new construction rewiring." },
    ],
    related: ["electrical-wiring", "electrical-panel-upgrades", "lighting-installation"],
    body: "From single-family homes in Coral Gables to high-rise condos in Brickell, our residential electricians handle every job with the precision of a commercial contractor. We install, repair and upgrade every circuit in your home — always to code, always on time.",
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical",
    short: "Turn-key commercial electrical for retail, offices, restaurants and multi-tenant buildings.",
    hero: "Commercial electrical contractors trusted by Miami's operators and developers.",
    image: img("photo-1497366216548-37526070297c"),
    benefits: [
      "Minimized downtime for open businesses",
      "After-hours and weekend scheduling",
      "Full-service design-build capability",
      "Preventive maintenance contracts",
    ],
    problems: [
      "Overloaded panels or aging service",
      "Life-safety and emergency lighting failures",
      "Tenant build-out timelines slipping",
      "Non-compliant signage or exterior lighting",
    ],
    process: [
      { title: "Site Walk & Scope", body: "We meet with owners and GCs to scope the electrical package end-to-end." },
      { title: "Permit & Plans", body: "We handle City of Miami permits, sealed drawings and utility coordination." },
      { title: "Install & Commission", body: "Certified journeymen deliver clean installs on aggressive commercial timelines." },
      { title: "Handoff & Support", body: "Documentation, warranty and optional preventive maintenance." },
    ],
    faqs: [
      { q: "Do you work after hours?", a: "Yes. We regularly schedule nights and weekends to keep your business open during the day." },
      { q: "Can you pull permits?", a: "We are a licensed Florida electrical contractor and handle every permit ourselves." },
    ],
    related: ["industrial-electrical", "electrical-panel-upgrades", "emergency-electrical-repairs"],
    body: "We serve Miami's most demanding operators — restaurants on Ocean Drive, offices in Brickell, retail across Coral Gables and multi-family projects across South Florida. Our commercial team is built to work fast, safely, and to spec.",
  },
  {
    slug: "industrial-electrical",
    title: "Industrial Electrical",
    short: "Heavy-power industrial electrical for warehouses, plants and logistics facilities.",
    hero: "Industrial electrical service for Miami's warehouses, plants and logistics hubs.",
    image: img("photo-1581091870627-3d1c1c1c0b1f"),
    benefits: [
      "3-phase power design and install",
      "Motor controls, VFDs & PLC wiring",
      "Preventive and predictive maintenance",
      "Arc-flash and safety compliance",
    ],
    problems: [
      "Motor overloads and unplanned downtime",
      "Aging switchgear and MCCs",
      "OSHA and NFPA 70E compliance gaps",
      "Insufficient service capacity for expansion",
    ],
    process: [
      { title: "Assessment", body: "Full electrical audit including thermal imaging and load analysis." },
      { title: "Engineering", body: "We spec equipment, coordinate with utility and stamp drawings as needed." },
      { title: "Installation", body: "Journeymen with industrial experience execute on your production schedule." },
      { title: "Commissioning", body: "Documented testing, arc-flash labeling and operator training." },
    ],
    faqs: [
      { q: "Can you service manufacturing lines?", a: "Yes — we support motor controls, VFDs, PLC wiring, conveyors and automated equipment." },
      { q: "Do you offer preventive maintenance contracts?", a: "Yes. We build tailored PM programs to eliminate unplanned downtime." },
    ],
    related: ["commercial-electrical", "electrical-maintenance", "electrical-panel-upgrades"],
    body: "Industrial facilities can't afford downtime. Our industrial team specializes in high-capacity power distribution, motor controls, switchgear and life-safety systems across South Florida.",
  },
  {
    slug: "electrical-wiring",
    title: "Electrical Wiring & Rewiring",
    short: "Complete home and business rewiring — safe, code-compliant, and built to last decades.",
    hero: "Complete electrical wiring and rewiring across Miami.",
    image: img("photo-1621905252507-b35492cc74b4"),
    benefits: [
      "Removes fire risk from old wiring",
      "Adds capacity for modern appliances",
      "Increases property value & insurability",
      "10-year workmanship warranty",
    ],
    problems: [
      "Aluminum, cloth or knob-and-tube wiring",
      "Two-prong outlets throughout the home",
      "Frequently tripping breakers",
      "Warm outlets or discolored switch plates",
    ],
    process: [
      { title: "Inspection", body: "We map your existing wiring and identify every safety concern." },
      { title: "Design", body: "We plan the rewire in phases so you keep power throughout." },
      { title: "Rewire", body: "New copper runs, updated devices and grounded outlets throughout." },
      { title: "Inspection & Warranty", body: "Final city inspection and a 10-year workmanship warranty." },
    ],
    faqs: [
      { q: "How long does a rewire take?", a: "Most single-family Miami homes are rewired in 3–7 working days depending on size and access." },
      { q: "Will you patch the drywall?", a: "Yes. We minimize wall openings and offer full patch, texture and paint restoration." },
    ],
    related: ["residential-electrical", "electrical-panel-upgrades", "electrical-safety-inspection"],
    body: "Old wiring is Miami's #1 residential fire risk. We handle full and partial rewires with minimal disruption — from historic homes in Coral Gables to high-rise units in Brickell.",
  },
  {
    slug: "electrical-panel-upgrades",
    title: "Electrical Panel Upgrades",
    short: "Upgrade to 200A / 400A service — safely power EVs, AC systems and modern appliances.",
    hero: "Modern electrical panel upgrades and service changes in Miami.",
    image: img("photo-1558618666-fcd25c85cd64"),
    benefits: [
      "200A, 320A & 400A service upgrades",
      "EV charger and solar-ready panels",
      "Removes obsolete FPE / Zinsco panels",
      "Handled with FPL & permits included",
    ],
    problems: [
      "Federal Pacific or Zinsco panel installed",
      "Not enough breaker slots for new circuits",
      "Panel humming, warm to the touch or scorched",
      "Home cannot support EV charger or new AC",
    ],
    process: [
      { title: "Load Calculation", body: "We size the new service to your current and future power needs." },
      { title: "Permit & FPL", body: "We coordinate the meter pull, permits and inspections." },
      { title: "Install", body: "New panel, grounding, surge protection and clean labeling." },
      { title: "Inspection", body: "City sign-off plus warranty documentation." },
    ],
    faqs: [
      { q: "Do I need a permit for a panel upgrade?", a: "Yes — every service change requires a permit. We handle it for you." },
      { q: "How long is power off?", a: "Typically 4–8 hours on the day of the upgrade." },
    ],
    related: ["electrical-wiring", "residential-electrical", "commercial-electrical"],
    body: "A modern electrical panel is the backbone of your home. We install SquareD, Siemens and Eaton panels with whole-home surge protection standard.",
  },
  {
    slug: "lighting-installation",
    title: "Lighting Installation",
    short: "Architectural, recessed and landscape lighting design that transforms every space.",
    hero: "Architectural and interior lighting installation in Miami.",
    image: img("photo-1513506003901-1e6a229e2d15"),
    benefits: [
      "Recessed, cove & accent lighting",
      "Smart / dimmer / scene controls",
      "Energy-efficient LED throughout",
      "Designer-led layout planning",
    ],
    problems: [
      "Dark rooms or uneven light",
      "Outdated fluorescent fixtures",
      "No dimming or smart control",
      "Poor kitchen or bath task lighting",
    ],
    process: [
      { title: "Design", body: "Layout of every fixture, switch leg and control scene." },
      { title: "Rough-In", body: "Clean, precise cuts and code-compliant wiring." },
      { title: "Trim & Commission", body: "Fixtures set, dimmers tuned, scenes programmed." },
      { title: "Walkthrough", body: "We tour every space with you and adjust to taste." },
    ],
    faqs: [
      { q: "Can you install smart lighting?", a: "Yes — Lutron Caseta, RA3, Control4 and other smart systems." },
      { q: "Do you patch ceilings?", a: "Yes. We offer full patch and paint restoration." },
    ],
    related: ["outdoor-lighting", "residential-electrical", "commercial-electrical"],
    body: "Great lighting turns a good space into a stunning one. Our team designs and installs premium lighting for luxury homes, restaurants and offices across Miami.",
  },
  {
    slug: "outdoor-lighting",
    title: "Outdoor Lighting",
    short: "Landscape, security and architectural exterior lighting for Miami properties.",
    hero: "Outdoor and landscape lighting for Miami homes and businesses.",
    image: img("photo-1470770841072-f978cf4d019e"),
    benefits: [
      "Low-voltage landscape design",
      "Security and motion lighting",
      "Pool, patio & pergola lighting",
      "Weatherproof, hurricane-rated fixtures",
    ],
    problems: [
      "Dark walkways or entry points",
      "Insecure exterior at night",
      "Faded or corroded fixtures",
      "No pathway or landscape accent lighting",
    ],
    process: [
      { title: "Site Walk", body: "Evening walkthrough to plan effect and coverage." },
      { title: "Design", body: "Fixture selection, wattage and control zones." },
      { title: "Install", body: "Buried low-voltage runs, sealed connections and transformers." },
      { title: "Tuning", body: "Aim fixtures, program timers and photo cells." },
    ],
    faqs: [
      { q: "Is landscape lighting hurricane rated?", a: "Yes — we use marine-grade brass, bronze and stainless fixtures rated for coastal exposure." },
      { q: "Can I control it from my phone?", a: "Yes. Smart transformers with app control are standard on our premium installs." },
    ],
    related: ["lighting-installation", "residential-electrical", "commercial-electrical"],
    body: "Miami's climate demands corrosion-proof, waterproof landscape lighting. We install brass and bronze fixtures with sealed connectors designed for South Florida's salt air.",
  },
  {
    slug: "emergency-electrical-repairs",
    title: "Emergency Electrical Repairs",
    short: "24/7 emergency electrician — power outages, sparking outlets, tripped mains, fire risk.",
    hero: "24/7 emergency electrical repair across Miami.",
    image: img("photo-1607472586893-edb57bdc0e39"),
    benefits: [
      "Live dispatcher — 24/7/365",
      "60-minute response in Miami-Dade",
      "Fully-stocked emergency vans",
      "Transparent emergency pricing",
    ],
    problems: [
      "No power to home or business",
      "Sparking outlets or burning smell",
      "Storm or flood-damaged electrical",
      "Breaker won't reset",
    ],
    process: [
      { title: "Call", body: "Live dispatcher picks up 24/7 and confirms ETA." },
      { title: "Make Safe", body: "First priority is de-energizing any life-safety issue." },
      { title: "Diagnose & Fix", body: "We locate the fault and repair on the spot when possible." },
      { title: "Restore & Report", body: "Full write-up of the fault, fix and any follow-up work." },
    ],
    faqs: [
      { q: "Are you really 24 hours?", a: "Yes — 365 nights a year we have a licensed electrician on call." },
      { q: "How fast can you get here?", a: "60 minutes or less almost anywhere in Miami-Dade County." },
    ],
    related: ["electrical-troubleshooting", "electrical-panel-upgrades", "electrical-maintenance"],
    body: "When the power goes out or an outlet starts sparking, minutes matter. We answer live 24/7 and dispatch a licensed emergency electrician anywhere in Miami-Dade.",
  },
  {
    slug: "electrical-troubleshooting",
    title: "Electrical Troubleshooting",
    short: "Track down intermittent electrical faults quickly — with the right tools and experience.",
    hero: "Expert electrical troubleshooting across Miami.",
    image: img("photo-1581092160607-ee22621dd758"),
    benefits: [
      "Thermal imaging & circuit tracing",
      "Fixed-fee diagnostic pricing",
      "Clear written report of findings",
      "Same-day repair when possible",
    ],
    problems: [
      "Half the outlets in a room stopped working",
      "Random breaker trips at night",
      "Lights dim when appliances run",
      "GFCI won't reset",
    ],
    process: [
      { title: "Interview", body: "We ask the right questions to narrow the fault fast." },
      { title: "Trace", body: "Circuit tracers, thermal cameras and meters isolate the problem." },
      { title: "Repair", body: "We fix the root cause, not just the symptom." },
      { title: "Verify", body: "Load-tested and re-verified before we leave." },
    ],
    faqs: [
      { q: "Do you charge to diagnose?", a: "We charge a flat, upfront diagnostic fee credited toward the repair." },
      { q: "Can you fix same day?", a: "Most residential faults are repaired on the first visit." },
    ],
    related: ["emergency-electrical-repairs", "electrical-maintenance", "residential-electrical"],
    body: "Intermittent electrical faults can be dangerous — and expensive if the wrong electrician chases the wrong symptom. Our team uses professional diagnostic gear to find the root cause fast.",
  },
  {
    slug: "electrical-maintenance",
    title: "Electrical Maintenance",
    short: "Preventive maintenance plans that eliminate downtime and extend equipment life.",
    hero: "Preventive electrical maintenance for Miami businesses.",
    image: img("photo-1581094794329-c8112a89af12"),
    benefits: [
      "Scheduled quarterly & annual visits",
      "Thermal imaging on panels & switchgear",
      "Priority emergency dispatch",
      "Reporting for insurance & compliance",
    ],
    problems: [
      "Unexpected outages during business hours",
      "Failed insurance electrical inspections",
      "Missing arc-flash labeling",
      "No documented electrical maintenance history",
    ],
    process: [
      { title: "Baseline Audit", body: "Full initial audit and asset list." },
      { title: "Program Design", body: "Tailored PM schedule for your facility." },
      { title: "Scheduled Visits", body: "Recurring visits with formal reports." },
      { title: "Priority Support", body: "PM customers get priority emergency response." },
    ],
    faqs: [
      { q: "What size businesses do you cover?", a: "From single-location retail to multi-site industrial operators." },
      { q: "Do you provide reports?", a: "Yes — every visit includes a formal report suitable for insurance." },
    ],
    related: ["commercial-electrical", "industrial-electrical", "emergency-electrical-repairs"],
    body: "Preventive electrical maintenance is the cheapest insurance policy a Miami business can buy. Our PM programs are engineered to keep you online.",
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

export type Location = {
  slug: string;
  city: string;
  region: string;
  hero: string;
  landmarks: string[];
  image: string;
  faqs: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: "miami-fl",
    city: "Miami",
    region: "Miami, FL",
    hero: "Miami's veteran-owned electrical contractor — 24/7 service across the city.",
    landmarks: ["Wynwood", "Design District", "Little Havana", "Edgewater", "Midtown"],
    image: img("photo-1535498730771-e735b998cd64"),
    faqs: [
      { q: "Do you cover all of Miami 24/7?", a: "Yes — we dispatch anywhere in the City of Miami around the clock." },
      { q: "Are you licensed in Florida?", a: "Yes — fully licensed Florida electrical contractor and insured." },
    ],
  },
  {
    slug: "miami-beach-fl",
    city: "Miami Beach",
    region: "Miami Beach, FL",
    hero: "Trusted electricians for Miami Beach homes, hotels and restaurants.",
    landmarks: ["South Beach", "Ocean Drive", "Lincoln Road", "Mid-Beach", "Sunset Harbour"],
    image: img("photo-1501509497947-782640bc1412"),
    faqs: [
      { q: "Do you service hotel and hospitality clients?", a: "Yes — we support restaurants, hotels and hospitality operators throughout Miami Beach." },
      { q: "Can you work overnight to avoid guest disruption?", a: "Absolutely. Overnight and off-hours scheduling is standard for our hospitality clients." },
    ],
  },
  {
    slug: "coral-gables-fl",
    city: "Coral Gables",
    region: "Coral Gables, FL",
    hero: "Premium electrical service for Coral Gables estates and businesses.",
    landmarks: ["Miracle Mile", "Merrick Park", "Biltmore", "Cocoplum", "Riviera"],
    image: img("photo-1568605114967-8130f3a36994"),
    faqs: [
      { q: "Do you work on historic Coral Gables homes?", a: "Yes — we specialize in careful rewires and upgrades in historic properties." },
      { q: "Can you coordinate with our architect?", a: "Yes. We regularly work alongside Coral Gables architects and interior designers." },
    ],
  },
  {
    slug: "brickell-fl",
    city: "Brickell",
    region: "Brickell, Miami, FL",
    hero: "High-rise and luxury condo electrical service in Brickell.",
    landmarks: ["Brickell City Centre", "Mary Brickell Village", "Brickell Key", "SLS", "Four Seasons"],
    image: img("photo-1519501025264-65ba15a82390"),
    faqs: [
      { q: "Can you work in high-rise condos?", a: "Yes — we're familiar with condo association rules, COIs and building requirements." },
      { q: "Do you provide COIs?", a: "Yes. We deliver COIs for any Brickell building on request." },
    ],
  },
  {
    slug: "downtown-miami-fl",
    city: "Downtown Miami",
    region: "Downtown Miami, FL",
    hero: "Commercial and residential electricians serving Downtown Miami.",
    landmarks: ["Bayfront Park", "Kaseya Center", "Miami Worldcenter", "Brickell Avenue", "Government Center"],
    image: img("photo-1506929562872-bb421503ef21"),
    faqs: [
      { q: "Do you handle office build-outs?", a: "Yes — we deliver tenant improvements and commercial build-outs across Downtown Miami." },
      { q: "Can you service after hours?", a: "Yes, nights and weekends are common for our downtown clients." },
    ],
  },
  {
    slug: "north-miami-fl",
    city: "North Miami",
    region: "North Miami, FL",
    hero: "Residential, commercial and industrial electricians serving North Miami.",
    landmarks: ["Biscayne Boulevard", "Keystone Point", "Sans Souci", "MOCA", "Oleta River"],
    image: img("photo-1519692933481-e162a57d6721"),
    faqs: [
      { q: "Do you serve industrial clients in North Miami?", a: "Yes — warehouse and light-industrial work is a core specialty." },
      { q: "Do you offer maintenance contracts?", a: "Yes. Recurring PM contracts are available for North Miami businesses." },
    ],
  },
];

export const locationsBySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));

export const reviews = [
  {
    name: "Alejandra R.",
    location: "Coral Gables, FL",
    rating: 5,
    text: "Rewired our entire home in under a week. The team was professional, spotless, and truly the best electricians we've hired in Miami.",
  },
  {
    name: "Marcus T.",
    location: "Brickell, FL",
    rating: 5,
    text: "Emergency call at 11pm — they were at our condo in 40 minutes and had power back before midnight. Absolute lifesavers.",
  },
  {
    name: "Sofia M.",
    location: "Miami Beach, FL",
    rating: 5,
    text: "Handled our restaurant panel upgrade overnight so we didn't lose a single service. Real pros. Highly recommend.",
  },
  {
    name: "David C.",
    location: "Downtown Miami, FL",
    rating: 5,
    text: "Best commercial electricians we've worked with in Miami — fast, permitted, and clean. Their crew is top tier.",
  },
  {
    name: "Priya S.",
    location: "North Miami, FL",
    rating: 5,
    text: "They installed all our landscape lighting and it looks incredible. Communication was flawless from quote to walkthrough.",
  },
  {
    name: "Jerome W.",
    location: "Wynwood, Miami",
    rating: 5,
    text: "Veteran-owned and it shows — disciplined, on time, and detail obsessed. Would hire again for any electrical need.",
  },
];

export const generalFaqs = [
  {
    q: "Are you licensed and insured in Florida?",
    a: "Yes. Miami Electrical Contractors LLC is a fully licensed Florida electrical contractor, insured, and veteran-owned.",
  },
  {
    q: "Do you offer 24-hour emergency service?",
    a: "Yes — a live dispatcher answers around the clock and we typically arrive within 60 minutes in Miami-Dade.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. We offer free written estimates for most residential and commercial projects across South Florida.",
  },
  {
    q: "Which areas do you serve?",
    a: "Miami, Miami Beach, Coral Gables, Brickell, Downtown Miami, North Miami and the greater South Florida area.",
  },
  {
    q: "Do you pull permits?",
    a: "Yes — as a licensed Florida electrical contractor we handle all permitting and inspections directly.",
  },
];

export const stats = [
  { value: "2,400+", label: "Projects Completed" },
  { value: "18,000+", label: "Emergency Repairs" },
  { value: "600+", label: "Commercial Projects" },
  { value: "5,000+", label: "Happy Customers" },
];

export const trustBadges = [
  "Veteran Owned",
  "Licensed & Insured",
  "24 Hour Service",
  "5 Star Rated",
  "Free Estimates",
];
