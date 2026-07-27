export const site = {
  name: "Miami Electrical Contractors LLC",
  short: "Miami Electrical Contractors LLC",
  url: "https://miamielectricalcontracting.com",
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

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ------------------------------------------------------------------ */
/*  SERVICES                                                          */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;                 // page H1 subject, e.g. "Emergency Electrician"
  metaTitle?: string;
  short: string;
  hero: string;
  image: string;
  benefits: string[];
  features: string[];
  problems: string[];
  process: { title: string; body: string }[];
  whyChooseUs: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  body: string;
  group: "Repair" | "Installation" | "Panels & Wiring" | "Lighting" | "EV & Power" | "Residential & Commercial" | "Inspection";
};

const WHY_US_DEFAULT = [
  "Veteran-owned, licensed Florida electrical contractor",
  "Live 24/7 dispatch — 60-minute response in Miami-Dade",
  "Flat, upfront pricing with free written estimates",
  "Permits pulled and all work inspected & warrantied",
];

const PROCESS_DEFAULT = [
  { title: "Free Estimate", body: "We diagnose on-site and quote a fixed, written price before any work begins." },
  { title: "Scheduled Service", body: "A licensed Miami electrician arrives on time with the parts and tools needed." },
  { title: "Code-Compliant Work", body: "Every install meets NEC and City of Miami permitting standards." },
  { title: "Final Walkthrough", body: "We test every circuit, clean up, and back the job with a written warranty." },
];

