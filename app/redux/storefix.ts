// "use client";

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
// } from "redux-persist";

// import sortCake from "./slices/sortSlice";
// import popUp from "./slices/popUpSlice";
// import cart from "./slices/cartSlice";
// // import storage from 'redux-persist/lib/storage';

// import createWebStorage from "redux-persist/lib/storage/createWebStorage";


// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     remove(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

// const rootReducer = combineReducers({
//   sortCake,
//   popUp,
//   cart,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
