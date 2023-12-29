import { combineReducers } from "redux";
import cartReducers from "./cartReducers";

const rootReducers = combineReducers({
  cart: cartReducers,
});

export default rootReducers;
