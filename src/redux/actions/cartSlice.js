import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data:
      (await axios
        .get("http://localhost:5000/cart/getAllCart", {
          withCredentials: true,
        })
        .then((items) => {
          return items.data;
        })
        .catch((err) => {
          return err;
        })) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, qty } = action.payload;
      //function handle addCart to database
      const add = async () => {
        await axios.post(
          "http://localhost:5000/cart/addCart/" + id,
          action.payload,
          {
            withCredentials: true,
          }
        );
        return window.location.reload();
      };
      //check is there exist item or not
      const itemInCart = state.data.find((item) => {
        return item.id == id;
      });
      //if yes add qty of the item
      if (itemInCart) {
        add();
        itemInCart.qty += qty;
      }
      //if not add the item
      else {
        add();
        state.data.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const remove = async () => {
        const response = await axios.post(
          "http://localhost:5000/cart/removeFromCart",
          action.payload,
          { withCredentials: true }
        );
        return response;
      };

      const itemInCart = state.data.find((item) => {
        return item.item_id == id;
      });
      if (itemInCart) {
        if (itemInCart.qty > 1) {
          remove();
          itemInCart.qty--;
        } else {
          remove();
          state.data.splice(state.data.indexOf(itemInCart), 1);
        }
      }
    },
    clearCart: (state) => {
      const clear = async () => {
        const response = await axios.get(
          "http://localhost:5000/cart/clearCart",
          { withCredentials: true }
        );
        return response;
      };
      clear();
      return { ...state, data: [] };
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
