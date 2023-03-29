import { createSlice } from "@reduxjs/toolkit";
import { ProductCart } from "@type/ProductCart";

export interface CartType {
  items: ProductCart[];
  totalPrice: number;
  clientName: string;
  clientPhone: string;
  payMethod: string;
  cakeDelivery: number;
  deliveryAddress: string;
}

const initialState: CartType = {
  items: [],
  totalPrice: 0,
  clientName: "",
  clientPhone: "",
  payMethod: "card-pay",
  cakeDelivery: 0,
  deliveryAddress: "",
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

    getClientName(state, action) {
      state.clientName = action.payload;
    },

    getClientPhone(state, action) {
      state.clientPhone = action.payload;
    },

    getPayMethod(state, action) {
      if (action.payload === "card-pay") {
        state.payMethod = "card-pay";
      } else {
        state.payMethod = "cash-pay";
      }
    },

    deliveryPrice(state, action) {
      if (!action.payload) {
        state.cakeDelivery = 0;
      } else {
        state.cakeDelivery = 100;
      }
    },

    getClientAddress(state, action) {
      state.deliveryAddress = action.payload;
    },

    getClearAllData(state) {
      state.items = [];
      state.totalPrice = 0;
      state.clientName = "";
      state.clientPhone = "";
      state.payMethod = "card-pay";
      state.cakeDelivery = 0;
      state.deliveryAddress = "";
    },
  },
});

export const {
  addItem,
  decreaseItem,
  removeItem,
  deliveryPrice,
  addItemInTheCart,
  getClientName,
  getClientPhone,
  getPayMethod,
  getClientAddress,
  getClearAllData,
} = cartSlice.actions;

export default cartSlice.reducer;
