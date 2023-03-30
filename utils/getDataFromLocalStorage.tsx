"use client";

import getTotalPrice from "./calcTotalPrice";

const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("cart");
    const itemsFromLocalStorage = data ? JSON.parse(data) : [];
    const totalPriceFromLocalStorage = getTotalPrice(itemsFromLocalStorage);

    return {
      itemsFromLocalStorage,
      totalPriceFromLocalStorage,
    };
  };

export default getDataFromLocalStorage;