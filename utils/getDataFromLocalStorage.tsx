"use client";

import { DataFromLocalStorage } from "@type/ProductCart";
import getTotalPrice from "./calcTotalPrice";

const getDataFromLocalStorage = (): DataFromLocalStorage => {
    const data = localStorage.getItem("cart");
    const itemsFromLocalStorage = data ? JSON.parse(data) : [];
    const totalPriceFromLocalStorage = getTotalPrice(itemsFromLocalStorage);

    return {
      itemsFromLocalStorage,
      totalPriceFromLocalStorage,
    };
  };

export default getDataFromLocalStorage;