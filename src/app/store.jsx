import { createStore } from "redux";
import allReducers from "../reducers/index";

const initalState = {
  mainState: "search",
  searchTerm: "",
  chosenRecipe: "",
};

const store = createStore(
  allReducers,
  initalState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
