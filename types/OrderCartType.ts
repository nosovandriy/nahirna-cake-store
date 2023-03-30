import { ProductCart } from "./ProductCart";

export interface CartType {
  items: ProductCart[];
  totalPrice: number;
  clientName: string;
  clientPhone: string;
  payMethod: string;
  deliveryPrice: number;
  deliveryAddress: string;
}