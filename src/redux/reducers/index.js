import { combineReducers } from "redux";
import { productReducer } from "../reducers/productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
});

export default reducers;
