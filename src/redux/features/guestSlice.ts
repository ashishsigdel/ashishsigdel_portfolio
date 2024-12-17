import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GuestState {
  email: string | null;
  password: string | null;
}

const initialState: GuestState = {
  email: null,
  password: null,
};

const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {
    setCredientials: (state, action) => {
      state.email = action.payload;
      state.password = action.payload;
    },

    resetGuest: (state) => {
      state.email = initialState.email;
      state.password = initialState.password;
    },
  },
});

export const { setCredientials, resetGuest } = guestSlice.actions;
export default guestSlice.reducer;
