import { configureStore } from "@reduxjs/toolkit";

import sortCake from "./slices/sortSlice";
import showUp from "./slices/showUpSlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    sortCake,
    showUp,
    cart,
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
