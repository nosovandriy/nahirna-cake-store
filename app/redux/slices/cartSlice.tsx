import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCart } from "@type/ProductCart";

export interface CartType {
  totalPrice: number;
  items: ProductCart[];
  cakeDelivery: number;
}

const initialState: CartType = {
  totalPrice: 0,
  items: [],
  cakeDelivery: 0,
};

const getTotalPrice = (items: ProductCart[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
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

      // state.totalPrice = state.items.reduce((sum, item) => {
      //   return item.price * item.count + sum;
      // }, 0);
      state.totalPrice = getTotalPrice(state.items);
    },

    addItemInTheCart: (state, action) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.weight === action.payload.weight
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    decreaseItem(state, action) {
      const findItem = state.items.find(
        (item) => item.uniqId === action.payload.uniqId
      );
      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    removeItem(state, action) {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.weight === action.payload.weight
      );

      if (findItem) {
        state.items = state.items.filter((item) => item !== findItem);
      }

      if (!state.items.length) {
        state.cakeDelivery = 0;
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.cakeDelivery = 0;
    },

    withDelivery(state) {
      state.cakeDelivery = 100;
    },

    withoutDelivery(state) {
      state.cakeDelivery = 0;
    },
  },
});

export const {
  addItem,
  decreaseItem,
  removeItem,
  clearItems,
  withDelivery,
  withoutDelivery,
  addItemInTheCart,
} = cartSlice.actions;

export default cartSlice.reducer;
