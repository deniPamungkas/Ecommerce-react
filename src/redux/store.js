import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./actions/cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice },
});

// store.dispatch(addToCart({ id: "1", qty: 5 }));
console.log(store.getState());
store.subscribe(() => {
  window.localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart.data)
  );

  console.log("store change :", store.getState());
});

export default store;
