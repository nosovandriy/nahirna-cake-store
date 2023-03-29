// "use client";

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";

// import {
//   persistStore,
//   persistReducer,
// } from "redux-persist";
// import thunk from 'redux-thunk'

// import sortCake from "./slices/sortSlice";
// import popUp from "./slices/popUpSlice";
// import cart from "./slices/cartSlice";

// const rootReducer = combineReducers({
//   sortCake,
//   popUp,
//   cart,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ['sortCake', 'popUp'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],  devTools: process.env.NODE_ENV !== 'production',
// });

// export const persistor = persistStore(store);
// export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import sortCake from "./slices/sortSlice";
import popUp from "./slices/popUpSlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    sortCake,
    popUp,
    cart,
  },
  // devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

