import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./features/countSlice";

const rootReducer = combineReducers({
  count: countReducer,
});

export const resetAll = () => {
  const initialState = rootReducer(undefined, { type: "" });
  return {
    type: "RESET_ALL",
    payload: initialState,
  };
};

export default rootReducer;
