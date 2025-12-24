import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Make sure the path is correct
import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // This name "auth" must match what you use in useSelector
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;
