import { ProductCart } from "@type/ProductCart";

const getTotalPrice = (itemsStore: ProductCart[]) => {
  return itemsStore.reduce((sum, item) => item.price * item.count + sum, 0);
};

export default getTotalPrice;