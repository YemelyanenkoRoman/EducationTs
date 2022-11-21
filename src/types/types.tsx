// main navigation
export interface FurtherLink {
  value: string;
  href: string;
}

export interface NavLink {
  value: string;
  href?: string;
  links?: FurtherLink[];
}

// main Slider Data

export interface DataSliderItem {
  id: number | string;
  url: string;
}

// manicureData

export interface CardData {
  id: string | number;
  title: string;
  visibleText: string;
  hiddenText: string;
  imgDataPath: DataSliderItem[];
}

// Footer socialNetworks

export interface SocialNetworks {
  id: number | string;
  href: string;
  url: string;
}

export interface DataContacts {
  id: number | string;
  href?: string;
  url: string;
  text?: string;
}
