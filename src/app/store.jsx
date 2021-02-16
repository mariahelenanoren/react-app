import { createStore } from "redux";
import { greeting } from "../reducers/reducers"

const initalState = {
  mainState: "search"
}

const store = createStore(
  greeting,
  initalState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
