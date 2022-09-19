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
  name: string;
}

// manicureData

export interface CardData {
  title: string;
  visibleText: string;
  hiddenText: string;
  imgDataPath: DataSliderItem[];
}
