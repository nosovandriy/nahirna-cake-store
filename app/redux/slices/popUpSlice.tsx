import { createSlice } from "@reduxjs/toolkit";

export interface PopUpState {
  isOrderConfirm: boolean;
  isContactsOpen: boolean;
}

const initialState: PopUpState = {
  isOrderConfirm: false,
  isContactsOpen: false,
}

const popUpSlice = createSlice({
name: 'popUp',
initialState,
reducers: {
  setIsOrderConfirm(state, action) {
    state.isOrderConfirm = action.payload;
  },
  setIsContactsOpen(state, action) {
    state.isContactsOpen = action.payload;
  },
}
});

export const { setIsOrderConfirm, setIsContactsOpen } = popUpSlice.actions;

export default popUpSlice.reducer;