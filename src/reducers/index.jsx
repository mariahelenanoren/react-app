import { combineReducers } from "@reduxjs/toolkit";
import {
  changeMainState,
  updateSearchTerm,
  changeChosenRecipe,
} from "./reducers";

const allReducers = combineReducers({
  mainState: changeMainState,
  searchTerm: updateSearchTerm,
  chosenRecipe: changeChosenRecipe,
});

export default allReducers;
