import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./features/countSlice";
import popupMessageReducer from "./features/popupMessageSlice";
import guestReducer from "./features/guestSlice";
import authReducer from "./features/authSlice";

const rootReducer = combineReducers({
  count: countReducer,
  popupMessage: popupMessageReducer,
  guest: guestReducer,
  auth: authReducer,
});

export const resetAll = () => {
  const initialState = rootReducer(undefined, { type: "" });
  return {
    type: "RESET_ALL",
    payload: initialState,
  };
};

export default rootReducer;
