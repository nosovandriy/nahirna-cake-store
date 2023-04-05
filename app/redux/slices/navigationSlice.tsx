import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PopUpState {
  showMobileMenu: boolean;
}

const initialState: PopUpState = {
  showMobileMenu: false,
}

const navigationSlice = createSlice({
name: 'navigation',
initialState,
reducers: {
  setShowMobileMenu(state, action: PayloadAction<boolean>) {
    state.showMobileMenu = action.payload;
  },
}
});

export const { setShowMobileMenu } = navigationSlice.actions;

export default navigationSlice.reducer;