export interface RoofingSystem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  lifespan: string;
  windRating: string;
  fireRating: string;
  minSlope: string;
  description: string;
  architecturalLayers: {
    layerNumber: string;
    title: string;
    purpose: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  involves: string[];
  addresses: string;
  nextStep: string;
  image: string;
  accentBadge: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'metal' | 'slate' | 'commercial' | 'restoration';
  categoryLabel: string;
  system: string;
  image: string;
  aspect: string;
  architecturalNotes: string;
  materialHighlight: string;
  slope: string;
}

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
