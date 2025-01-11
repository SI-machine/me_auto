import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setCurrentSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
  },
});

export const { setCurrentSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
