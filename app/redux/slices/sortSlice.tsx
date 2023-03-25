import { createSlice } from "@reduxjs/toolkit";
import { SortBy } from "@type/SortType";

export interface SortState {
  sortType: SortBy;
}

const initialState: SortState = {
  sortType: SortBy.popularity,
}

const sortSlice = createSlice({
name: 'sortType',
initialState,
reducers: {
  setSortType(state, action) {
    state.sortType = action.payload;
  }
}
});

export const { setSortType } = sortSlice.actions;

export default sortSlice.reducer;