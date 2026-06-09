/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ar' | 'fr';

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  details: {
    ar: string[];
    fr: string[];
  };
}

export interface ProductItem {
  id: string;
  category: 'cctv' | 'smart' | 'solar' | 'access';
  title: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  price: number; // in IQD
  oldPrice?: number;
  image: string;
  tags: {
    ar: string[];
    fr: string[];
  };
  specs: {
    label: { ar: string; fr: string };
    value: { ar: string; fr: string };
  }[];
  isPopular?: boolean;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: {
    ar: string;
    fr: string;
  };
  location: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: {
    ar: string;
    fr: string;
  };
  role: {
    ar: string;
    fr: string;
  };
  comment: {
    ar: string;
    fr: string;
  };
  rating: number;
}
