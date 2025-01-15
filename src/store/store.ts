import { configureStore } from "@reduxjs/toolkit";
import { carouselSlice } from "./features/carouselSlice";
import ordersReducer from "./features/ordersSlice";
import carsSlice from "./features/testSlice";

const store = configureStore({
  reducer: {
    carousel: carouselSlice.reducer,
    cars: carsSlice,
    clients: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
