export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  // Extended Details
  location: string;
  client: string;
  value: string;
  year: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

export enum Page {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  PROJECTS = '/projects',
  CAREERS = '/careers',
  CONTACT = '/contact',
  QUOTE = '/quote'
}