export interface ProductCart {
  id: string,
  uniqId: string,
  title: string,
  price: number,
  weight: number,
  imgURL: string,
  count: number,
}

export interface LocalStorageData {
  cart: ProductCart[];
}
export interface DataFromLocalStorage {
  itemsFromLocalStorage: ProductCart[];
  totalPriceFromLocalStorage: number;
}

export type SelectedProduct = Pick<ProductCart, 'id' | 'weight'>
export type SelectedProductID = Pick<ProductCart, 'uniqId'>
