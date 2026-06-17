export type ProductShape = 'Almond' | 'Square' | 'Coffin' | 'Oval' | 'Stiletto';

export interface Product {
  id: string;
  nameKey: string;
  tagKey: string;
  altKey: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  shape: ProductShape;
  length: 'Short' | 'Medium' | 'Long';
  colorKey: string;
  patternKey: string;
  stockKey: string;
}
