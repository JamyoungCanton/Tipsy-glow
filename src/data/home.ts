import type { Product, ProductShape } from '@/types/product';

export interface CategoryEntry {
  id: string;
  titleKey: string;
  subtitleKey: string;
  accentKey: string;
  altKey: string;
  image: string;
}

export interface StepItem {
  id: string;
  titleKey: string;
  copyKey: string;
}

export interface ShapeEntry {
  id: string;
  name: ProductShape;
  descriptionKey: string;
  image: string;
}

export const categories: CategoryEntry[] = [
  {
    id: 'soft-glaze',
    titleKey: 'home.categories.items.softGlaze.title',
    subtitleKey: 'home.categories.items.softGlaze.subtitle',
    accentKey: 'home.categories.items.softGlaze.accent',
    altKey: 'home.categories.items.softGlaze.alt',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'rose-detail',
    titleKey: 'home.categories.items.roseDetail.title',
    subtitleKey: 'home.categories.items.roseDetail.subtitle',
    accentKey: 'home.categories.items.roseDetail.accent',
    altKey: 'home.categories.items.roseDetail.alt',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'clean-french',
    titleKey: 'home.categories.items.cleanFrench.title',
    subtitleKey: 'home.categories.items.cleanFrench.subtitle',
    accentKey: 'home.categories.items.cleanFrench.accent',
    altKey: 'home.categories.items.cleanFrench.alt',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85',
  },
];

export const bestSellers: Product[] = [
  {
    id: 'petal-milk-almond',
    nameKey: 'home.products.petalMilkAlmond.name',
    tagKey: 'home.products.petalMilkAlmond.tag',
    altKey: 'home.products.petalMilkAlmond.alt',
    price: 24,
    originalPrice: 32,
    rating: 4.9,
    reviewCount: 186,
    image:
      'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?auto=format&fit=crop&w=900&q=85',
    shape: 'Almond',
    length: 'Medium',
    colorKey: 'common.productLabels.colors.milkyPink',
    patternKey: 'common.productLabels.patterns.glaze',
    stockKey: 'common.productLabels.stock.inStock',
  },
  {
    id: 'rosewater-french',
    nameKey: 'home.products.rosewaterFrench.name',
    tagKey: 'home.products.rosewaterFrench.tag',
    altKey: 'home.products.rosewaterFrench.alt',
    price: 28,
    originalPrice: 36,
    rating: 4.8,
    reviewCount: 142,
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=85',
    shape: 'Square',
    length: 'Short',
    colorKey: 'common.productLabels.colors.blushNude',
    patternKey: 'common.productLabels.patterns.french',
    stockKey: 'common.productLabels.stock.lowStock',
  },
  {
    id: 'velvet-bow-coffin',
    nameKey: 'home.products.velvetBowCoffin.name',
    tagKey: 'home.products.velvetBowCoffin.tag',
    altKey: 'home.products.velvetBowCoffin.alt',
    price: 30,
    originalPrice: 38,
    rating: 4.9,
    reviewCount: 98,
    image:
      'https://images.unsplash.com/photo-1600428853876-fb5a850b444f?auto=format&fit=crop&w=900&q=85',
    shape: 'Coffin',
    length: 'Long',
    colorKey: 'common.productLabels.colors.roseNude',
    patternKey: 'common.productLabels.patterns.bow',
    stockKey: 'common.productLabels.stock.inStock',
  },
  {
    id: 'pearl-oval-gloss',
    nameKey: 'home.products.pearlOvalGloss.name',
    tagKey: 'home.products.pearlOvalGloss.tag',
    altKey: 'home.products.pearlOvalGloss.alt',
    price: 26,
    originalPrice: 34,
    rating: 4.7,
    reviewCount: 121,
    image:
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=85',
    shape: 'Oval',
    length: 'Medium',
    colorKey: 'common.productLabels.colors.pearlBeige',
    patternKey: 'common.productLabels.patterns.pearl',
    stockKey: 'common.productLabels.stock.inStock',
  },
];

export const steps: StepItem[] = [
  {
    id: 'choose',
    titleKey: 'home.howItWorks.steps.choose.title',
    copyKey: 'home.howItWorks.steps.choose.copy',
  },
  {
    id: 'prep',
    titleKey: 'home.howItWorks.steps.prep.title',
    copyKey: 'home.howItWorks.steps.prep.copy',
  },
  {
    id: 'wear',
    titleKey: 'home.howItWorks.steps.wear.title',
    copyKey: 'home.howItWorks.steps.wear.copy',
  },
];

export const shapes: ShapeEntry[] = [
  {
    id: 'almond',
    name: 'Almond',
    descriptionKey: 'home.shopByShape.items.almond.description',
    image:
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'square',
    name: 'Square',
    descriptionKey: 'home.shopByShape.items.square.description',
    image:
      'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'coffin',
    name: 'Coffin',
    descriptionKey: 'home.shopByShape.items.coffin.description',
    image:
      'https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'oval',
    name: 'Oval',
    descriptionKey: 'home.shopByShape.items.oval.description',
    image:
      'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=700&q=85',
  },
];
