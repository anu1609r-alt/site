export interface University {
  id: string;
  name: string;
  shortName: string;
  city: string;
  type: string;
  rating: number;
  programsCount: number;
  hasGrants: boolean;
  costEstimate: string;
  language: string;
  studyFormat: string;
  description: string;
  coverPhoto: string;
  address: string;
  website: string;
  phone: string;
  programs: string[];
  admissionReqs: string;
  isDemo: boolean;
}

export interface Specialty {
  id: string;
  title: string;
  category: string;
  description: string;
  subjects: string;
  careers: string;
  universities: string[];
}

export interface User {
  name: string;
  email: string;
  role: 'student' | 'admin';
}

export interface FavoritesState {
  universities: string[];
  specialties: string[];
}
