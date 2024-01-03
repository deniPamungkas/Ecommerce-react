import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(window.localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, qty } = action.payload;
      const itemInCart = state.data.find((item) => {
        return item.id == id;
      });
      if (itemInCart) {
        itemInCart.qty += qty;
      } else {
        state.data.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const itemInCart = state.data.find((item) => {
        return item.id == id;
      });
      if (itemInCart) {
        if (itemInCart.qty > 1) {
          itemInCart.qty--;
        } else {
          state.data.splice(state.data.indexOf(itemInCart), 1);
          // window.localStorage.setItem(
          //   "cart",
          //   JSON.stringify(state.data.splice(state.data.indexOf(itemInCart), 1))
          // );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