export const services: Service[] = [
  {
    slug: "emergency-electrician-miami-fl",
    title: "Emergency Electrician",
    short: "24/7 emergency electrician for power outages, sparking outlets, burning smells and tripped mains across Miami.",
    hero: "24-hour emergency electrical response anywhere in Miami-Dade.",
    image: img("photo-1607472586893-edb57bdc0e39"),
    group: "Repair",
    benefits: [
      "Live dispatcher answers 24/7/365",
      "60-minute average arrival in Miami-Dade",
      "Fully-stocked emergency service vans",
      "Transparent, upfront emergency pricing",
    ],
    features: [
      "Storm and flood damage assessment",
      "De-energize and make-safe procedures",
      "Temporary power restoration",
      "Insurance-ready written incident reports",
    ],
    problems: [
      "No power to your home or business",
      "Sparking outlets or a burning smell",
      "Main breaker will not reset",
      "Storm, flood or vehicle damage to service",
    ],
    process: [
      { title: "Call In", body: "A live dispatcher picks up 24/7 and confirms an ETA." },
      { title: "Make Safe", body: "First priority is de-energizing any active life-safety hazard." },
      { title: "Diagnose & Fix", body: "We locate the fault and repair on the spot whenever possible." },
      { title: "Restore & Report", body: "Full written report of the fault, the fix and any follow-up work." },
    ],
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Are you really available 24 hours a day?", a: "Yes — 365 nights a year a licensed electrician is on call anywhere in Miami-Dade." },
      { q: "How fast can you arrive?", a: "60 minutes or less in most of Miami-Dade. Ocean-side and outer suburbs may add 10–20 minutes." },
      { q: "Do you charge extra at night?", a: "We charge a transparent after-hours dispatch fee, quoted before any work begins — never a surprise." },
    ],
    related: ["electrical-repair-miami-fl", "circuit-breaker-repair-miami-fl", "panel-upgrade-miami-fl"],
    body: "When power fails or an outlet starts sparking, minutes matter. Our emergency electrical team is on call 24 hours a day for Miami homes, condos, restaurants and offices. We arrive in a fully-stocked van, make the situation safe, then diagnose and repair the fault the first time.",
  },
  {
    slug: "electrical-repair-miami-fl",
    title: "Electrical Repair",
    short: "Fast, code-compliant electrical repair for outlets, switches, wiring, breakers and lighting across Miami.",
    hero: "Trusted electrical repair for Miami homes and businesses.",
    image: img("photo-1581092160607-ee22621dd758"),
    group: "Repair",
    benefits: [
      "Same-day repair appointments",
      "Fixed diagnostic fee credited toward the repair",
      "Thermal imaging and circuit tracing",
      "Written report of every finding",
    ],
    features: [
      "Outlet, switch and fixture repair",
      "Dead-circuit and GFCI troubleshooting",
      "Wiring fault isolation",
      "Repair recommendations with photos",
    ],
    problems: [
      "Half the outlets in a room stopped working",
      "Lights dim when appliances start",
      "GFCI will not reset",
      "Frequent, unexplained breaker trips",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Do you charge to diagnose an issue?", a: "We charge a flat, upfront diagnostic fee that is credited toward the repair once approved." },
      { q: "Can you finish repairs same day?", a: "Most residential electrical repairs are completed on the first visit." },
    ],
    related: ["emergency-electrician-miami-fl", "outlet-repair-miami-fl", "circuit-breaker-repair-miami-fl"],
    body: "Electrical faults rarely fix themselves. We repair everything from dead outlets and failing switches to burnt breakers and hidden wiring problems — using professional diagnostic gear to find the root cause the first time, not just the symptom.",
  },
  {
    slug: "electrical-installation-miami-fl",
    title: "Electrical Installation",
    short: "Professional electrical installation for outlets, fixtures, appliances, panels and full remodels in Miami.",
    hero: "Clean, code-compliant electrical installations across Miami-Dade.",
    image: img("photo-1621905251189-08b45d6a269e"),
    group: "Installation",
    benefits: [
      "Neat, labeled and to-code installs",
      "Permits pulled and inspections handled",
      "Manufacturer-warrantied hardware",
      "Ten-year workmanship warranty",
    ],
    features: [
      "New outlets, USB receptacles and switches",
      "Ceiling fans, chandeliers and vanity lights",
      "Dedicated appliance and HVAC circuits",
      "Sub-panels and dedicated branch circuits",
    ],
    problems: [
      "Not enough outlets for modern devices",
      "Missing 240 V circuit for an appliance",
      "New fixture with no existing wiring",
      "Remodel or addition needing full electrical",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Do you install customer-supplied fixtures?", a: "Yes — as long as they are UL-listed. We can also source premium fixtures for you." },
      { q: "Will you patch the drywall?", a: "We minimize wall openings and offer optional patch, texture and paint restoration." },
    ],
    related: ["outlet-repair-miami-fl", "switch-installation-miami-fl", "ceiling-fan-installation-miami-fl"],
    body: "Whether you need a single outlet for a new appliance or every circuit in a full remodel, our electricians install to the highest standard — clean routing, labeled panels, and finish work that is invisible when we are done.",
  },
  {
    slug: "panel-upgrade-miami-fl",
    title: "Electrical Panel Upgrade",
    short: "Upgrade to 200 A, 320 A or 400 A service — safely power EVs, AC and modern appliances across Miami.",
    hero: "Modern electrical panel upgrades and service changes in Miami.",
    image: img("photo-1558618666-fcd25c85cd64"),
    group: "Panels & Wiring",
    benefits: [
      "200 A, 320 A and 400 A service upgrades",
      "EV-charger and solar-ready panels",
      "Removes obsolete FPE or Zinsco panels",
      "Whole-home surge protection included",
    ],
    features: [
      "Load calculation and sizing",
      "FPL coordination for meter pull",
      "Grounding and bonding to current NEC",
      "Neatly labeled and photographed panel",
    ],
    problems: [
      "Federal Pacific or Zinsco panel still in service",
      "No breaker slots for a new circuit",
      "Panel humming or warm to the touch",
      "Home cannot support an EV or new AC",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Do I need a permit for a panel upgrade?", a: "Yes — every service change requires a permit and inspection. We handle both for you." },
      { q: "How long will power be off?", a: "Typically 4–8 hours on the day of the upgrade." },
    ],
    related: ["electrical-wiring-miami-fl", "ev-charger-installation-miami-fl", "surge-protection-miami-fl"],
    body: "A modern electrical panel is the backbone of your home. We install Square D, Siemens and Eaton panels with grounding, bonding and surge protection brought up to current code — quietly, cleanly, and permitted.",
  },
  {
    slug: "electrical-wiring-miami-fl",
    title: "Electrical Wiring",
    short: "New and replacement electrical wiring for Miami homes, additions, remodels and commercial spaces.",
    hero: "Professional electrical wiring across Miami.",
    image: img("photo-1621905252507-b35492cc74b4"),
    group: "Panels & Wiring",
    benefits: [
      "Copper branch circuits to current NEC",
      "Neat runs, labeled at the panel",
      "Grounded outlets in every room",
      "Ten-year workmanship warranty",
    ],
    features: [
      "New circuits for kitchens, baths and HVAC",
      "Home office and low-voltage wiring",
      "Aluminum-to-copper conversions",
      "Wiring for additions and ADUs",
    ],
    problems: [
      "Two-prong ungrounded outlets",
      "Aluminum branch wiring risks",
      "Extension cords used as permanent wiring",
      "No dedicated circuits for major appliances",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Can you wire without opening every wall?", a: "In most cases yes — we fish new runs through walls and ceilings with minimal disruption." },
      { q: "Do you handle low-voltage too?", a: "Yes — networking, coax and smart-home low-voltage is available alongside line-voltage work." },
    ],
    related: ["rewiring-miami-fl", "panel-upgrade-miami-fl", "code-correction-miami-fl"],
    body: "From new branch circuits to full re-wires of older Miami homes, our team installs electrical wiring that is safe, code-compliant and built to last decades — with clean routing that inspectors and future electricians will thank us for.",
  },
  {
    slug: "lighting-installation-miami-fl",
    title: "Lighting Installation",
    short: "Recessed, architectural and smart lighting installation designed for Miami homes and businesses.",
    hero: "Architectural and interior lighting installation in Miami.",
    image: img("photo-1513506003901-1e6a229e2d15"),
    group: "Lighting",
    benefits: [
      "Recessed, cove and accent lighting",
      "Smart dimmers and scene control",
      "Energy-efficient LED throughout",
      "Designer-led layout planning",
    ],
    features: [
      "Kitchen, bath and task lighting",
      "Chandelier and pendant hanging",
      "Under-cabinet and toe-kick LED",
      "Lutron Caseta, RA3 and Control4",
    ],
    problems: [
      "Dark rooms and uneven light",
      "Outdated fluorescent fixtures",
      "No dimming or smart control",
      "Poor kitchen or bath task lighting",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Can you install smart lighting systems?", a: "Yes — we install and program Lutron Caseta, RA3, Control4 and other smart lighting systems." },
      { q: "Do you patch ceilings after install?", a: "Yes — we offer optional patch and paint restoration." },
    ],
    related: ["outdoor-lighting-miami-fl", "ceiling-fan-installation-miami-fl", "residential-electrician-miami-fl"],
    body: "Great lighting turns a good space into a stunning one. Our team designs and installs premium lighting for luxury homes, restaurants and offices across Miami — with dimming, scene control and layered ambiance done right.",
  },
  {
    slug: "outdoor-lighting-miami-fl",
    title: "Outdoor Lighting",
    short: "Landscape, security and architectural outdoor lighting engineered for South Florida weather.",
    hero: "Outdoor and landscape lighting for Miami homes and businesses.",
    image: img("photo-1470770841072-f978cf4d019e"),
    group: "Lighting",
    benefits: [
      "Low-voltage landscape design",
      "Marine-grade brass and bronze fixtures",
      "Security, motion and pathway lighting",
      "Smart transformers with app control",
    ],
    features: [
      "Pool, patio and pergola lighting",
      "Uplighting for palms and facades",
      "Weatherproof, hurricane-rated fixtures",
      "Timer and photo-cell automation",
    ],
    problems: [
      "Dark walkways and entry points",
      "Property feels insecure at night",
      "Faded or corroded existing fixtures",
      "No accent lighting on landscaping",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Is landscape lighting built for South Florida weather?", a: "Yes — we use marine-grade brass, bronze and stainless fixtures rated for coastal salt exposure." },
      { q: "Can I control outdoor lighting from my phone?", a: "Yes. Smart transformers with app control are standard on our premium installs." },
    ],
    related: ["lighting-installation-miami-fl", "residential-electrician-miami-fl", "surge-protection-miami-fl"],
    body: "Miami's climate demands corrosion-proof, waterproof landscape lighting. We install brass and bronze fixtures with sealed connectors designed for South Florida's salt air, then tune every fixture on-site after dark for the effect you want.",
  },
  {
    slug: "commercial-electrician-miami-fl",
    title: "Commercial Electrician",
    short: "Turn-key commercial electrical for retail, offices, restaurants and multi-tenant Miami buildings.",
    hero: "Commercial electrical contractors trusted by Miami operators and developers.",
    image: img("photo-1497366216548-37526070297c"),
    group: "Residential & Commercial",
    benefits: [
      "Minimized downtime for open businesses",
      "After-hours and weekend scheduling",
      "Full design-build capability",
      "Preventive maintenance contracts",
    ],
    features: [
      "Tenant improvements and build-outs",
      "Emergency and exit lighting",
      "Signage, storefront and site lighting",
      "3-phase power distribution",
    ],
    problems: [
      "Overloaded panels or aging service",
      "Life-safety and exit lighting failures",
      "Build-out timeline slipping",
      "Non-compliant signage or exterior lighting",
    ],
    process: [
      { title: "Site Walk & Scope", body: "We meet with owners and GCs to scope the electrical package end-to-end." },
      { title: "Permit & Plans", body: "We handle City of Miami permits, sealed drawings and utility coordination." },
      { title: "Install & Commission", body: "Certified journeymen deliver clean installs on aggressive commercial timelines." },
      { title: "Handoff & Support", body: "Documentation, warranty and optional preventive maintenance." },
    ],
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Do you work outside business hours?", a: "Yes — nights and weekends are standard for our commercial clients." },
      { q: "Can you pull commercial permits?", a: "As a licensed Florida electrical contractor we handle every permit ourselves." },
    ],
    related: ["panel-upgrade-miami-fl", "electrical-installation-miami-fl", "electrical-inspection-miami-fl"],
    body: "We serve Miami's most demanding operators — restaurants on Ocean Drive, offices in Brickell, retail across Coral Gables and multi-family projects across South Florida. Our commercial team works fast, safely, and to spec.",
  },
  {
    slug: "residential-electrician-miami-fl",
    title: "Residential Electrician",
    short: "Whole-home electrical service for Miami homeowners — from a single outlet to a full home rewire.",
    hero: "Premium residential electrical service across Miami-Dade.",
    image: img("photo-1558002038-1055907df827"),
    group: "Residential & Commercial",
    benefits: [
      "Licensed, insured and veteran-owned",
      "Same-day residential appointments",
      "Flat, upfront pricing — no surprises",
      "Clean, code-compliant workmanship",
    ],
    features: [
      "Whole-home rewires and upgrades",
      "Kitchen and bath remodel electrical",
      "Home theater and low-voltage",
      "Whole-home surge protection",
    ],
    problems: [
      "Flickering lights or dimming outlets",
      "Breakers that trip repeatedly",
      "Outdated aluminum or knob-and-tube wiring",
      "Burning smell or discoloration at outlets",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Do you offer 24-hour residential service?", a: "Yes — we dispatch a licensed electrician anywhere in Miami-Dade 24/7 for emergencies." },
      { q: "Can you handle full home rewires?", a: "Absolutely — we specialize in older Miami homes, condo remodels and new-construction rewiring." },
    ],
    related: ["electrical-wiring-miami-fl", "panel-upgrade-miami-fl", "lighting-installation-miami-fl"],
    body: "From single-family homes in Coral Gables to high-rise condos in Brickell, our residential electricians handle every job with the precision of a commercial contractor. We install, repair and upgrade every circuit in your home — always to code, always on time.",
  },
  {
    slug: "ev-charger-installation-miami-fl",
    title: "EV Charger Installation",
    short: "Level-2 EV charger installation for homes, condos and workplaces across Miami — Tesla, ChargePoint and universal.",
    hero: "Home and workplace EV charger installation in Miami.",
    image: img("photo-1593941707882-a5bac6861d75"),
    group: "EV & Power",
    benefits: [
      "NEMA 14-50 and hardwired Level-2 installs",
      "Tesla Wall Connector certified",
      "Load-managed installs on tight panels",
      "Rebate paperwork assistance",
    ],
    features: [
      "Single-family and condo/garage installs",
      "Multi-charger commercial deployments",
      "48 A hardwired chargers",
      "Weatherproof exterior installs",
    ],
    problems: [
      "No 240 V circuit in the garage",
      "Panel full with no room for a new breaker",
      "Long cable runs from panel to parking spot",
      "Condo association requirements",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Do I need a panel upgrade for an EV charger?", a: "Not always. We run a load calculation first — many homes support a Level-2 charger with a load-managed install." },
      { q: "Do you install commercial EV chargers?", a: "Yes — from single-unit multifamily to multi-charger workplace deployments." },
    ],
    related: ["panel-upgrade-miami-fl", "electrical-wiring-miami-fl", "commercial-electrician-miami-fl"],
    body: "Charging at home is the single biggest quality-of-life upgrade for a new EV. We install Tesla, ChargePoint, Wallbox and universal Level-2 chargers with clean wire routing, weatherproof housings, and a permit on file.",
  },
  {
    slug: "generator-installation-miami-fl",
    title: "Generator Installation",
    short: "Whole-home and commercial standby generator installation for Miami hurricane season.",
    hero: "Standby generator installation for Miami homes and businesses.",
    image: img("photo-1611288891475-1a3f2743e6f1"),
    group: "EV & Power",
    benefits: [
      "Automatic transfer switch installs",
      "Natural gas and propane options",
      "Hurricane-rated pads and mounts",
      "Annual maintenance plans available",
    ],
    features: [
      "Generac, Kohler and Cummins authorized",
      "Whole-home or essential-circuits sizing",
      "Load bank testing and commissioning",
      "Remote monitoring set-up",
    ],
    problems: [
      "Extended outages after tropical storms",
      "Portable generators are unsafe or noisy",
      "Freezers, medical equipment or servers at risk",
      "Insurance now requires standby power",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "What size generator do I need?", a: "We run a load calculation on your home or business to right-size a standby generator — whole-home or essential circuits only." },
      { q: "Do you handle the gas connection?", a: "We coordinate with a licensed gas plumber and handle every electrical portion end-to-end." },
    ],
    related: ["panel-upgrade-miami-fl", "surge-protection-miami-fl", "commercial-electrician-miami-fl"],
    body: "Hurricane season means Miami loses power. A properly sized standby generator keeps the AC, refrigerator, medical equipment and Wi-Fi running automatically. We install, permit and maintain Generac and Kohler systems from 10 kW to 150 kW.",
  },
  {
    slug: "surge-protection-miami-fl",
    title: "Surge Protection",
    short: "Whole-home and business surge protection to shield electronics from Miami's frequent lightning strikes.",
    hero: "Whole-home surge protection built for South Florida storms.",
    image: img("photo-1519669011783-4eaa95fa1b7d"),
    group: "EV & Power",
    benefits: [
      "Type-2 whole-home surge devices",
      "Protects HVAC, appliances and electronics",
      "Manufacturer connected-equipment warranty",
      "Installed alongside panel work at savings",
    ],
    features: [
      "Panel-mounted SPD install",
      "Point-of-use surge outlets",
      "Data and coax line protection",
      "Grounding system verification",
    ],
    problems: [
      "Repeated electronics failures after storms",
      "AC contactor damage from surges",
      "No surge device on the main panel",
      "Grounding electrode not verified",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Is one whole-home surge device enough?", a: "It handles the majority of surges. We recommend layered protection — panel SPD plus point-of-use outlets on sensitive electronics." },
      { q: "Will it protect against a direct lightning strike?", a: "No SPD can absorb a direct strike; it dramatically reduces the more common induced and utility-side surges that damage Miami electronics." },
    ],
    related: ["panel-upgrade-miami-fl", "generator-installation-miami-fl", "electrical-inspection-miami-fl"],
    body: "Miami's lightning density is among the highest in the country. A single storm can wipe out unprotected AC units, TVs and networking gear. We install Type-2 panel SPDs from Eaton, Siemens and Square D — often at the same time as a panel upgrade.",
  },
  {
    slug: "ceiling-fan-installation-miami-fl",
    title: "Ceiling Fan Installation",
    short: "Ceiling fan installation, replacement and rebalancing for Miami homes and outdoor patios.",
    hero: "Ceiling fan installation for Miami homes and outdoor spaces.",
    image: img("photo-1493663284031-b7e3aefcae8e"),
    group: "Installation",
    benefits: [
      "Fan-rated box and support installed",
      "Indoor and damp/wet-rated outdoor fans",
      "Wall-switch, remote and smart control",
      "Rebalancing and wobble correction",
    ],
    features: [
      "New fixture location wiring",
      "Fan replacement and upgrade",
      "Downrods sized for tall Miami ceilings",
      "Outdoor patio and lanai installs",
    ],
    problems: [
      "Existing box not rated for fan weight",
      "Only a light-switch — no fan control",
      "Wobbly or noisy older fan",
      "Outdoor fan installed in a wet location",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Can you install a fan where there is no fixture today?", a: "Yes — we can fish new wiring, install a fan-rated box and add a wall control." },
      { q: "Can you install my customer-supplied fan?", a: "Absolutely — as long as it is UL-listed we will install it and haul away the old one." },
    ],
    related: ["lighting-installation-miami-fl", "switch-installation-miami-fl", "residential-electrician-miami-fl"],
    body: "Ceiling fans move a lot of air for very little energy — a smart choice for Miami summers. We install fan-rated boxes, size downrods for high ceilings, and set up remote or smart control on every fan we install.",
  },
  {
    slug: "circuit-breaker-repair-miami-fl",
    title: "Circuit Breaker Repair",
    short: "Diagnose and repair tripping, buzzing or failed circuit breakers across Miami homes and businesses.",
    hero: "Circuit breaker repair and replacement in Miami.",
    image: img("photo-1621905251946-9c7a3b91b5f7"),
    group: "Repair",
    benefits: [
      "Same-day breaker replacements",
      "Correct-brand, correct-amperage installs",
      "Panel thermal imaging on every visit",
      "Written report of every finding",
    ],
    features: [
      "Standard, GFCI, AFCI and dual-function breakers",
      "Panel bus and lug inspection",
      "Load balancing across phases",
      "Recall-panel replacement quotes",
    ],
    problems: [
      "Breaker trips as soon as it is reset",
      "Buzzing or warm breaker",
      "Breaker will not stay in the reset position",
      "Panel is a Federal Pacific or Zinsco",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Should I just replace a tripping breaker?", a: "Not without diagnosing first — a tripping breaker is often protecting you from a downstream fault. We test the circuit before swapping hardware." },
      { q: "Do you stock breakers on the truck?", a: "Yes — the most common Square D, Siemens, Eaton and GE breakers are on the van." },
    ],
    related: ["panel-upgrade-miami-fl", "electrical-repair-miami-fl", "emergency-electrician-miami-fl"],
    body: "A tripping breaker is a warning, not a nuisance. We diagnose the underlying circuit before touching the breaker, then swap in the correct manufacturer-matched hardware — never the wrong brand or wrong amperage.",
  },
  {
    slug: "outlet-repair-miami-fl",
    title: "Outlet Repair & Installation",
    short: "Dead outlet repair, GFCI installation, USB outlets and new outlet runs across Miami.",
    hero: "Outlet repair and installation for Miami homes and businesses.",
    image: img("photo-1558449028-fd07437f3d5c"),
    group: "Repair",
    benefits: [
      "Dead outlet and half-hot fixes",
      "GFCI and AFCI upgrades",
      "USB and USB-C receptacle upgrades",
      "New outlet runs where needed",
    ],
    features: [
      "Kitchen, bath and outdoor GFCI",
      "Two-prong to grounded upgrades",
      "Tamper-resistant outlets for kids",
      "Weather-resistant exterior outlets",
    ],
    problems: [
      "Dead outlet in one room or wall",
      "Warm, scorched or discolored outlet",
      "Two-prong outlets still in the home",
      "Not enough outlets for modern devices",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Why did one outlet stop working?", a: "Usually a tripped GFCI upstream, a loose wire in a backstab connection, or a shared-neutral fault. We trace and repair the exact cause." },
      { q: "Can you add outlets without opening walls?", a: "In most cases yes — we fish new outlet runs with minimal or no drywall damage." },
    ],
    related: ["switch-installation-miami-fl", "electrical-repair-miami-fl", "electrical-installation-miami-fl"],
    body: "Outlets are the single most-touched piece of electrical hardware in your home. We repair, upgrade and add outlets safely — never using cheap backstab wiring, and always testing for load and polarity before we leave.",
  },
  {
    slug: "switch-installation-miami-fl",
    title: "Switch Installation",
    short: "Light switch installation and replacement — smart, dimmer, three-way and motion switches across Miami.",
    hero: "Switch installation and dimmer upgrades in Miami.",
    image: img("photo-1585771724684-38269d6639fd"),
    group: "Installation",
    benefits: [
      "Smart, dimmer, three-way and motion",
      "Lutron and Leviton certified",
      "Neutral-wire troubleshooting",
      "Scene programming included",
    ],
    features: [
      "Single-pole, three-way and four-way",
      "Occupancy and vacancy sensors",
      "Timer switches for fans and lights",
      "Whole-home smart-switch rollouts",
    ],
    problems: [
      "Three-way circuit acting inconsistently",
      "Dimmer buzzes or flickers LED bulbs",
      "No neutral wire at the box for a smart switch",
      "Bathroom fan runs too long",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Can you install smart switches without a neutral wire?", a: "Yes — we install no-neutral smart switch options like Lutron Caseta when a neutral is unavailable." },
      { q: "Why does my LED flicker with a dimmer?", a: "Usually an incompatible dimmer. We install LED+ dimmers matched to your specific bulbs." },
    ],
    related: ["lighting-installation-miami-fl", "outlet-repair-miami-fl", "ceiling-fan-installation-miami-fl"],
    body: "The right switch is the difference between usable lighting and great lighting. We install and troubleshoot every kind of switch — from a simple single-pole to whole-home Lutron Caseta or RA3 systems.",
  },
  {
    slug: "electrical-inspection-miami-fl",
    title: "Electrical Inspection",
    short: "Pre-purchase, insurance and safety electrical inspections for Miami homes and commercial buildings.",
    hero: "Detailed electrical inspections in Miami.",
    image: img("photo-1581094794329-c8112a89af12"),
    group: "Inspection",
    benefits: [
      "Written report with photos",
      "Insurance and mortgage-ready",
      "Panel thermal imaging",
      "Prioritized repair recommendations",
    ],
    features: [
      "Four-point insurance inspections",
      "Pre-purchase home inspections",
      "Commercial preventive audits",
      "Historic-home wiring assessments",
    ],
    problems: [
      "Insurance requires a four-point inspection",
      "Buying an older Miami home",
      "Business preparing for lease renewal",
      "Suspect DIY electrical from a prior owner",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Do you provide four-point insurance inspections?", a: "Yes — Florida insurers accept our four-point inspection reports." },
      { q: "How long does an inspection take?", a: "60–90 minutes for a typical single-family home; longer for commercial." },
    ],
    related: ["code-correction-miami-fl", "panel-upgrade-miami-fl", "commercial-electrician-miami-fl"],
    body: "An electrical inspection is the cheapest insurance a Miami property owner can buy. Our licensed inspectors deliver a photo-documented, insurer-ready report — with clear priorities and honest recommendations, not a sales pitch.",
  },
  {
    slug: "rewiring-miami-fl",
    title: "Home Rewiring",
    short: "Complete home rewiring for older Miami properties — safe, code-compliant, and phased to keep power on.",
    hero: "Complete home rewiring across Miami.",
    image: img("photo-1621905251507-b35492cc74b4"),
    group: "Panels & Wiring",
    benefits: [
      "Removes fire risk from old wiring",
      "Adds capacity for modern appliances",
      "Increases property value and insurability",
      "Ten-year workmanship warranty",
    ],
    features: [
      "Full-home copper re-wire",
      "Panel replacement included",
      "New grounded outlets throughout",
      "Optional drywall patch and paint",
    ],
    problems: [
      "Aluminum, cloth or knob-and-tube wiring",
      "Two-prong outlets throughout the home",
      "Frequently tripping breakers",
      "Warm outlets or discolored switch plates",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "How long does a rewire take?", a: "Most single-family Miami homes are rewired in 3–7 working days depending on size and access." },
      { q: "Will you patch the drywall?", a: "Yes — we minimize wall openings and offer full patch, texture and paint restoration." },
    ],
    related: ["electrical-wiring-miami-fl", "panel-upgrade-miami-fl", "electrical-inspection-miami-fl"],
    body: "Old wiring is Miami's number-one residential fire risk. We handle full and partial rewires with minimal disruption — from historic homes in Coral Gables to high-rise units in Brickell — and the power stays on wherever possible.",
  },
  {
    slug: "code-correction-miami-fl",
    title: "Code Correction",
    short: "Correct failed electrical inspections and bring older Miami properties up to current NEC and city code.",
    hero: "Electrical code correction services in Miami.",
    image: img("photo-1503387762-592deb58ef4e"),
    group: "Inspection",
    benefits: [
      "Direct experience with City of Miami inspectors",
      "Fast turnaround on failed inspections",
      "Permits pulled, re-inspections handled",
      "Photo documentation of every correction",
    ],
    features: [
      "Grounding and bonding corrections",
      "GFCI and AFCI upgrades where required",
      "Panel labeling and clearance corrections",
      "Junction box and splice corrections",
    ],
    problems: [
      "Failed a home-inspection or insurance review",
      "Prior DIY electrical needs to be legalized",
      "Selling a home with outstanding violations",
      "Commercial tenant improvement failed inspection",
    ],
    process: PROCESS_DEFAULT,
    whyChooseUs: WHY_US_DEFAULT,
    faqs: [
      { q: "Can you fix everything on a failed inspection report?", a: "Yes — we handle every item on a typical four-point or municipal inspection failure." },
      { q: "Do you handle the re-inspection?", a: "Yes — we schedule and meet the inspector so you do not have to." },
    ],
    related: ["electrical-inspection-miami-fl", "panel-upgrade-miami-fl", "rewiring-miami-fl"],
    body: "A failed electrical inspection does not have to hold up a sale or a lease. We correct every finding on the report, document the work, and coordinate the re-inspection — so you can close, open or move in on schedule.",
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

export const serviceMenuGroups: { label: string; items: { slug: string; title: string }[] }[] = [
  {
    label: "Repair & Emergency",
    items: [
      { slug: "emergency-electrician-miami-fl", title: "Emergency Electrician" },
      { slug: "electrical-repair-miami-fl", title: "Electrical Repair" },
      { slug: "circuit-breaker-repair-miami-fl", title: "Circuit Breaker Repair" },
      { slug: "outlet-repair-miami-fl", title: "Outlet Repair" },
    ],
  },
  {
    label: "Panels & Wiring",
    items: [
      { slug: "panel-upgrade-miami-fl", title: "Panel Upgrade" },
      { slug: "electrical-wiring-miami-fl", title: "Electrical Wiring" },
      { slug: "rewiring-miami-fl", title: "Home Rewiring" },
      { slug: "code-correction-miami-fl", title: "Code Correction" },
    ],
  },
  {
    label: "Installation",
    items: [
      { slug: "electrical-installation-miami-fl", title: "Electrical Installation" },
      { slug: "switch-installation-miami-fl", title: "Switch Installation" },
      { slug: "ceiling-fan-installation-miami-fl", title: "Ceiling Fan Installation" },
      { slug: "electrical-inspection-miami-fl", title: "Electrical Inspection" },
    ],
  },
  {
    label: "Lighting",
    items: [
      { slug: "lighting-installation-miami-fl", title: "Lighting Installation" },
      { slug: "outdoor-lighting-miami-fl", title: "Outdoor Lighting" },
    ],
  },
  {
    label: "EV, Power & Protection",
    items: [
      { slug: "ev-charger-installation-miami-fl", title: "EV Charger Installation" },
      { slug: "generator-installation-miami-fl", title: "Generator Installation" },
      { slug: "surge-protection-miami-fl", title: "Surge Protection" },
    ],
  },
  {
    label: "Residential & Commercial",
    items: [
      { slug: "residential-electrician-miami-fl", title: "Residential Electrician" },
      { slug: "commercial-electrician-miami-fl", title: "Commercial Electrician" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  LOCATIONS                                                         */
/* ------------------------------------------------------------------ */

export type Location = {
  slug: string;         // e.g. "electrician-miami-fl"
  city: string;
  region: string;
  hero: string;
  intro: string;
  landmarks: string[];
  neighborhoods: string[];
  response: string;
  image: string;
  faqs: { q: string; a: string }[];
  isPillar?: boolean;   // Miami pillar page
};

export const locations: Location[] = [
  {
    slug: "electrician-miami-fl",
    city: "Miami",
    region: "Miami, FL",
    hero: "Miami's veteran-owned electrical contractor — 24/7 service across the city.",
    intro:
      "Miami Electrical Contractors LLC is a licensed, veteran-owned electrical contractor headquartered in Miami, FL. We serve every neighborhood in the city — from Downtown high-rises and Brickell condos to single-family homes in the Grove and warehouses off the Palmetto — around the clock.",
    landmarks: ["Wynwood", "Design District", "Little Havana", "Edgewater", "Midtown", "Brickell", "Downtown"],
    neighborhoods: ["Coconut Grove", "Coral Way", "Allapattah", "Overtown", "Upper East Side"],
    response: "60 minutes or less anywhere in the City of Miami",
    image: img("photo-1535498730771-e735b998cd64"),
    isPillar: true,
    faqs: [
      { q: "Do you cover all of Miami 24/7?", a: "Yes — we dispatch anywhere in the City of Miami around the clock." },
      { q: "Are you licensed in Florida?", a: "Yes — fully licensed Florida electrical contractor and insured." },
      { q: "Do you serve condos with association requirements?", a: "Yes — we regularly deliver COIs and comply with condo association rules across Miami." },
    ],
  },
  {
    slug: "electrician-coral-gables-fl",
    city: "Coral Gables",
    region: "Coral Gables, FL",
    hero: "Premium electrical service for Coral Gables estates and businesses.",
    intro:
      "From historic homes on Coral Way to estates in Gables Estates and Cocoplum, we handle Coral Gables electrical with the care the neighborhood deserves — careful rewires, architectural lighting and clean, permitted installs.",
    landmarks: ["Miracle Mile", "Merrick Park", "Biltmore Hotel", "Venetian Pool", "University of Miami"],
    neighborhoods: ["Cocoplum", "Gables Estates", "Riviera", "Old Cutler", "Snapper Creek"],
    response: "Same-day service across Coral Gables",
    image: img("photo-1568605114967-8130f3a36994"),
    faqs: [
      { q: "Do you work on historic Coral Gables homes?", a: "Yes — we specialize in careful rewires and upgrades in Mediterranean Revival and other historic properties." },
      { q: "Can you coordinate with our architect or designer?", a: "Yes — we regularly work alongside Coral Gables architects and interior designers." },
    ],
  },
  {
    slug: "electrician-south-miami-fl",
    city: "South Miami",
    region: "South Miami, FL",
    hero: "Trusted electricians serving South Miami homes and businesses.",
    intro:
      "We serve South Miami with residential rewires, panel upgrades, lighting design and 24-hour emergency response — from the shops around Sunset Drive to the quiet blocks off Red Road.",
    landmarks: ["Sunset Place", "Sunset Drive", "Larkin Community Hospital", "Red Road", "South Miami Hospital"],
    neighborhoods: ["Cambridge Lawns", "Hardee", "Ludlum", "SW 62nd Ave", "Twin Lakes"],
    response: "Same-day service across South Miami",
    image: img("photo-1600585154340-be6161a56a0c"),
    faqs: [
      { q: "Do you work on both homes and businesses in South Miami?", a: "Yes — from single-family homes to retail and medical office electrical." },
      { q: "Do you handle historic-district requirements?", a: "Yes — permitting and careful workmanship in historic zones is a core specialty." },
    ],
  },
  {
    slug: "electrician-miami-beach-fl",
    city: "Miami Beach",
    region: "Miami Beach, FL",
    hero: "Trusted electricians for Miami Beach homes, hotels and restaurants.",
    intro:
      "Miami Beach demands electricians who can work fast in high-rises, restaurants and hospitality — with proper COIs, condo association compliance and after-hours scheduling. We do all three.",
    landmarks: ["South Beach", "Ocean Drive", "Lincoln Road", "Mid-Beach", "Sunset Harbour"],
    neighborhoods: ["South of Fifth", "Flamingo", "Star Island", "Palm Island", "North Beach"],
    response: "Same-day service across Miami Beach and the barrier islands",
    image: img("photo-1501509497947-782640bc1412"),
    faqs: [
      { q: "Do you service hotels and restaurants?", a: "Yes — hospitality is a core practice, with overnight scheduling to protect guest experience." },
      { q: "Can you provide COIs for buildings?", a: "Yes — we deliver COIs the same day for any Miami Beach building on request." },
    ],
  },
  {
    slug: "electrician-hialeah-fl",
    city: "Hialeah",
    region: "Hialeah, FL",
    hero: "Residential, commercial and industrial electricians serving Hialeah.",
    intro:
      "Hialeah's mix of homes, warehouses and light-industrial makes it a natural fit for our team. We deliver panel upgrades, warehouse power, service changes and everything in between — Spanish- and English-speaking crews.",
    landmarks: ["Amelia Earhart Park", "Hialeah Park Racing", "Westland Mall", "Palmetto Expressway", "Milander Park"],
    neighborhoods: ["East Hialeah", "West Hialeah", "Hialeah Gardens border", "Miami Lakes border"],
    response: "Same-day service across Hialeah",
    image: img("photo-1587293852726-70cdb56c2866"),
    faqs: [
      { q: "Do you serve industrial and warehouse clients in Hialeah?", a: "Yes — 3-phase power, service changes and motor controls are a core specialty." },
      { q: "Do you have Spanish-speaking electricians?", a: "Yes — bilingual crews are standard on Hialeah service calls." },
    ],
  },
  {
    slug: "electrician-kendall-fl",
    city: "Kendall",
    region: "Kendall, FL",
    hero: "Family-friendly electrical service for Kendall homes and businesses.",
    intro:
      "Kendall's suburban homes and retail corridors need dependable residential and small-commercial electrical. We deliver panel upgrades, EV chargers, lighting and 24-hour emergency response across the neighborhood.",
    landmarks: ["Dadeland Mall", "The Falls", "Kendall Baptist Hospital", "Kendall Town & Country", "Bird Road"],
    neighborhoods: ["East Kendall", "West Kendall", "Sunset", "Continental Park", "Killian"],
    response: "Same-day service across Kendall and Pinecrest borders",
    image: img("photo-1560448204-e02f11c3d0e2"),
    faqs: [
      { q: "Do you install EV chargers in Kendall garages?", a: "Yes — Level-2 EV charger installation is one of our most-requested Kendall services." },
      { q: "Can you handle HOA and community requirements?", a: "Yes — HOA coordination and community-standard installs are part of every quote." },
    ],
  },
  {
    slug: "electrician-doral-fl",
    city: "Doral",
    region: "Doral, FL",
    hero: "Commercial and residential electricians serving Doral.",
    intro:
      "Doral's rapidly growing corporate parks, warehouse space and luxury residential all need a licensed electrical contractor that can move quickly. We handle tenant build-outs, warehouse retrofits and residential service across the city.",
    landmarks: ["Trump National Doral", "Downtown Doral", "CityPlace Doral", "Doral Legacy Park", "Miami International Mall"],
    neighborhoods: ["Doral Isles", "Costa Del Sol", "Doral Estates", "Sail Doral", "Vintage Estates"],
    response: "Same-day service across Doral",
    image: img("photo-1497366811353-6870744d04b2"),
    faqs: [
      { q: "Do you handle office and warehouse build-outs in Doral?", a: "Yes — tenant improvements and commercial build-outs are a core practice." },
      { q: "Can you work off-hours to avoid business disruption?", a: "Yes — nights and weekends are common for our Doral commercial clients." },
    ],
  },
  {
    slug: "electrician-homestead-fl",
    city: "Homestead",
    region: "Homestead, FL",
    hero: "Trusted electricians serving Homestead homes, farms and businesses.",
    intro:
      "From newer subdivisions off Campbell Drive to older properties near Krome and agricultural buildings on the fringe, Homestead has a wide range of electrical needs. We serve them all — including 24-hour emergency response.",
    landmarks: ["Homestead-Miami Speedway", "Historic Downtown Homestead", "Losner Park", "Baptist Health Homestead", "Homestead Air Reserve"],
    neighborhoods: ["Keys Gate", "Malibu Bay", "Silver Palm", "Waterstone", "Villages of Homestead"],
    response: "Same-day service across Homestead and Florida City",
    image: img("photo-1560448204-603b3fc33ddc"),
    faqs: [
      { q: "Do you cover Homestead 24/7 for emergencies?", a: "Yes — emergency response is available around the clock across South Miami-Dade." },
      { q: "Do you work on agricultural and rural properties?", a: "Yes — well pumps, barn wiring and irrigation electrical are part of what we do." },
    ],
  },
  {
    slug: "electrician-pinecrest-fl",
    city: "Pinecrest",
    region: "Pinecrest, FL",
    hero: "Premium electrical service for Pinecrest estates.",
    intro:
      "Pinecrest's large lots and estate homes deserve careful electrical work — permitted, planned, and executed with respect for landscaping and finishes. We serve the village with everything from generator installs to whole-home surge protection.",
    landmarks: ["Pinecrest Gardens", "Suniland Park", "Evelyn Greer Park", "Palmetto Bay border", "US-1 corridor"],
    neighborhoods: ["North Pinecrest", "South Pinecrest", "Ponce-Davis border", "Coral Reef", "Palmetto Estates"],
    response: "Same-day service across Pinecrest",
    image: img("photo-1600585154526-990dced4db0d"),
    faqs: [
      { q: "Do you install whole-home generators in Pinecrest?", a: "Yes — Generac and Kohler standby generators are a common Pinecrest install." },
      { q: "Will you protect our landscaping during work?", a: "Yes — landscape protection and post-work restoration are standard on Pinecrest jobs." },
    ],
  },
  {
    slug: "electrician-north-miami-fl",
    city: "North Miami",
    region: "North Miami, FL",
    hero: "Residential, commercial and industrial electricians serving North Miami.",
    intro:
      "North Miami blends residential neighborhoods, commercial corridors and light-industrial space along Biscayne Boulevard and NE 6th Avenue. We serve all three with 24-hour emergency response and preventive maintenance for businesses.",
    landmarks: ["Biscayne Boulevard", "Keystone Point", "Sans Souci Estates", "MOCA North Miami", "Oleta River State Park"],
    neighborhoods: ["Keystone Point", "Sans Souci", "Arch Creek", "San Souci Estates", "West Dixie corridor"],
    response: "Same-day service across North Miami and North Miami Beach",
    image: img("photo-1519692933481-e162a57d6721"),
    faqs: [
      { q: "Do you serve industrial clients in North Miami?", a: "Yes — warehouse and light-industrial work is a core specialty." },
      { q: "Do you offer maintenance contracts?", a: "Yes — recurring preventive-maintenance contracts are available for North Miami businesses." },
    ],
  },
];

export const locationsBySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));

/* ------------------------------------------------------------------ */
/*  UNIFIED PAGE LOOKUP                                                */
/* ------------------------------------------------------------------ */

export type PageMatch =
  | { type: "service"; service: Service }
  | { type: "location"; location: Location };

export function findPage(slug: string): PageMatch | null {
  const l = locationsBySlug[slug];
  if (l) return { type: "location", location: l };
  const s = servicesBySlug[slug];
  if (s) return { type: "service", service: s };
  return null;
}

/* ------------------------------------------------------------------ */
/*  REVIEWS, FAQs, STATS                                               */
/* ------------------------------------------------------------------ */

export const reviews = [
  { name: "Alejandra R.", location: "Coral Gables, FL", rating: 5, text: "Rewired our entire home in under a week. The team was professional, spotless, and truly the best electricians we've hired in Miami." },
  { name: "Marcus T.", location: "Brickell, FL", rating: 5, text: "Emergency call at 11pm — they were at our condo in 40 minutes and had power back before midnight. Absolute lifesavers." },
  { name: "Sofia M.", location: "Miami Beach, FL", rating: 5, text: "Handled our restaurant panel upgrade overnight so we didn't lose a single service. Real pros. Highly recommend." },
  { name: "David C.", location: "Downtown Miami, FL", rating: 5, text: "Best commercial electricians we've worked with in Miami — fast, permitted, and clean. Their crew is top tier." },
  { name: "Priya S.", location: "North Miami, FL", rating: 5, text: "They installed all our landscape lighting and it looks incredible. Communication was flawless from quote to walkthrough." },
  { name: "Jerome W.", location: "Wynwood, Miami", rating: 5, text: "Veteran-owned and it shows — disciplined, on time, and detail obsessed. Would hire again for any electrical need." },
];

export const generalFaqs = [
  { q: "Are you licensed and insured in Florida?", a: "Yes. Miami Electrical Contractors LLC is a fully licensed Florida electrical contractor, insured, and veteran-owned." },
  { q: "Do you offer 24-hour emergency service?", a: "Yes — a live dispatcher answers around the clock and we typically arrive within 60 minutes in Miami-Dade." },
  { q: "Do you provide free estimates?", a: "Yes. We offer free written estimates for most residential and commercial projects across South Florida." },
  { q: "Which areas do you serve?", a: "Miami, Miami Beach, Coral Gables, South Miami, Hialeah, Kendall, Doral, Homestead, Pinecrest, North Miami and the greater South Florida area." },
  { q: "Do you pull permits?", a: "Yes — as a licensed Florida electrical contractor we handle all permitting and inspections directly." },
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

export const industriesServed = [
  "Restaurants & Hospitality",
  "Retail & Storefronts",
  "Medical & Dental Offices",
  "Warehouses & Light Industrial",
  "Property Management & Multifamily",
  "Luxury Residential & Estates",
];
