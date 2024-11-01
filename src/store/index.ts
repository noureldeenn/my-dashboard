import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
