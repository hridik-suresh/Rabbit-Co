import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Make sure the path is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // This name "auth" must match what you use in useSelector
  },
});

export default store;
