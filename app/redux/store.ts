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
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// console.log(store);
