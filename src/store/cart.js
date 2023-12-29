import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/cartReducers";

const store = configureStore(rootReducers);

export default store;
