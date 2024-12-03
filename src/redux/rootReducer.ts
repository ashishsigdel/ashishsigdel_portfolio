import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./features/countSlice";
import popupMessageReducer from "./features/popupMessageSlice";

const rootReducer = combineReducers({
  count: countReducer,
  popupMessage: popupMessageReducer,
});

export const resetAll = () => {
  const initialState = rootReducer(undefined, { type: "" });
  return {
    type: "RESET_ALL",
    payload: initialState,
  };
};

export default rootReducer;
