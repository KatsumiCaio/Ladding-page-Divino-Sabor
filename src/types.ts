export interface Review {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  initials?: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'doces' | 'salgados' | 'cafes';
  description: string;
  price: string;
  badge?: string;
  image: string;
}

export interface SectionCopy {
  id: string;
  sectionNumber: number;
  title: string;
  framerFormattedText: string;
  fields: {
    label: string;
    text: string;
  }[];
}

export interface FramerColorSpec {
  name: string;
  hex: string;
  usage: string;
  tailwindClass: string;
}
