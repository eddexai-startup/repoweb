export type PitchLevel = 'low' | 'moderate' | 'steep' | 'extreme';
export type ComplexityLevel = 'simple' | 'moderate' | 'complex';
export type RoofingSystemType = 
  | 'standing_seam_metal'
  | 'architectural_slate'
  | 'commercial_membrane'
  | 'protective_coating';

export interface CalculationInput {
  groundFootprintSqFt: number;
  pitch: PitchLevel;
  complexity: ComplexityLevel;
  systemType: RoofingSystemType;
}

export interface CalculationResult {
  estimatedSurfaceAreaSqFt: number;
  roofSquares: number;
  pitchFactor: number;
  wasteFactor: number;
  expectedLifespan: string;
  windUpliftRating: string;
  fireRating: string;
  maintenanceFrequency: string;
  recommendedInspectionCycle: string;
}

export const PITCH_MULTIPLIERS: Record<PitchLevel, { factor: number; label: string; description: string }> = {
  low: { factor: 1.05, label: 'Low Slope (1/12 to 3/12)', description: 'Minimal gradient requiring reinforced water barrier membranes.' },
  moderate: { factor: 1.15, label: 'Moderate Pitch (4/12 to 7/12)', description: 'Standard architectural incline with rapid runoff drainage.' },
  steep: { factor: 1.30, label: 'Steep Pitch (8/12 to 11/12)', description: 'Dramatically visible planes with increased surface exposure.' },
  extreme: { factor: 1.50, label: 'Extreme Pitch (12/12+)', description: 'Architectural verticality requiring specialized anchor staging.' },
};

export const COMPLEXITY_MULTIPLIERS: Record<ComplexityLevel, { factor: number; label: string }> = {
  simple: { factor: 1.08, label: 'Simple Gable / Shed' },
  moderate: { factor: 1.15, label: 'Hips, Valleys & 1–2 Dormers' },
  complex: { factor: 1.25, label: 'Multi-level, Turrets & Complex Valleys' },
};

export const SYSTEM_SPECS: Record<RoofingSystemType, {
  name: string;
  category: string;
  expectedLifespan: string;
  windUpliftRating: string;
  fireRating: string;
  maintenanceFrequency: string;
  gaugeOrWeight: string;
  substrate: string;
  bestFor: string;
}> = {
  standing_seam_metal: {
    name: 'Standing Seam Architectural Metal',
    category: 'Engineered Metal',
    expectedLifespan: '50–80+ Years',
    windUpliftRating: 'Class 4 / Up to 160 mph',
    fireRating: 'Class A (Non-combustible)',
    maintenanceFrequency: 'Annual preventive inspection',
    gaugeOrWeight: '24-Gauge Galvalume / 0.8mm Zinc',
    substrate: 'High-temp synthetic underlayment over plywood deck',
    bestFor: 'Modern architectural residences and durable weather protection',
  },
  architectural_slate: {
    name: 'Natural Slate & Architectural Tile',
    category: 'Quarried Stone & Ceramic',
    expectedLifespan: '75–125+ Years',
    windUpliftRating: 'Class 4 / Up to 130 mph',
    fireRating: 'Class A (Non-combustible)',
    maintenanceFrequency: 'Bi-annual gutter & valley review',
    gaugeOrWeight: '800–1200 lbs / Square (Heavy timber support)',
    substrate: '30 lb ice & water shield over solid timber deck',
    bestFor: 'Heritage homes, luxury estates, and generational longevity',
  },
  commercial_membrane: {
    name: 'High-Performance Commercial Membrane',
    category: 'Commercial Flat & Low-Slope',
    expectedLifespan: '25–35 Years',
    windUpliftRating: 'FM Global 1-90 to 1-120 rated',
    fireRating: 'Class A (UL 790 certified)',
    maintenanceFrequency: 'Quarterly drain and seam clearing',
    gaugeOrWeight: '60–80 mil reinforced TPO / PVC / EPDM',
    substrate: 'Polyiso rigid thermal insulation over steel or concrete deck',
    bestFor: 'Commercial facilities, warehouses, and flat residential decks',
  },
  protective_coating: {
    name: 'Structural Restoration & Elastomeric Seal',
    category: 'Restoration & Re-weathering',
    expectedLifespan: '15–20 Years (Renewable)',
    windUpliftRating: 'Seamless monolithic adhesion',
    fireRating: 'Class A flame retardant',
    maintenanceFrequency: 'Biannual debris inspection',
    gaugeOrWeight: '30–45 dry mils monolithic silicone / acrylic',
    substrate: 'Prepared sound metal, aged single-ply, or modified bitumen',
    bestFor: 'Extending existing roof life without structural tear-off',
  },
};

export function calculateRoofMetrics(input: CalculationInput): CalculationResult {
  const footprint = Math.max(100, Math.min(100000, Number(input.groundFootprintSqFt) || 2000));
  const pitchCfg = PITCH_MULTIPLIERS[input.pitch] || PITCH_MULTIPLIERS.moderate;
  const complexityCfg = COMPLEXITY_MULTIPLIERS[input.complexity] || COMPLEXITY_MULTIPLIERS.moderate;
  const system = SYSTEM_SPECS[input.systemType] || SYSTEM_SPECS.standing_seam_metal;

  const rawSurfaceArea = footprint * pitchCfg.factor * complexityCfg.factor;
  const estimatedSurfaceAreaSqFt = Math.round(rawSurfaceArea);
  const roofSquares = Number((estimatedSurfaceAreaSqFt / 100).toFixed(1));

  return {
    estimatedSurfaceAreaSqFt,
    roofSquares,
    pitchFactor: pitchCfg.factor,
    wasteFactor: complexityCfg.factor,
    expectedLifespan: system.expectedLifespan,
    windUpliftRating: system.windUpliftRating,
    fireRating: system.fireRating,
    maintenanceFrequency: system.maintenanceFrequency,
    recommendedInspectionCycle: input.pitch === 'extreme' || input.pitch === 'steep' ? 'Semi-Annual (Spring & Autumn)' : 'Annual',
  };
}
