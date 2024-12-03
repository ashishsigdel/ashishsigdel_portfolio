import { CountState } from "@/types/count-state";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CountState = {
  loading: false,
  error: null,
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = countSlice.actions;
export default countSlice.reducer;
