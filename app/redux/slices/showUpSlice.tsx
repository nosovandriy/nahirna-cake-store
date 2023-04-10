import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ShowUpState {
  isOrderConfirm: boolean;
  isContactsOpen: boolean;
  showMobileMenu: boolean;
}

const initialState: ShowUpState = {
  isOrderConfirm: false,
  isContactsOpen: false,
  showMobileMenu: false,
};

const showUpSlice = createSlice({
  name: "showUp",
  initialState,
  reducers: {
    setIsOrderConfirm(state, action: PayloadAction<boolean>) {
      state.isOrderConfirm = action.payload;
    },
    setIsContactsOpen(state, action: PayloadAction<boolean>) {
      state.isContactsOpen = action.payload;
    },
    setShowMobileMenu(state, action: PayloadAction<boolean>) {
      state.showMobileMenu = action.payload;
    },
  },
});

export const { setIsOrderConfirm, setIsContactsOpen, setShowMobileMenu } = showUpSlice.actions;

export default showUpSlice.reducer;
