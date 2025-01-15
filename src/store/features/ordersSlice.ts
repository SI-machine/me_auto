import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../../types/order.types";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await fetch("http://localhost:3001/orders");
  const data = await response.json();
  return data;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [] as Order[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default ordersSlice.reducer;
