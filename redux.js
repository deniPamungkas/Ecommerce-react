import { configureStore, createSlice } from "@reduxjs/toolkit";

// reducers

const cartReducer = createSlice({
  name: "cartReducers",
  initialState: [],
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      state.filter((item) => {
        return item.name == "syltherine";
      });
    },
  },
});

//store
const store = configureStore({
  reducer: {
    cart: cartReducer.reducer,
  },
});
console.log("store", store.getState());

//action
// store.dispatch(cartReducer.actions.addCart({ id: "1", name: "syltherine" }));
// console.log(store.getState());
// store.dispatch(cartReducer.actions.removeCart({ id: "1", name: "syltherine" }));
// console.log(store.getState());
