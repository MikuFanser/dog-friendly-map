export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: UserPreferences;
  savedLocations: string[];
  dogs: Dog[];
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  size: 'small' | 'medium' | 'large';
  age: number;
  specialNeeds: string[];
  photo?: string;
}

export interface UserPreferences {
  lightingRequired: boolean;
  leashRequired: boolean;
  fencedAreaRequired: boolean;
  wasteStationsRequired: boolean;
  waterFountainRequired: boolean;
  parkingRequired: boolean;
  maxDistance: number; // in km
  preferredSize: 'small' | 'medium' | 'large' | 'any';
}

export interface Park {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  features: {
    nightLighting: boolean;
    leashRequired: boolean;
    fencedArea: boolean;
    wasteStations: boolean;
    waterFountain: boolean;
    parking: boolean;
    size: 'small' | 'medium' | 'large';
    surfaceType: string;
    amenities: string[];
  };
  rating: number;
  reviewCount: number;
  photos: string[];
  description: string;
  hours: string;
  rules: string[];
}

export interface FilterOptions {
  lightingRequired?: boolean;
  leashRequired?: boolean;
  fencedAreaRequired?: boolean;
  wasteStationsRequired?: boolean;
  waterFountainRequired?: boolean;
  parkingRequired?: boolean;
  maxDistance?: number;
  preferredSize?: 'small' | 'medium' | 'large' | 'any';
}