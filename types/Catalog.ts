export interface Catalog {
  id: string;
  popularity: number;
  title: string;
  price: number;
  weights: number[];
  sellingOptions: string;
  description: string;
  ingredients: string;
  imageTitle: string;
  imageBlur: string;
  images: string[];
}
