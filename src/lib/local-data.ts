export type LocalPermitInfo = {
  department: string;
  address: string;
  phone: string;
  jurisdictionCode: string;
  portalName: string;
  inspectionRequirements: string;
  keyCodes: string[];
};

export type LocalCaseStudy = {
  title: string;
  neighborhood: string;
  serviceType: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  year: string;
};

export type LocalNeighborhoodChallenge = {
  title: string;
  description: string;
  badge: string;
};

export type LocalLandingData = {
  architecturalContext: string;
  permitInfo: LocalPermitInfo;
  challenges: LocalNeighborhoodChallenge[];
  caseStudies: LocalCaseStudy[];
  localValuePillars: { title: string; desc: string }[];
  localFaqs: { q: string; a: string }[];
};

export const locationDetailsBySlug: Record<string, LocalLandingData> = {
  "electrician-south-miami-fl": {
    architecturalContext:
      "South Miami's housing stock predominantly consists of post-war mid-century ranch homes built between 1948 and 1965 in neighborhoods like Cambridge Lawns, Twin Lakes, and Hardee, alongside vibrant boutique commercial properties along Sunset Drive (SW 72nd St) and Red Road (SW 57th Ave). Electrical work here demands deep familiarity with ungrounded two-wire cloth branch circuits, mature tree canopy overhead lines vulnerable to storm damage, and City of South Miami's strict tree preservation and zoning ordinances.",
    permitInfo: {
      department: "City of South Miami Building & Zoning Department",
      address: "6130 Sunset Drive, South Miami, FL 33143",
      phone: "(305) 663-6325",
      jurisdictionCode: "City of South Miami (Jurisdiction 09)",
      portalName: "City of South Miami e-Permitting Portal (Citizenserve)",
      inspectionRequirements:
        "Rough electrical, service release (meter turn-on), and final electrical inspections. Work within the root protection zone of designated specimen trees (Live Oaks, Gumbo Limbos) requires special trenching methods for underground service laterals.",
      keyCodes: [
        "2023 National Electrical Code (NEC / NFPA 70)",
        "Florida Building Code 8th Edition (Building & Residential)",
        "City of South Miami Tree Canopy & Trenching Ordinance Chapter 18A",
        "FPL Electric Service Standards (Red Road & Sunset Grid Feed)",
      ],
    },
    challenges: [
      [
        {
          title: "1950s Fabric & Cloth-Insulated Ungrounded Wiring",
          description:
            "Original homes in Cambridge Lawns and Twin Lakes often retain 2-wire ungrounded branch circuits with deteriorating cloth insulation. We perform clean rewires without wholesale wall demolition.",
          badge: "Historic Residential",
        },
        {
          title: "Mature Tree Canopy Overhead Drop Hazards",
          description:
            "Dense live oak and banyan limbs along SW 62nd Ave and SW 59th St frequently tear down overhead service weatherheads during summer storms. We convert vulnerable overhead feeds to underground laterals.",
          badge: "Weather & Storm",
        },
        {
          title: "Medical & Dental Office Isolated Circuits",
          description:
            "Properties near South Miami Hospital and Larkin Community Hospital require isolated ground receptacles, surge protection, and emergency backup generator transfer switches for sensitive diagnostic equipment.",
          badge: "Commercial / Healthcare",
        },
      ][0],
      [
        {
          title: "1950s Fabric & Cloth-Insulated Ungrounded Wiring",
          description:
            "Original homes in Cambridge Lawns and Twin Lakes often retain 2-wire ungrounded branch circuits with deteriorating cloth insulation. We perform clean rewires without wholesale wall demolition.",
          badge: "Historic Residential",
        },
        {
          title: "Mature Tree Canopy Overhead Drop Hazards",
          description:
            "Dense live oak and banyan limbs along SW 62nd Ave and SW 59th St frequently tear down overhead service weatherheads during summer storms. We convert vulnerable overhead feeds to underground laterals.",
          badge: "Weather & Storm",
        },
        {
          title: "Medical & Dental Office Isolated Circuits",
          description:
            "Properties near South Miami Hospital and Larkin Community Hospital require isolated ground receptacles, surge protection, and emergency backup generator transfer switches for sensitive diagnostic equipment.",
          badge: "Commercial / Healthcare",
        },
      ][1],
      [
        {
          title: "1950s Fabric & Cloth-Insulated Ungrounded Wiring",
          description:
            "Original homes in Cambridge Lawns and Twin Lakes often retain 2-wire ungrounded branch circuits with deteriorating cloth insulation. We perform clean rewires without wholesale wall demolition.",
          badge: "Historic Residential",
        },
        {
          title: "Mature Tree Canopy Overhead Drop Hazards",
          description:
            "Dense live oak and banyan limbs along SW 62nd Ave and SW 59th St frequently tear down overhead service weatherheads during summer storms. We convert vulnerable overhead feeds to underground laterals.",
          badge: "Weather & Storm",
        },
        {
          title: "Medical & Dental Office Isolated Circuits",
          description:
            "Properties near South Miami Hospital and Larkin Community Hospital require isolated ground receptacles, surge protection, and emergency backup generator transfer switches for sensitive diagnostic equipment.",
          badge: "Commercial / Healthcare",
        },
      ][2],
    ],
    caseStudies: [
      {
        title: "200A Service Conversion & Ungrounded Rewire on SW 62nd Ave",
        neighborhood: "Twin Lakes, South Miami",
        serviceType: "Whole-Home Rewire & 200A Panel Replacement",
        year: "2025",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
        challenge:
          "Homeowner was denied homeowner's insurance renewal due to an active 100A Pushmatic breaker panel and ungrounded two-prong outlets throughout their 1954 3-bedroom ranch.",
        solution:
          "Permitted with City of South Miami, installed modern 200A Eaton CH copper-bus panel with Type-1 whole-home surge protector, ran copper Romex branch circuits with AFCI breakers via attic access, and grounded all receptacles.",
        outcome:
          "Passed City of South Miami electrical inspection on first visit; homeowner secured standard premium insurance policy and ready for modern central AC.",
      },
      {
        title: "Dedicated Commercial Subpanel & EV Charger on Sunset Drive",
        neighborhood: "Downtown South Miami",
        serviceType: "Commercial Tenant Improvement & Fleet EV Charging",
        year: "2025",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A boutique wellness clinic on Sunset Drive needed dedicated 240V circuits for specialized therapy equipment and a commercial dual-port Level 2 EV charging station for patient parking.",
        solution:
          "Ran 125A commercial subpanel feed from main switchgear, routed rigid conduit through utility chases, installed isolated grounds, and commissioned dual 48A commercial EV stations.",
        outcome:
          "Zero operational downtime for the clinic; fully permitted and certified under City of South Miami commercial code standards.",
      },
    ],
    localValuePillars: [
      {
        title: "City of South Miami Permitting Expertise",
        desc: "We pull all permits directly with the City Hall building department on Sunset Drive and manage all inspector walkthroughs.",
      },
      {
        title: "Tree Canopy & Root Protection",
        desc: "When running underground service laterals, we follow South Miami tree preservation regulations to protect century-old oaks and palms.",
      },
      {
        title: "Historic 1950s Wiring Specialization",
        desc: "Skilled at fishing modern wiring through lath-and-plaster and tongue-and-groove ceilings with minimal drywall disruption.",
      },
      {
        title: "FPL Coordination off Sunset & Red Road",
        desc: "Direct scheduling with FPL service planning for rapid meter disconnects and same-day power restoration.",
      },
    ],
    localFaqs: [
      {
        q: "Does the City of South Miami require permits for electrical panel upgrades?",
        a: "Yes. The City of South Miami Building & Zoning Department (6130 Sunset Dr) requires a municipal electrical permit for all service changes and panel upgrades. As a licensed Florida electrical contractor, we prepare single-line diagrams, pull the permit, schedule FPL disconnect, and arrange final inspection.",
      },
      {
        q: "Why do so many older South Miami homes have ungrounded two-prong outlets?",
        a: "Most homes built in South Miami in the 1940s and 1950s (such as in Cambridge Lawns) used two-conductor cables without an equipment grounding conductor. While legal when built, modern electronics, computers, and appliances require dedicated ground paths. We retrofit GFCI/AFCI protection or pull modern grounded copper Romex to bring homes to current code.",
      },
      {
        q: "Can you underground my overhead power line in South Miami?",
        a: "Yes. Due to South Miami's dense tree canopy, overhead service lines often suffer storm damage. We coordinate with FPL to convert overhead service masts to buried underground conduit, taking care to preserve root systems around your property.",
      },
    ],
  },

  "electrician-miami-fl": {
    architecturalContext:
      "The City of Miami represents an intense mix of high-rise condominium towers in Brickell and Edgewater, bustling commercial and hospitality venues in Wynwood and Midtown, and historic 1920s single-family enclaves in Coconut Grove and Little Havana. Work within the city involves navigating high-rise building management rules, freight elevator booking, strict insurance certificates ($2M COIs), and the City of Miami Building Department's rigorous electronic plan review.",
    permitInfo: {
      department: "City of Miami Building Department",
      address: "444 SW 2nd Avenue, 4th Floor, Miami, FL 33130",
      phone: "(305) 416-1100",
      jurisdictionCode: "City of Miami (Jurisdiction 01)",
      portalName: "City of Miami ePlan Review & iBuild System",
      inspectionRequirements:
        "Rough electrical, ceiling cover inspection, service release with FPL, and final electrical. Buildings subject to Miami-Dade 30-Year/40-Year Recertification must pass comprehensive electrical safety diagnostics.",
      keyCodes: [
        "2023 National Electrical Code (NEC / NFPA 70)",
        "Florida Building Code 8th Edition (High-Velocity Hurricane Zone - HVHZ)",
        "City of Miami Fire Rescue Interlock Standards (NFPA 72 & 96)",
        "Miami-Dade County 30/40-Year Building Safety Recertification Code",
      ],
    },
    challenges: [
      {
        title: "High-Rise Condo HOA & Riser Restrictions",
        description:
          "Condo units in Brickell and Downtown frequently have limited 100A or 125A panel capacity with shared electrical closets. We install dynamic load management systems for EV chargers and induction cooktops.",
        badge: "Condo Infrastructure",
      },
      {
        title: "Coastal Storm Surge & Low-Lying Flood Elevations",
        description:
          "Ground-level and basement switchgear in coastal Miami flood zones (AE/VE) require water-resistant NEMA 4X enclosures and elevated disconnects compliant with FEMA electrical guidelines.",
        badge: "Flood & Hurricane Code",
      },
      {
        title: "30-Year / 40-Year Building Recertification Electrical Audits",
        description:
          "Older commercial and residential structures require detailed thermal imaging, busbar torque audits, and emergency lighting verification to satisfy Miami-Dade recertification requirements.",
        badge: "Recertification",
      },
    ],
    caseStudies: [
      {
        title: "400A Three-Phase Switchgear for Adaptive Reuse Venue in Wynwood",
        neighborhood: "Wynwood Arts District, Miami",
        serviceType: "Commercial 3-Phase Service Upgrade & Architectural Controls",
        year: "2025",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A 1940s industrial warehouse conversion into a dining lounge had inadequate power for commercial kitchen fryers, espresso machines, and high-output architectural stage lighting.",
        solution:
          "Coordinated dedicated transformer vault connection with FPL, engineered single-line drawings, installed 400A 120/208V Square D switchboard with submetering, and routed exposed rigid metallic conduit.",
        outcome:
          "Passed City of Miami final electrical inspection on first review with zero opening schedule delays.",
      },
      {
        title: "Emergency Meter Mast Rebuild in Coconut Grove",
        neighborhood: "Coconut Grove, Miami",
        serviceType: "Emergency Storm Damage Restoration",
        year: "2025",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A heavy branch pulled down the 2-inch service riser and tore the meter can off the wall of a historic single-family residence during a summer thunderstorm.",
        solution:
          "Dispatched emergency team in 40 minutes, established safety perimeter, installed heavy-duty 200A lever bypass meter box with reinforced through-roof galvanized mast, and coordinated rapid FPL re-energization.",
        outcome:
          "Power safely restored within 24 hours; City of Miami inspector sign-off completed cleanly.",
      },
    ],
    localValuePillars: [
      {
        title: "City of Miami ePlan Review Fast-Tracking",
        desc: "Experienced with the City of Miami Building Department digital submission system (444 SW 2nd Ave) for fast permit turnaround.",
      },
      {
        title: "Condominium HOA Compliance & COIs",
        desc: "Full $2M liability coverage with custom COIs provided same-day for condo management across Brickell and Downtown.",
      },
      {
        title: "Commercial Night & Weekend Dispatch",
        desc: "Off-hours scheduling for restaurants, galleries, and corporate offices to eliminate business interruption.",
      },
      {
        title: "HVHZ Hurricane-Rated Hardware",
        desc: "All exterior masts, meter sockets, and generator disconnects meet Miami-Dade High Velocity Hurricane Zone standards.",
      },
    ],
    localFaqs: [
      {
        q: "How do you coordinate electrical work in Brickell or Downtown Miami high-rises?",
        a: "We work directly with your condominium management office. We submit our Florida electrical license, proof of $2,000,000 liability insurance and workers' compensation (COI), secure freight elevator access, and work strictly within building hours (typically 9:00 AM - 4:30 PM M-F).",
      },
      {
        q: "What is required for Miami-Dade 30-Year or 40-Year Electrical Recertification?",
        a: "The electrical inspection for building recertification requires evaluating the main service entrance, switchgear condition, panel labeling, grounding, emergency lighting, exit signage, and branch circuit integrity. Our licensed master electricians provide certified, photo-documented reports meeting Miami-Dade County standards.",
      },
      {
        q: "Can I add a Level 2 EV charger in my Miami condominium parking space?",
        a: "Yes. Florida Statute § 718.113 allows condominium owners to install EV charging stations with board approval. We perform load calculations on your subpanel, determine whether a dedicated meter or sub-meter is required, and pull the necessary City of Miami permit.",
      },
    ],
  },

  "electrician-coral-gables-fl": {
    architecturalContext:
      "Known as 'The City Beautiful', Coral Gables features strict zoning and architectural review boards (Board of Architects), historic Mediterranean Revival estates along Coral Way, Granada Blvd, and Cocoplum, and high-end retail along Miracle Mile. Electrical installations here must balance modern high-amperage power demands with historic preservation, concealed conduit routing, underground utility conversion, and strict exterior aesthetic guidelines.",
    permitInfo: {
      department: "City of Coral Gables Building Division",
      address: "405 Biltmore Way, Coral Gables, FL 33134",
      phone: "(305) 460-5235",
      jurisdictionCode: "City of Coral Gables (Jurisdiction 03)",
      portalName: "Coral Gables Citizen Self Service (CSS)",
      inspectionRequirements:
        "All exterior equipment (generators, meter cans, air conditioning disconnects) must comply with Board of Architects screening and setback guidelines. Underground service lateral conversions require trenching permits.",
      keyCodes: [
        "2023 National Electrical Code (NEC / NFPA 70)",
        "City of Coral Gables Zoning Code & Historic Preservation Guidelines",
        "Florida Building Code (HVHZ Rated Service Equipment)",
      ],
    },
    challenges: [
      {
        title: "Historic Mediterranean Revival Architecture",
        description:
          "Plaster walls, barrel tile roofs, and decorative stone require non-invasive wire fishing techniques to avoid cutting into irreplaceable vintage surfaces.",
        badge: "Historic Preservation",
      },
      {
        title: "Strict Board of Architects Exterior Aesthetics",
        description:
          "Meter bases, transfer switches, and standby generators cannot be exposed to the public right-of-way without approved architectural screening.",
        badge: "Aesthetics & Zoning",
      },
      {
        title: "High-Amperage Estate Power Demands",
        description:
          "Large estates in Gables Estates and Snapper Creek require 400A to 800A services for multiple HVAC units, pool chillers, automated lighting, and dual EV chargers.",
        badge: "High-Amperage Systems",
      },
    ],
    caseStudies: [
      {
        title: "Concealed 400A Service Upgrade on Coral Way Historic Home",
        neighborhood: "Granada / Coral Way, Coral Gables",
        serviceType: "Architectural Service Upgrade & Hidden Lighting",
        year: "2025",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A 1928 historic home required doubling electrical capacity for modern HVAC and an EV charger, but City of Coral Gables guidelines forbade visible exterior conduit on the facade.",
        solution:
          "Ran underground lateral feed from alley service point, installed flush-mounted meter enclosure compliant with Board of Architects guidelines, and routed branch circuits through attic joist spaces.",
        outcome:
          "Full 400A service established with 100% preservation of exterior historic stucco finishes.",
      },
    ],
    localValuePillars: [
      {
        title: "Coral Gables Board of Architects Compliance",
        desc: "We ensure all exterior equipment, meter locations, and generator pads conform to City Beautiful architectural standards.",
      },
      {
        title: "White-Glove Historic Home Care",
        desc: "Drop cloths, shoe covers, HEPA vacuuming, and surgical wiring techniques to preserve historic plaster and hardwood floors.",
      },
    ],
    localFaqs: [
      {
        q: "Does Coral Gables have special rules for standby generator installation?",
        a: "Yes. The City of Coral Gables enforces strict setback requirements, sound decibel limits, and landscape screening mandates for permanent generators. We handle the complete engineering, permitting, and inspection process.",
      },
      {
        q: "How do you rewire historic homes without tearing up walls?",
        a: "We use specialized flexible drill bits, fiber-optic inspection cameras, and attic/crawlspace wire fishing techniques to route new circuits without cutting large access channels into historic plaster.",
      },
    ],
  },

  "electrician-miami-beach-fl": {
    architecturalContext:
      "Miami Beach presents intense environmental and structural demands: extreme coastal salt air corrosion, flood zone requirements (FEMA velocity zones), historic Art Deco district preservation, and high-rise condominium towers from South of Fifth to North Beach. Marine-grade materials, stainless steel fasteners, NEMA 4X enclosures, and overnight commercial hospitality dispatch are essential here.",
    permitInfo: {
      department: "City of Miami Beach Building Department",
      address: "1700 Convention Center Drive, 2nd Floor, Miami Beach, FL 33139",
      phone: "(305) 673-7610",
      jurisdictionCode: "City of Miami Beach (Jurisdiction 02)",
      portalName: "City of Miami Beach Citizen Access Portal (CSS)",
      inspectionRequirements:
        "Elevated electrical equipment requirements in coastal velocity flood zones. Art Deco historic district facade preservation guidelines.",
      keyCodes: [
        "2023 National Electrical Code (NEC / NFPA 70)",
        "City of Miami Beach Coastal Construction Code",
        "Miami Beach Historic Preservation Board Guidelines",
      ],
    },
    challenges: [
      {
        title: "Severe Coastal Salt Air Oxidation",
        description:
          "Airborne salt rapidly corrodes standard galvanized electrical panels, outdoor disconnects, and landscape fixtures. We specify 316 stainless steel and marine-grade coated hardware.",
        badge: "Marine Grade",
      },
      {
        title: "Elevated Flood Plain Equipment Regulations",
        description:
          "All new electrical panels, meters, and transfer switches must sit above base flood elevation (BFE) according to Miami Beach flood resilience standards.",
        badge: "Flood Elevation",
      },
      {
        title: "Hospitality & Restaurant Night Shifts",
        description:
          "Hotels and restaurants on Ocean Drive and Collins Avenue require scheduled electrical repairs between 1:00 AM and 6:00 AM to avoid guest disruption.",
        badge: "Hospitality",
      },
    ],
    caseStudies: [
      {
        title: "Marine-Grade Stainless Switchgear Replacement on Collins Ave",
        neighborhood: "Mid-Beach, Miami Beach",
        serviceType: "Commercial Coastal Corrosion Retrofit",
        year: "2025",
        image: "https://images.unsplash.com/photo-1501509497947-782640bc1412?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A beachfront boutique hotel suffered intermittent phase failure because salt air had oxidized the outdoor main distribution panel busbars.",
        solution:
          "Replaced failing enclosure with a custom NEMA 4X 316 stainless steel distribution panel, upgraded to tin-plated copper busbars, and applied dielectric sealant to all lugs.",
        outcome:
          "Complete protection against salt air corrosion, backed by a written warranty and City of Miami Beach sign-off.",
      },
    ],
    localValuePillars: [
      {
        title: "Corrosion-Resistant Hardware Standard",
        desc: "We use copper busbars, stainless fasteners, and NEMA 4X boxes engineered to survive barrier-island salt air.",
      },
      {
        title: "Overnight Commercial Dispatch",
        desc: "Specialized night shifts for South Beach and Mid-Beach hospitality venues to protect guest experience.",
      },
    ],
    localFaqs: [
      {
        q: "Why do outdoor electrical panels fail faster on Miami Beach?",
        a: "The barrier island's high humidity and airborne marine salt cause galvanic corrosion on standard steel panels and aluminum busbars. We install marine-grade NEMA 4X enclosures and tin-plated copper connections to ensure long-term safety.",
      },
      {
        q: "Can you pull electrical permits for South Beach hotels?",
        a: "Yes. We regularly permit commercial work with the City of Miami Beach Building Department on Convention Center Drive, including life-safety circuits, commercial kitchen power, and architectural lighting.",
      },
    ],
  },
  "electrician-hialeah-fl": {
    architecturalContext:
      "Hialeah features dense post-war CBS (concrete block structure) residential neighborhoods constructed in the 1950s–1970s (East Hialeah, West Hialeah) alongside high-density industrial and manufacturing districts along the Okeechobee Road and Palmetto Expressway corridors. Electrical demands include upgrading aged 100A Zinsco and Federal Pacific panels in single-family homes, resolving ungrounded branch circuits, and supporting heavy 480V 3-phase machinery, commercial refrigeration, and motor control centers for local manufacturing facilities.",
    permitInfo: {
      department: "City of Hialeah Building Department",
      address: "501 Palm Ave, 2nd Floor, Hialeah, FL 33010",
      phone: "(305) 883-5825",
      jurisdictionCode: "City of Hialeah (Jurisdiction 04)",
      portalName: "City of Hialeah e-Permitting Portal (ePlans)",
      inspectionRequirements:
        "Rough electrical conduit in CBS walls, underground trenching inspection, service release with Florida Power & Light (FPL), and final electrical inspection.",
      keyCodes: [
        "2023 National Electrical Code (NEC / NFPA 70)",
        "Florida Building Code 8th Edition (2023)",
        "City of Hialeah Municipal Code Chapter 18",
        "Miami-Dade County HVHZ Requirements",
      ],
    },
    challenges: [
      {
        title: "1960s CBS Conduit Embedment & Zinsco Panels",
        description:
          "Original homes in East and West Hialeah frequently feature rusted Zinsco or FPE Stab-Lok load centers with rigid conduit embedded directly in CBS masonry.",
        badge: "Panel Replacement",
      },
      {
        title: "Heavy 3-Phase Industrial Power Drops",
        description:
          "Manufacturing and cabinet shops near Okeechobee Rd require balanced 480V/208V power, subpanel additions, and power factor correction to prevent utility penalties.",
        badge: "Industrial / 3-Phase",
      },
      {
        title: "Commercial Strip Plaza Subpanel Separation",
        description:
          "Retail spaces along West 49th St often need separate utility meters and panel separations to isolate commercial tenant power.",
        badge: "Commercial Retail",
      },
    ],
    caseStudies: [
      {
        title: "400A Service Upgrade & Subpanel Isolation in Hialeah Machine Shop",
        neighborhood: "East Hialeah / Okeechobee Corridor",
        serviceType: "Industrial Distribution & Commercial Rewire",
        year: "2024",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A commercial precision machining shop kept tripping its outdated 200A main service during peak CNC mill startups.",
        solution:
          "Engineered load calculation, installed 400A 120/208V 3-phase NEMA 3R switchboard, dedicated motor branch feeders, and individual breaker disconnects.",
        outcome:
          "Eliminated all line tripping, passed City of Hialeah final inspection, and kept shop operations fully on schedule.",
      },
    ],
    localValuePillars: [
      {
        title: "Fully Bilingual Field Crews",
        desc: "All Hialeah dispatch crews are fluent in English and Spanish for seamless on-site coordination with homeowners and property managers.",
      },
      {
        title: "Hialeah Building Dept Permitting Expedited",
        desc: "Direct daily experience with City of Hialeah building inspectors on Palm Avenue ensures swift approvals and zero project delays.",
      },
    ],
    localFaqs: [
      {
        q: "Do I need a permit to replace an electrical panel in Hialeah?",
        a: "Yes. The City of Hialeah Building Department requires an electrical permit for any panel replacement, meter upgrade, or service alteration. We pull the permit, coordinate the power disconnect/reconnect with FPL, and schedule the final city inspection.",
      },
      {
        q: "Are your electricians in Hialeah bilingual?",
        a: "Yes. Our master and journeyman electricians operating in Hialeah are fully bilingual (English and Spanish) to ensure clear communication and transparent explanations of all work.",
      },
    ],
  },
  "electrician-kendall-fl": {
    architecturalContext:
      "Kendall is one of South Florida's largest suburban communities, featuring expansive residential developments built between 1970 and 1995 (The Hammocks, Kendale Lakes, Continental Park, Killian). Electrical systems frequently suffer from high continuous run-time loads due to modern multi-zone HVAC systems running 12+ hours daily, severe power spikes from afternoon thunderstorms, and increasing demand for Level 2 EV charging stations on panels already operating near peak capacity.",
    permitInfo: {
      department: "Miami-Dade County Regulatory and Economic Resources (RER) - West Dade Permitting Center",
      address: "11805 SW 26th St (Coral Way), Miami, FL 33175",
      phone: "(786) 315-2000",
      jurisdictionCode: "Unincorporated Miami-Dade County (Jurisdiction 30)",
      portalName: "Miami-Dade County Citizen Access (ePermitting Portal)",
      inspectionRequirements:
        "Rough electrical inspection, service change disconnect/reconnect inspection with FPL, and final electrical sign-off.",
      keyCodes: [
        "2023 NEC / NFPA 70 Article 625 (EV Systems)",
        "Miami-Dade High-Velocity Hurricane Zone (HVHZ)",
        "Florida Building Code (Residential Chapter 34-43)",
      ],
    },
    challenges: [
      {
        title: "Continuous HVAC & Pool Pump Panel Overloading",
        description:
          "Suburban Kendall homes frequently push older 150A panels beyond their safe thermal limits during peak summer cooling months.",
        badge: "HVAC / Load Management",
      },
      {
        title: "Garage Service Capacity for Dual EV Charging",
        description:
          "Homes in The Hammocks and Killian adding dual electric vehicles need load calculations to determine if service upgrades or dynamic smart chargers are needed.",
        badge: "EV Charging",
      },
      {
        title: "Severe Afternoon Lightning Surge Spikes",
        description:
          "Kendall's flat terrain experiences frequent cloud-to-ground lightning strikes that fry smart appliances and delicate pool automation electronics.",
        badge: "Surge Protection",
      },
    ],
    caseStudies: [
      {
        title: "200A Service Panel Upgrade & Tesla Wall Connector in The Hammocks",
        neighborhood: "The Hammocks, Kendall",
        serviceType: "Residential Service & EV Infrastructure",
        year: "2024",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A Kendall homeowner's 150A panel was overheating and tripping breakers whenever their dual central AC units and EV charger operated at the same time.",
        solution:
          "Upgraded main service to 200A with a copper-bussed Square D QO enclosure, installed a dedicated 60A circuit for a Tesla Universal Wall Connector, and added a whole-home Siemens Type 2 Surge Protector.",
        outcome:
          "Clean load balance, passed Miami-Dade RER inspection, and seamless simultaneous vehicle charging and AC operation.",
      },
    ],
    localValuePillars: [
      {
        title: "Same-Day Kendall Dispatch",
        desc: "Fast dispatch across Kendall, Killian, and The Hammocks with fully stocked vans for immediate repairs.",
      },
      {
        title: "Miami-Dade RER Permitting Compliance",
        desc: "All work permitted through the West Dade Permitting Center on Coral Way with verified city pass tags.",
      },
    ],
    localFaqs: [
      {
        q: "Can my Kendall home handle an EV charger without upgrading my electrical panel?",
        a: "It depends on your current service size and existing loads. Many Kendall homes have 150A services that are near full capacity with central AC and electric water heaters. We perform a certified NEC Article 220 load calculation to let you know if a 200A upgrade or smart load-shedding device is required.",
      },
      {
        q: "How fast can you respond to an emergency electrical outage in Kendall?",
        a: "Our mobile technicians are stationed across Kendall and can arrive within 30 to 45 minutes for emergency situations, including smoking panels, burning outlets, or sudden partial power loss.",
      },
    ],
  },
  "electrician-doral-fl": {
    architecturalContext:
      "Doral combines massive logistics and distribution complexes, cold storage facilities, and multinational corporate headquarters around NW 87th Ave and NW 25th St with planned luxury residential communities (Doral Isles, Costa Del Sol, Downtown Doral). Commercial properties require 480V/277V 3-phase engineering, high-efficiency commercial LED retrofits, and uninterrupted power supply (UPS) backups, while residential properties feature modern smart-home automation and high-amperage backup generator hookups.",
    permitInfo: {
      department: "City of Doral Building Department",
      address: "8401 NW 53rd Terrace, Doral, FL 33166",
      phone: "(305) 593-6700",
      jurisdictionCode: "City of Doral (Jurisdiction 35)",
      portalName: "City of Doral Online Permitting Services",
      inspectionRequirements:
        "Underground electrical, rough electrical, emergency lighting and exit signage compliance, and final electrical acceptance.",
      keyCodes: [
        "2023 NEC / NFPA 70 Article 700 (Emergency Systems)",
        "Florida Building Code - Commercial Chapter 27",
        "City of Doral Code of Ordinances Chapter 102",
      ],
    },
    challenges: [
      {
        title: "480V 3-Phase Industrial Logistics & Cold Storage Feeds",
        description:
          "Heavy warehouse logistics complexes along NW 25th St need specialized high-voltage drops, motor disconnects, and industrial conduit runs.",
        badge: "Warehouse Logistics",
      },
      {
        title: "Commercial Tenant Build-Out Expedited Scheduling",
        description:
          "Retail and corporate office fit-outs in Downtown Doral and CityPlace demand rapid turnaround and night shifts to meet commercial lease deadlines.",
        badge: "Tenant Improvement",
      },
      {
        title: "Corporate Server Room Dedicated Power & UPS Isolation",
        description:
          "Financial and technology offices require isolated ground circuits, transient voltage surge suppression, and backup generator transfer switches.",
        badge: "Mission Critical",
      },
    ],
    caseStudies: [
      {
        title: "600A Three-Phase Distribution Switchgear for Cold Storage Warehouse",
        neighborhood: "NW 25th St Logistics Corridor, Doral",
        serviceType: "Commercial & Industrial Electrical",
        year: "2025",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A refrigerated logistics facility needed additional 480V power drops for 4 new rooftop condensing units without stopping existing warehouse operations.",
        solution:
          "Installed a 600A 480V distribution switchboard, ran rigid metal conduits across roof stanchions, and coordinated an overnight utility tie-in with FPL.",
        outcome:
          "Zero downtime for refrigerated goods, full City of Doral final approval, and a 1-year commercial workmanship warranty.",
      },
    ],
    localValuePillars: [
      {
        title: "Commercial & Industrial Expertise",
        desc: "Master electricians certified in 480V 3-phase, motor control centers, and commercial distribution switchboards.",
      },
      {
        title: "After-Hours & Weekend Scheduling",
        desc: "We perform heavy commercial tie-ins during nights and weekends to eliminate business disruption.",
      },
    ],
    localFaqs: [
      {
        q: "Do you offer after-hours commercial electrical work in Doral business parks?",
        a: "Yes. For corporate offices, warehouses, and retail venues in Doral, our teams routinely perform panel cutovers, conduit runs, and switchgear maintenance between 6:00 PM and 6:00 AM or on weekends.",
      },
      {
        q: "Can you provide a Certificate of Insurance (COI) for Doral commercial property managers?",
        a: "Yes. We carry $2,000,000 commercial general liability and statutory workers' compensation insurance, and we issue property-specific COIs within hours of request.",
      },
    ],
  },
  "electrician-homestead-fl": {
    architecturalContext:
      "Homestead and South Miami-Dade encompass agricultural facilities, nursery operations, and packing plants along Krome Avenue, historic CBS homes near Downtown Homestead, and modern master-planned communities (Keys Gate, Waterstone). Distinctive electrical considerations include utility coordination with both Florida Power & Light (FPL) and Homestead Public Services (HPS) municipal electric utility, heavy agricultural pump and well motor controls, and severe storm vulnerability requiring standalone standby power.",
    permitInfo: {
      department: "City of Homestead Development Services / Building Department",
      address: "100 Civic Court, Homestead, FL 33030",
      phone: "(305) 224-4500",
      jurisdictionCode: "City of Homestead (Jurisdiction 07)",
      portalName: "City of Homestead e-Permitting Portal (CSS)",
      inspectionRequirements:
        "Homestead Public Services (HPS) utility coordination check, electrical rough, and final building inspection.",
      keyCodes: [
        "2023 National Electrical Code (NEC NFPA 70)",
        "HPS Electric Utility Service Standards",
        "Florida Building Code 8th Edition (2023)",
      ],
    },
    challenges: [
      {
        title: "Dual Utility Interfaces (HPS Municipal vs FPL Grids)",
        description:
          "Certain Homestead properties are powered by Homestead Public Services (HPS) while others are FPL customers, requiring specific meter socket and service drop hardware.",
        badge: "Utility Coordination",
      },
      {
        title: "Agricultural Well Motor Controls & Lightning Exposure",
        description:
          "Nurseries and farms off Krome Ave suffer pump motor burnout from lightning surges and voltage sags across open agricultural corridors.",
        badge: "Agricultural Power",
      },
      {
        title: "Severe Storm Vulnerability & Generator Needs",
        description:
          "South Miami-Dade's exposure during tropical weather creates high demand for whole-property standby generator systems with automatic transfer switches.",
        badge: "Standby Power",
      },
    ],
    caseStudies: [
      {
        title: "Dual Utility Standby Generator & Pump Control Panel Upgrade",
        neighborhood: "Historic Downtown / Krome Ave Border, Homestead",
        serviceType: "Agricultural & Standby Power Installation",
        year: "2024",
        image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A commercial nursery suffered repeated crop damage during grid voltage drops and lightning strikes on their 15HP irrigation well pump.",
        solution:
          "Installed a 48kW Kohler liquid-cooled generator with service-rated ATS, soft-start motor controller, and heavy-duty lightning arrestor.",
        outcome:
          "Continuous automated water supply during power outages, certified by City of Homestead building inspectors.",
      },
    ],
    localValuePillars: [
      {
        title: "HPS & FPL Permitting Certified",
        desc: "Experienced with both Homestead Public Services municipal grid specs and FPL South Dade utility requirements.",
      },
      {
        title: "Agricultural & Rural Electrical Specialists",
        desc: "Heavy-duty outdoor conduit, well pumps, generator systems, and barn subpanels built to withstand South Dade weather.",
      },
    ],
    localFaqs: [
      {
        q: "What is the difference between HPS and FPL electrical work in Homestead?",
        a: "Homestead has its own municipal electric utility (Homestead Public Services) covering the city core, while surrounding areas use FPL. Each utility has distinct meter pan specifications, clearance rules, and service disconnect procedures. We are licensed and experienced with both utilities.",
      },
      {
        q: "Do you install whole-home generators in Homestead and Florida City?",
        a: "Yes. We install whole-home and agricultural standby generators (Kohler and Generac) complete with concrete pad, gas plumbing coordination, automatic transfer switch (ATS), and City of Homestead building permits.",
      },
    ],
  },
  "electrician-pinecrest-fl": {
    architecturalContext:
      "The Village of Pinecrest is characterized by 1-to-2-acre luxury estate properties, sprawling single-family compounds, and lush tropical tree canopies along Old Cutler Road and SW 67th Ave (Ludlam). Electrical projects require high-amperage 400A or 600A service entrances, architectural landscape lighting design that respects night-sky aesthetics, delicate directional boring to preserve mature live oak and banyan root systems, and seamless whole-estate standby generator installations.",
    permitInfo: {
      department: "Village of Pinecrest Building & Planning Department",
      address: "12645 Pinecrest Parkway (US-1), Pinecrest, FL 33156",
      phone: "(305) 234-2121",
      jurisdictionCode: "Village of Pinecrest (Jurisdiction 38)",
      portalName: "Village of Pinecrest e-Permitting Portal",
      inspectionRequirements:
        "Underground electrical inspection, tree root protection sign-off, generator sound attenuation verification, and final electrical sign-off.",
      keyCodes: [
        "2023 National Electrical Code",
        "Village of Pinecrest Tree Protection Code (Sec. 14-29)",
        "Pinecrest Noise Ordinance for Generators (Sec. 15-26)",
      ],
    },
    challenges: [
      {
        title: "400A to 800A Residential Service Drops",
        description:
          "Sprawling Pinecrest compounds with guest houses, dual EV chargers, pool heaters, and multiple central AC systems require commercial-grade residential service drops.",
        badge: "Estate Capacity",
      },
      {
        title: "Tree Root Preservation Mandates for Trenching",
        description:
          "Pinecrest's strict tree canopy protection laws require directional horizontal boring rather than open trenching near designated specimen oak and banyan trees.",
        badge: "Environmental & Roots",
      },
      {
        title: "Generator Sound Decibel Limits & Landscaping Concealment",
        description:
          "Village zoning codes mandate strict decibel sound limits and landscape screening for all permanent standby generator installations.",
        badge: "Zoning & Noise",
      },
    ],
    caseStudies: [
      {
        title: "400A Underground Service Conversion & 24kW Standby Generator",
        neighborhood: "Old Cutler Road Corridor, Pinecrest",
        serviceType: "Luxury Estate Infrastructure & Standby Power",
        year: "2024",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
        challenge:
          "An overhead service line was repeatedly damaged by falling royal palm fronds, leaving a 6,500 sq ft home without power.",
        solution:
          "Directionally bored 180 feet of 3-inch schedule 40 conduit beneath mature landscaping, converted to a 400A underground meter, and added a 24kW liquid-cooled standby generator on a concrete pad.",
        outcome:
          "Zero landscape destruction, passed Village of Pinecrest final inspection, and 100% automated power backup during storms.",
      },
    ],
    localValuePillars: [
      {
        title: "Estate Electrical Architecture",
        desc: "Experienced with 400A-800A multi-panel distribution, home automation integration, and architectural landscape lighting.",
      },
      {
        title: "Tree Preservation Certified Trenching",
        desc: "We use directional boring techniques to protect Pinecrest's protected tree canopies and luxury landscaping.",
      },
    ],
    localFaqs: [
      {
        q: "What are the rules for installing a generator in the Village of Pinecrest?",
        a: "Pinecrest requires an electrical and mechanical permit for standby generators. The unit must meet strict setback requirements from property lines and satisfy municipal sound decibel limits (maximum sound output tested at the property boundary). We handle the complete engineering, permitting, and inspection process.",
      },
      {
        q: "Can you convert an overhead power feed to underground on my Pinecrest estate?",
        a: "Yes. Underground service conversions are very popular in Pinecrest to prevent storm outages caused by falling tree limbs. We coordinate with FPL to install underground lateral conduit via directional boring, preserving your lawn and driveways.",
      },
    ],
  },
  "electrician-north-miami-fl": {
    architecturalContext:
      "North Miami features a diverse architectural landscape ranging from waterfront canal homes with private boat docks in Keystone Point and Sans Souci to mid-century multi-family apartment complexes and bustling commercial districts along Biscayne Boulevard (US-1) and NE 125th St. Work here focuses on marine-grade marina dock power pedestals with ground fault equipment protection (GFEP), solving salt air oxidation on outdoor coastal services, and replacing outdated multi-meter gang panels in multi-family buildings.",
    permitInfo: {
      department: "City of North Miami Community Planning & Development / Building Department",
      address: "776 NE 125th Street, North Miami, FL 33161",
      phone: "(305) 895-9820",
      jurisdictionCode: "City of North Miami (Jurisdiction 05)",
      portalName: "City of North Miami Online Permitting (BS&A Online)",
      inspectionRequirements:
        "Electrical rough, dock and shoreline bond inspection, FPL disconnect/reconnect inspection, and final electrical approval.",
      keyCodes: [
        "2023 NEC Article 555 (Marinas, Boatyards & Docks)",
        "Florida Building Code - Coastal Construction",
        "City of North Miami Municipal Code Chapter 5",
      ],
    },
    challenges: [
      {
        title: "Salt-Air Corrosion & Marine Dock Shore Power Installations",
        description:
          "Canal properties in Keystone Point and Sans Souci require NEMA 4X marine pedestals, stainless steel fasteners, and 30mA GFEP protection to prevent dock shock hazards.",
        badge: "Marine & Coastal",
      },
      {
        title: "1960s Multi-Family Meter Bank Upgrades & Submetering",
        description:
          "Multi-unit rental properties along NE 125th St frequently retain corroded multi-meter centers with obsolete main disconnects that fail annual insurance surveys.",
        badge: "Multi-Family",
      },
      {
        title: "High Groundwater Table Requiring Submersible Splices",
        description:
          "Underground conduits near North Miami canals frequently fill with brackish water, requiring waterproof cast-resin splices and schedule 80 PVC.",
        badge: "Waterproofing",
      },
    ],
    caseStudies: [
      {
        title: "100A Marine Dock Shore Power Pedestal & Panel Replacement in Keystone Point",
        neighborhood: "Keystone Point, North Miami",
        serviceType: "Marine Electrical & Service Replacement",
        year: "2025",
        image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=900&q=80",
        challenge:
          "A waterfront homeowner's dock had dangerous stray voltage and tripping breakers due to corroded aluminum conductors near saltwater.",
        solution:
          "Installed a dedicated 100A subpanel, marine-grade Eaton power pedestal with 50A/30A twist-lock receptacles, and 30mA GFEP protection per NEC Article 555.",
        outcome:
          "Safe, zero-stray-voltage boat slip power with City of North Miami Building Department final permit sign-off.",
      },
    ],
    localValuePillars: [
      {
        title: "Marine & Dock Power Certified",
        desc: "Specialists in shoreline electrical bonding, boat lift wiring, and NEC Article 555 marina code compliance.",
      },
      {
        title: "24/7 North Miami Emergency Dispatch",
        desc: "Rapid response across Biscayne Blvd, Sans Souci, and Arch Creek with fully equipped repair vans.",
      },
    ],
    localFaqs: [
      {
        q: "What electrical codes apply to private boat docks in North Miami?",
        a: "Dock and boatlift installations in North Miami must adhere to NEC Article 555 and Florida coastal building codes. They require ground-fault equipment protection (GFEP) limited to 30mA, marine-grade corrosion-resistant enclosures, and proper equipotential bonding to prevent electric shock drowning (ESD).",
      },
      {
        q: "Can you upgrade an old multi-meter panel on a North Miami apartment building?",
        a: "Yes. We specialize in multi-family commercial service upgrades. We pull the permits with the City of North Miami Building Department on NE 125th St, coordinate a scheduled power interruption with FPL, and replace the obsolete meter center with new breaker-protected disconnects.",
      },
    ],
  },
};

