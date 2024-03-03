import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // todo: implement the reducer.
      console.log("add to cart reducer called");
    },
    // add other reducers here.
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
