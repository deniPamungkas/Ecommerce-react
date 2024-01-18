import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { fetchFromDatabase } from "./actions/cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice },
});
store.dispatch(fetchFromDatabase());

console.log(store.getState());
store.subscribe(async () => {
  console.log("store change :", store.getState());
});

export default store;
