import { createStore } from "redux";
import homeReducer from "../redux/reducers/homeReducer";
const store = createStore(homeReducer);

export default store;
