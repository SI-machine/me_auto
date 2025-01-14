import { configureStore } from "@reduxjs/toolkit";
import { carouselSlice } from "./features/carouselSlice";
import clentsReducer from "./features/clientsSlice";
import carsSlice from "./features/testSlice";

const store = configureStore({
  reducer: {
    carousel: carouselSlice.reducer,
    cars: carsSlice,
    clients: clentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
