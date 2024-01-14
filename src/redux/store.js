import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./actions/cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice },
});

// store.dispatch(addToCart({ id: "1", qty: 5 }));
console.log(store.getState());
store.subscribe(async () => {
  // window.localStorage.setItem(
  //   "cart",
  //   JSON.stringify(store.getState().cart.data)
  // );
  // const response = await axios.post(
  //   "http://localhost:5000/cart/addCart/" + 5,
  //   store.getState().cart.data,
  //   { withCredentials: true }
  // );
  console.log("store change :", store.getState());
});

export default store;
