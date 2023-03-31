"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartType } from "@type/OrderCartType";
import { DataFromLocalStorage, ProductCart, SelectedProduct, SelectedProductID } from "@type/ProductCart";
import getTotalPrice from "@utils/calcTotalPrice";

const initialState: CartType = {
  items: [],
  totalPrice: 0,
  clientName: "",
  clientPhone: "",
  payMethod: "card-pay",
  deliveryPrice: 0,
  deliveryAddress: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLocalStorageData: (state, action: PayloadAction<DataFromLocalStorage>) => {
      state.items = action.payload.itemsFromLocalStorage;
      state.totalPrice = action.payload.totalPriceFromLocalStorage;
    },

    addItem: (state, action: PayloadAction<ProductCart>) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.weight === action.payload.weight
      );

      if (findItem) {
        findItem.count += action.payload.count;
      } else {
        state.items.push({
          ...action.payload,
        });
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    addItemInTheCart: (state, action: PayloadAction<SelectedProduct>) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.weight === action.payload.weight
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    decreaseItem(state, action: PayloadAction<SelectedProductID>) {
      const findItem = state.items.find(
        (item) => item.uniqId === action.payload.uniqId
      );
      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    removeItem(state, action: PayloadAction<SelectedProduct>) {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.weight === action.payload.weight
      );

      if (findItem) {
        state.items = state.items.filter((item) => item !== findItem);
      }

      if (!state.items.length) {
        state.deliveryPrice = 0;
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    setClientName(state, action: PayloadAction<string>) {
      state.clientName = action.payload;
    },

    setClientPhone(state, action: PayloadAction<string>) {
      state.clientPhone = action.payload;
    },

    setPayMethod(state, action: PayloadAction<string>) {
      state.payMethod = action.payload;
    },

    setDeliveryPrice(state, action: PayloadAction<number>) {
      state.deliveryPrice = action.payload;
    },

    setClientAddress(state, action: PayloadAction<string>) {
      state.deliveryAddress = action.payload;
    },

    clearAllData(state) {
      state.items = [];
      state.totalPrice = 0;
      state.clientName = "";
      state.clientPhone = "";
      state.payMethod = "card-pay";
      state.deliveryPrice = 0;
      state.deliveryAddress = "";
    },
  },
});

export const {
  addItem,
  decreaseItem,
  removeItem,
  setDeliveryPrice,
  addItemInTheCart,
  setClientName,
  setClientPhone,
  setPayMethod,
  setClientAddress,
  clearAllData,
  setLocalStorageData,
} = cartSlice.actions;

export default cartSlice.reducer;
