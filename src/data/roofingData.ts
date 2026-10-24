import { RoofingSystem, ServiceDetail, GalleryProject, ProcessStep, FAQItem } from '../types/roofing';

export const HERO_IMAGE = '/src/assets/images/hero_roofing_architecture_1792831724947.jpg';
export const CRAFTSMAN_IMAGE = '/src/assets/images/craftsman_roofer_installing_1792832887468.jpg';
export const INSPECTOR_IMAGE = '/src/assets/images/inspector_engineer_hardhat_1792832888649.jpg';
export const SOLAR_IMAGE = '/src/assets/images/solar_metal_roof_aerial_1792832888151.jpg';
export const METAL_IMAGE = '/src/assets/images/service_standing_seam_metal_1792831724950.jpg';
export const SLATE_IMAGE = '/src/assets/images/service_slate_tile_restoration_1792831725582.jpg';
export const COMMERCIAL_IMAGE = '/src/assets/images/service_commercial_structural_1792831727143.jpg';
export const COASTAL_IMAGE = '/src/assets/images/gallery_modern_coastal_residence_1792831726670.jpg';

export const ROOFING_SYSTEMS: RoofingSystem[] = [
  {
    id: 'standing-seam',
    name: 'Standing Seam Architectural Metal',
    tagline: 'Concealed fastener engineering with thermal expansion float',
    category: 'Engineered Metal Systems',
    image: METAL_IMAGE,
    lifespan: '50–80+ Years',
    windRating: 'Class 4 (Up to 160 mph)',
    fireRating: 'Class A (Non-combustible)',
    minSlope: '1.5:12 Pitch',
    description: 'Manufactured with raised vertical interlocking seams that rise above the roof level, mechanically double-locked to prevent water penetration while allowing unhindered metal thermal expansion and contraction.',
    architecturalLayers: [
      { layerNumber: '01', title: 'Solid Substrate Decking', purpose: 'Engineered structural plywood or tongue-and-groove timber substrate.' },
      { layerNumber: '02', title: 'High-Temperature Synthetic Underlayment', purpose: 'Self-adhering vapor membrane with 260°F thermal resistance.' },
      { layerNumber: '03', title: 'Concealed Stainless Expansion Clips', purpose: 'Eliminates exposed exterior screw penetrations, allowing kinetic thermal movement.' },
      { layerNumber: '04', title: 'Double-Locked Standing Seam Trays', purpose: 'Continuous 24-gauge Galvalume or 0.8mm architectural zinc paneling.' }
    ],
    specifications: [
      { label: 'Available Alloys', value: 'Architectural Zinc, Copper, 24-Ga Galvalume' },
      { label: 'Seam Height', value: '1.5" to 2.0" Mechanical Lock' },
      { label: 'Fastening Method', value: 'Concealed Stainless Steel Clips' },
      { label: 'Solar Readiness', value: 'Direct clamp-on compatibility without roof perforations' }
    ]
  },
  {
    id: 'natural-slate',
    name: 'Quarried Slate & Architectural Tile',
    tagline: 'Centuries of permanence paired with hand-cut stone clefts',
    category: 'Natural Stone & Ceramic Systems',
    image: SLATE_IMAGE,
    lifespan: '75–125+ Years',
    windRating: 'Class 4 (Up to 130 mph)',
    fireRating: 'Class A (Non-combustible)',
    minSlope: '4:12 Pitch',
    description: 'Individual hand-split slate shingles fastened with solid copper nails. Natural stone provides unmatched imperviousness to UV radiation, freeze-thaw cycles, and airborne corrosive salts.',
    architecturalLayers: [
      { layerNumber: '01', title: 'Reinforced Timber Rafter Deck', purpose: 'Engineered to support dead loads of 800–1,200 lbs per square.' },
      { layerNumber: '02', title: 'Heavyweight Ice & Water Shield', purpose: 'Monolithic elastomeric membrane protecting all valleys and eaves.' },
      { layerNumber: '03', title: 'Solid Copper Valleys & Flashings', purpose: 'Custom copper fabrication designed to outlast ordinary sheet metal.' },
      { layerNumber: '04', title: 'Hand-Selected Natural Stone Slates', purpose: 'Interlocking slate course laid with calibrated 3" minimum headlap.' }
    ],
    specifications: [
      { label: 'Material Source', value: 'North American / Welsh Natural S1 Quarried Slate' },
      { label: 'Fasteners', value: 'Solid Copper Nails with Brass Wire Ties' },
      { label: 'Weight Range', value: '850 – 1,150 lbs / 100 sq ft' },
      { label: 'Recyclability', value: '100% Natural Stone / Zero synthetic waste' }
    ]
  },
  {
    id: 'commercial-membrane',
    name: 'High-Performance Commercial Membrane',
    tagline: 'Precision heat-welded seams for flat and low-slope facilities',
    category: 'Commercial & Low-Slope Systems',
    image: COMMERCIAL_IMAGE,
    lifespan: '25–35 Years',
    windRating: 'FM 1-90 to 1-120 Compliant',
    fireRating: 'Class A (UL 790 Listed)',
    minSlope: '0.25:12 Pitch',
    description: 'Engineered for commercial, industrial, and modern flat-roof residential architecture. Thermoplastic polyolefin (TPO) and PVC membranes are robotically heat-welded into a single monolithic waterproof plane.',
    architecturalLayers: [
      { layerNumber: '01', title: 'Corrugated Steel or Precast Concrete', purpose: 'Load-bearing commercial structural roof platform.' },
      { layerNumber: '02', title: 'Vapor Retarder Barrier', purpose: 'Stops interior humidity from entering the insulation layer.' },
      { layerNumber: '03', title: 'Staggered Polyiso Thermal Insulation', purpose: 'Multi-layer high-density boards providing continuous R-30+ thermal envelope.' },
      { layerNumber: '04', title: 'Reinforced TPO/PVC Top Membrane', purpose: 'High solar-reflective cool-roof membrane with hot-air welded seams.' }
    ],
    specifications: [
      { label: 'Membrane Thickness', value: '60 mil to 80 mil Reinforced Sheet' },
      { label: 'Joint Welding', value: 'Continuous Robotic Hot-Air Seam Fusion (3,000 psi)' },
      { label: 'Solar Reflectivity (SRI)', value: 'Initial SRI > 104 (Cool Roof Certified)' },
      { label: 'Drainage Detailing', value: 'Tapered insulation cricket channels to internal sumps' }
    ]
  },
  {
    id: 'restoration-coating',
    name: 'Structural Restoration & Elastomeric Systems',
    tagline: 'Monolithic waterproofing renewal without facility downtime',
    category: 'Restoration & Re-weathering',
    image: COASTAL_IMAGE,
    lifespan: '15–20 Years (Renewable)',
    windRating: 'Full Surface Adhesion (Seamless)',
    fireRating: 'Class A Fire Retardant',
    minSlope: 'Applicable to All Slopes',
    description: 'Restores aging metal, asphalt, or membrane roofs through meticulous chemical decontamination, structural fastener reinforcement, and multi-pass monolithic elastomeric silicone applications.',
    architecturalLayers: [
      { layerNumber: '01', title: 'Hydro-Decontamination & Rust Treatment', purpose: 'High-pressure surface preparation and anti-corrosive primer.' },
      { layerNumber: '02', title: 'Fastener & Seam Reinforcement', purpose: 'Fabric-reinforced elastomeric encapsulation over all joints and fasteners.' },
      { layerNumber: '03', title: 'Base Bonding Layer', purpose: 'Deep-penetrating acrylic or silicone adhesion coating.' },
      { layerNumber: '04', title: 'UV-Reflective Finish Coat', purpose: 'Seamless moisture barrier that expands and contracts with ambient weather.' }
    ],
    specifications: [
      { label: 'Dry Film Thickness', value: '32 to 45 mils Monolithic Coverage' },
      { label: 'Elongation Capability', value: '350% to 500% Elastic Recovery' },
      { label: 'Environmental Impact', value: 'Zero landfill tear-off waste; 100% sustainable' },
      { label: 'Renewal Cycle', value: 'Re-coatable every 15–20 years for perpetual protection' }
    ]
  }
];

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'architectural-metal',
    number: '01',
    title: 'Architectural Metal & Standing Seam',
    subtitle: 'Precision On-Site Rollforming & Concealed Fastener Systems',
    summary: 'Custom-engineered metal roofing panels designed for contemporary residential homes and high-exposure coastal architecture.',
    involves: [
      'Site-calibrated rollforming to eliminate horizontal panel splices',
      'Concealed expansion clip integration preventing panel oil-canning',
      'Hand-crafted custom copper and zinc flashing around chimneys, rakes, and dormers',
      'Full underlayment vapor sealing with high-temperature barrier membranes'
    ],
    addresses: 'Homeowners and architects requiring permanent storm protection, modern clean lines, and zero exposed fastener leak points.',
    nextStep: 'Request an architectural standing-seam consultation and material sample review.',
    image: METAL_IMAGE,
    accentBadge: 'Engineered Precision'
  },
  {
    id: 'slate-and-specialty-tile',
    number: '02',
    title: 'Natural Slate & Architectural Tile Craftsmanship',
    subtitle: 'Heritage Stone Masonry & Generational Durability',
    summary: 'Artisanal installation and restoration of genuine quarried slate, barrel clay tile, and architectural concrete profiles with copper valley drainage.',
    involves: [
      'Structural rafter load verification and timber reinforcement',
      'Individual hand-holing and copper nail fastening of each stone tile',
      'Custom soldered copper flashing for valleys, sidewalls, and parapet caps',
      'Ridge cap ventilation integration that preserves historic roof aesthetics'
    ],
    addresses: 'Heritage properties, luxury estates, and landmark buildings requiring authentic historic durability exceeding 75+ years.',
    nextStep: 'Book a specialized roof assessment for slate integrity, valley condition, and rafter load capacity.',
    image: SLATE_IMAGE,
    accentBadge: 'Artisanal Masonry'
  },
  {
    id: 'commercial-structural-roofing',
    number: '03',
    title: 'Commercial Flat & Low-Slope Systems',
    subtitle: 'Engineered TPO, PVC, and Tapered Insulation Drainage',
    summary: 'Turnkey low-slope commercial roofing systems built for corporate headquarters, industrial logistics facilities, and mixed-use complexes.',
    involves: [
      'Tapered polyisocyanurate insulation design to eliminate standing water ponding',
      'Robotic heat-welded thermoplastic seams tested to withstand 3,000 psi shear',
      'Architectural edge metal and perimeter coping engineered for extreme wind uplift',
      'Penetration flashings for HVAC curbs, solar arrays, skylights, and conduit runs'
    ],
    addresses: 'Facility directors and commercial building owners seeking energy-efficient cool-roof performance, zero leaks, and minimum business interruption.',
    nextStep: 'Submit facility drawings or schedule an on-site commercial roof survey.',
    image: COMMERCIAL_IMAGE,
    accentBadge: 'Commercial Grade'
  },
  {
    id: 'roof-restoration-coating',
    number: '04',
    title: 'Protective Coatings & Structural Restoration',
    subtitle: 'Cost-Effective Life Extension Without Landfill Waste',
    summary: 'Monolithic fluid-applied restoration that restores weatherproofing, cures minor thermal leaks, and reflects up to 85% of solar heat radiation.',
    involves: [
      'Ultra-high-pressure surface decontamination and moss/algae remediation',
      'Structural seam reinforcing mesh and fastener torque re-anchoring',
      'Multi-pass high-solids elastomeric silicone or acrylic application',
      'Thermal imaging audit to verify complete moisture elimination'
    ],
    addresses: 'Aging commercial or residential roofs needing comprehensive waterproofing renewal at 40–60% lower cost than full tear-off.',
    nextStep: 'Request a core-sample and thermal diagnostic inspection to evaluate restoration viability.',
    image: COASTAL_IMAGE,
    accentBadge: 'Zero Tear-Off Renewal'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'alpine-standing-seam',
    title: 'Alpine Ridge Residence',
    category: 'metal',
    categoryLabel: 'Architectural Metal',
    system: 'Standing Seam 24-Ga Matte Graphite Zinc',
    image: COASTAL_IMAGE,
    aspect: '16:9',
    architecturalNotes: 'Designed for heavy snow loads with concealed mechanical lock seams and continuous snow bracket retention systems.',
    materialHighlight: 'Matte Zinc finish with concealed thermal sliding clips',
    slope: '10:12 Steep Gabled'
  },
  {
    id: 'modernist-villa',
    title: 'The Pavilion Estate',
    category: 'metal',
    categoryLabel: 'Architectural Metal',
    system: 'Dual-Pitch Standing Seam Galvalume',
    image: HERO_IMAGE,
    aspect: '16:9',
    architecturalNotes: 'Multi-plane residence featuring cantilevered soffits and recessed architectural gutters integrated directly into roof perimeter.',
    materialHighlight: 'Charcoal fluoropolymer coating with 40-year finish warranty',
    slope: '4:12 & 6:12 Dynamic Pitch'
  },
  {
    id: 'heritage-manor',
    title: 'Blackwood Estate Stone Roof',
    category: 'slate',
    categoryLabel: 'Natural Slate & Tile',
    system: 'Welsh Natural S1 Quarried Slate',
    image: SLATE_IMAGE,
    aspect: '4:3',
    architecturalNotes: 'Graduated stone slate thickness from eave to ridge, featuring custom hand-beaten 16oz copper valley and dormer flashings.',
    materialHighlight: 'Natural unfading black slate with solid copper nails',
    slope: '12:12 Architectural Pitch'
  },
  {
    id: 'meridian-center',
    title: 'Meridian Commercial Innovation Center',
    category: 'commercial',
    categoryLabel: 'Commercial Structural',
    system: '80-Mil Reinforced Thermoplastic Membrane',
    image: COMMERCIAL_IMAGE,
    aspect: '4:3',
    architecturalNotes: 'Engineered tapered insulation with zero standing ponding, integrated mechanical curb curbs, and wind uplift perimeter ballast.',
    materialHighlight: 'High solar reflectance index (SRI 108) cool roof surface',
    slope: '0.25:12 Low-Slope Parapet'
  },
  {
    id: 'coastal-solar-residence',
    title: 'Pacific Horizon Solar Roof',
    category: 'metal',
    categoryLabel: 'Architectural Metal',
    system: 'Standing Seam with Integrated Photovoltaics',
    image: SOLAR_IMAGE,
    aspect: '16:9',
    architecturalNotes: 'Non-penetrating mechanical clamp solar integration directly onto standing seam ribs, preserving 100% moisture barrier.',
    materialHighlight: 'Class 4 Impact Resistant Matte Finish',
    slope: '3:12 Monopitch'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    phase: 'Assessment',
    title: 'Drone Diagnostics & Physical Deck Audit',
    description: 'We evaluate structural rafters, decking integrity, thermal insulation, moisture levels, and flashing transition points with high-definition drone optics.',
    deliverables: ['Detailed deck condition report', 'Slope and drainage analysis', 'Infrared moisture assessment']
  },
  {
    step: '02',
    phase: 'Engineering',
    title: 'Architectural Specification & Scope of Works',
    description: 'Our specialists engineer the exact roof assembly: underlayment rating, fastener clip spacing for local wind speeds, and custom sheet metal profiles.',
    deliverables: ['Itemized architectural specification', 'Detailed material schedule', 'Transparent fixed-scope quotation']
  },
  {
    step: '03',
    phase: 'Fabrication',
    title: 'Precision Rollforming & Flashing Detailing',
    description: 'Panels and custom flashing trims are factory-calibrated or rollformed on site to precise building measurements, eliminating vulnerable transverse seams.',
    deliverables: ['Custom-milled panel continuous runs', 'Soldered or bent copper/zinc flashings', 'Jobsite staging logistics plan']
  },
  {
    step: '04',
    phase: 'Installation',
    title: 'Certified Master Craftsmanship Execution',
    description: 'Our licensed roofing crew installs the multi-layer barrier, fastening systems, and surface panels strictly according to manufacturer structural tolerances.',
    deliverables: ['Full weather protection during build', 'Daily progress and safety oversight', 'Clean jobsite containment protocol']
  },
  {
    step: '05',
    phase: 'Certification',
    title: 'Multi-Point Quality Audit & Handover',
    description: 'Every seam, penetration, and flashing is thoroughly audited. You receive comprehensive warranty documentation, care instructions, and maintenance schedules.',
    deliverables: ['Final quality certification', 'Digital photographic project archive', 'Scheduled bi-annual maintenance calendar']
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'How do standing seam metal roofs perform in extreme weather and high winds?',
    answer: 'Standing seam systems feature interlocking ribs that conceal all fasteners beneath the surface. Because clips allow the metal to slide during thermal expansion while anchoring directly to the deck, these systems achieve Class 4 wind uplift ratings (tested up to 160 mph) and Class A fire resistance.',
    category: 'Materials & Durability'
  },
  {
    question: 'How long does a full roof replacement take from assessment to completion?',
    answer: 'A standard residential architectural metal or slate roof typically takes 4 to 8 working days on site, depending on roof slope, footprint, and tear-off requirements. Commercial membrane projects vary based on square footage and weather windows. We establish fixed milestone schedules before work begins.',
    category: 'Process & Timelines'
  },
  {
    question: 'When should a roof be restored with elastomeric coatings instead of replaced?',
    answer: 'If the underlying roof deck and insulation remain structurally dry and sound, but the top membrane or metal surface is suffering from weathered seams, minor surface corrosion, or UV embrittlement, fluid-applied restoration provides 15–20 years of renewable waterproofing at approximately half the cost of replacement.',
    category: 'Restoration vs Replacement'
  },
  {
    question: 'Are metal and slate roofs significantly heavier than standard shingles?',
    answer: 'Standing seam metal is actually lighter than traditional asphalt shingles (approx. 100–150 lbs per square vs. 250–350 lbs for architectural shingles), putting less stress on framing. Natural slate, by contrast, is heavy (800–1,200 lbs per square) and requires structural rafter verification, which is standard in our initial audit.',
    category: 'Structural Requirements'
  },
  {
    question: 'What ongoing maintenance does an architectural roofing system require?',
    answer: 'High-end metal and slate systems are designed for minimal maintenance. We recommend annual inspections to clear debris from internal gutters, check valley discharge points, and inspect pipe boot collars after severe seasonal storms.',
    category: 'Maintenance & Care'
  }
];
