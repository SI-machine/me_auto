import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../types/client.types";

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    const response = await fetch("http://localhost:3001/clients");
    const data = await response.json();
    return data;
  }
);

const cliensSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [] as Client[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default cliensSlice.reducer;