export const serviceDetailsBySlug: Record<
  string,
  {
    process: { title: string; body: string }[];
    caseStudy: {
      title: string;
      neighborhood: string;
      equipment: string;
      challenge: string;
      solution: string;
      result: string;
    };
    permitDetails: {
      required: boolean;
      permittingAgency: string;
      inspectionNotes: string;
    };
    whyChoose: string[];
  }
> = {
  "emergency-electrician-miami-fl": {
    process: [
      {
        title: "Instant 24/7 Phone Triage",
        body: "A licensed master electrician evaluates your hazard immediately by phone to instruct emergency safety shutoff while dispatching the nearest van.",
      },
      {
        title: "60-Min Arrival & Make-Safe",
        body: "We arrive on-site, de-energize the hazardous circuit, isolate electrical fires or burning smells, and secure life-safety for occupants.",
      },
      {
        title: "Thermal & Fault Diagnosis",
        body: "Using FLIR thermal imaging and ground fault testers, we locate the scorched busbar, shorted feeder, or failed breaker causing the issue.",
      },
      {
        title: "On-Site Repair & FPL Coordination",
        body: "Our vans carry commercial breakers, meter sockets, and heavy-gauge wire to execute permanent repairs immediately without delays.",
      },
    ],
    caseStudy: {
      title: "Midnight Scorched Busbar Repair in Brickell",
      neighborhood: "Brickell, Miami, FL",
      equipment: "Square D QO Main Breaker, Commercial Busbar Replacement, FLIR Thermal Imaging",
      challenge:
        "Condo owner experienced sparking and smoke from their main electrical panel at 11:30 PM on a Saturday with family in town. The breaker would not reset.",
      solution:
        "Dispatched emergency team in 35 minutes flat. Isolated the unit feeder, removed charred busbar components, replaced the damaged main breaker with genuine Square D hardware, and verified voltage stability under load.",
      result:
        "Power completely restored safely by 1:15 AM with zero midnight price gouging and full incident documentation.",
    },
    permitDetails: {
      required: true,
      permittingAgency: "Local Municipal Building Dept / FPL Emergency Tagging",
      inspectionNotes:
        "Life-safety repairs are executed immediately under emergency provisions of Florida Building Code; required emergency permit is logged first thing next business day.",
    },
    whyChoose: [
      "Live master electrician dispatch 24 hours a day, 365 days a year",
      "Average arrival time under 60 minutes across Miami-Dade County",
      "Fully stocked emergency service vans with commercial parts",
      "Flat, upfront pricing agreed upon before any tool touches your panel",
    ],
  },

  "panel-upgrade-miami-fl": {
    process: [
      {
        title: "Load Calculation & Engineering",
        body: "We calculate whole-house ampacity demands (HVAC, EV charger, pool, kitchen) to size your new 200A or 400A service according to NEC Article 220.",
      },
      {
        title: "Permit Filing & FPL Coordination",
        body: "We pull the official municipal electrical permit and schedule the required meter disconnect and reconnect with Florida Power & Light.",
      },
      {
        title: "Precision Installation & Surge Protection",
        body: "We mount the new copper-bus panel, install whole-home Type-1 surge suppression, rewire every branch circuit, and torque lugs to manufacturer specs.",
      },
      {
        title: "City Inspection & Power Reconnection",
        body: "The municipal electrical inspector walks the job, signs off the green tag, and FPL completes permanent power connection.",
      },
    ],
    caseStudy: {
      title: "Outdated Zinsco Panel Replacement for Insurance Renewal in Coral Gables",
      neighborhood: "Coral Gables, FL",
      equipment: "200A Eaton CH Commercial Copper Panel, Whole-Home Surge Protector, AFCI Breakers",
      challenge:
        "Homeowner received an insurance cancellation notice requiring the immediate replacement of an outdated 150A Zinsco panel known for hazardous breaker lockup.",
      solution:
        "Pulled City of Coral Gables permit, coordinated same-day FPL meter disconnect, upgraded service conductors to 4/0 aluminum, installed an Eaton 200A panel with whole-home surge, and passed inspection in a single day.",
      result:
        "Homeowner received signed city inspection certificate, satisfied insurance carrier requirements, and secured policy renewal with no gap in coverage.",
    },
    permitDetails: {
      required: true,
      permittingAgency: "City Building Department & FPL Coordination",
      inspectionNotes:
        "Requires city electrical permit, FPL service planner coordination, and electrical inspector green tag for permanent meter sealing.",
    },
    whyChoose: [
      "Permits pulled across all 34 Miami-Dade municipalities",
      "Same-day turnaround to minimize power outage during the swap",
      "Copper-bus commercial grade panels with lifetime warranties",
      "Built-in whole-home surge protection included on every panel install",
    ],
  },

  "commercial-electrician-miami-fl": {
    process: [
      {
        title: "Blueprint & Electrical Load Review",
        body: "We review architectural drawings, single-line diagrams, and equipment schedules to engineer compliant, efficient commercial distribution.",
      },
      {
        title: "Commercial Permitting & Utility Planning",
        body: "We submit engineered drawings to the local building department and coordinate dedicated 3-phase commercial transformer services with FPL.",
      },
      {
        title: "Phased & Non-Disruptive Installation",
        body: "We install rigid conduit, switchgear, dedicated machine circuits, and emergency lighting on off-hours or night shifts to protect business operations.",
      },
      {
        title: "Life-Safety Testing & Final Sign-Off",
        body: "Fire alarm interlocks, kitchen hood shunt trips, and emergency egress lighting are tested rigorously before final building official walkthrough.",
      },
    ],
    caseStudy: {
      title: "Complete Restaurant & Lounge Fit-Out in Wynwood",
      neighborhood: "Wynwood, Miami, FL",
      equipment: "400A 3-Phase Switchboard, Dedicated Kitchen Subpanels, Architectural Dimming Controls",
      challenge:
        "A new 3,800 sq ft restaurant build-out required high-voltage 3-phase kitchen equipment feeds, architectural low-voltage accent lighting, and emergency egress lighting.",
      solution:
        "Executed complete electrical installation including conduit runs, kitchen exhaust hood shunt-trip breaker interlocks, and Lutron Vive commercial lighting controls.",
      outcome:
        "Project delivered on schedule within budget, passing City of Miami commercial electrical and fire inspection on first walk.",
    },
    permitDetails: {
      required: true,
      permittingAgency: "City Commercial Building Division & Fire Rescue Department",
      inspectionNotes:
        "Engineered plans required for services over 400A or assemblies over 100 occupants. Requires rough, emergency lighting test, and final inspection.",
    },
    whyChoose: [
      "Full $2,000,000 commercial liability coverage and statutory workers' comp",
      "Dedicated commercial project managers for tenant build-outs",
      "Night and weekend shifts to protect active operations",
      "Experienced with Miami-Dade 30-Year/40-Year commercial recertifications",
    ],
  },

  "electrical-wiring-miami-fl": {
    process: [
      {
        title: "Non-Invasive Circuit Mapping",
        body: "We trace existing branch wiring, identify overloaded circuits, ungrounded lines, and thermal hot spots using digital circuit locators.",
      },
      {
        title: "Clean Pathway Wire Fishing",
        body: "Using attic and crawlspace pathways, we fish modern Romex and MC cable with minimal drywall cuts, avoiding cosmetic wall damage.",
      },
      {
        title: "Code-Compliant AFCI/GFCI Integration",
        body: "Every bedroom, living space, and kitchen circuit is wired with dual-function Arc-Fault (AFCI) and Ground-Fault (GFCI) protection.",
      },
      {
        title: "Full Load & Ground Verification",
        body: "Every outlet, switch, and luminaire is tested for proper polarity, low-resistance ground continuity, and voltage drop under load.",
      },
    ],
    caseStudy: {
      title: "Historic Whole-Home Fabric Rewire in Coconut Grove",
      neighborhood: "Coconut Grove, Miami, FL",
      equipment: "Southwire Copper Romex, Dual-Function AFCI/GFCI Breakers, Leviton Spec-Grade Devices",
      challenge:
        "A 1952 single-family home had degraded ungrounded cloth-insulated wiring that was actively flaking inside junction boxes, creating an electrical fire hazard.",
      solution:
        "Fished 22 new grounded copper branch circuits throughout the house via attic access with zero damage to historic tongue-and-groove wood ceilings.",
      outcome:
        "House brought into full compliance with 2023 NEC standards; owner qualified for lower homeowners insurance premiums.",
    },
    permitDetails: {
      required: true,
      permittingAgency: "Municipal Building Department",
      inspectionNotes:
        "Rewires require rough wiring inspection before closure, along with final electrical testing inspection.",
    },
    whyChoose: [
      "Surgical wire-fishing techniques that preserve walls and ceilings",
      "100% solid copper American-made wire and spec-grade outlets",
      "Full arc-fault protection to eliminate hidden electrical fire risks",
      "Backed by our 1-Year written workmanship warranty",
    ],
  },

  "ev-charger-installation-miami-fl": {
    process: [
      {
        title: "Panel Ampacity Assessment",
        body: "We calculate your panel's continuous capacity to confirm it can handle a 48A or 60A EV charging circuit without overloading.",
      },
      {
        title: "Dedicated High-Amperage Run",
        body: "We run heavy-duty 4 AWG or 6 AWG copper conductor from your main breaker panel directly to your charging location.",
      },
      {
        title: "Mounting & Smart Configuration",
        body: "We securely mount your Tesla Wall Connector, ChargePoint, or universal Level 2 charger and configure WiFi load balancing.",
      },
      {
        title: "Ground Fault Testing & City Sign-Off",
        body: "We perform full ground fault testing, verify charging amperage output, and handle municipal permitting for utility rebates.",
      },
    ],
    caseStudy: {
      title: "Tesla Universal Wall Connector in South Miami Garage",
      neighborhood: "South Miami, FL",
      equipment: "Tesla Universal Wall Connector (48A / 60A Breaker), 6 AWG Copper in EMT Conduit",
      challenge:
        "Main panel was located on opposite side of residence 70 feet away from the garage, requiring a clean run through finished ceilings.",
      solution:
        "Routed EMT conduit cleanly through the attic space, installed dedicated 60A Square D breaker, mounted charger, and configured 48A continuous charge rate.",
      outcome:
        "Owner charges their EV from 20% to 80% in under 5 hours; permitted with City of South Miami Building Department.",
    },
    permitDetails: {
      required: true,
      permittingAgency: "City Building Department",
      inspectionNotes:
        "City electrical permit required for all 240V dedicated circuits; required for FPL EVolution and local utility rebates.",
    },
    whyChoose: [
      "Certified for Tesla, ChargePoint, Rivian, and Universal Level 2 chargers",
      "Properly sized wiring to prevent overheating and voltage drop",
      "Permits pulled so you can claim utility rebates and tax credits",
      "Clean conduit routing that looks sharp in any garage or driveway",
    ],
  },
};
