export interface FurtherLink {
  value: string;
  href: string;
}

export interface NavLink {
  value: string;
  href?: string;
  links?: FurtherLink[];
}
