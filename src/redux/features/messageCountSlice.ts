import { CountState } from "@/types/count-state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CountState = {
  loading: false,
  error: null,
  count: 0,
};

const messageCountSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    resetMessageCount: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetMessageCount } =
  messageCountSlice.actions;
export default messageCountSlice.reducer;
