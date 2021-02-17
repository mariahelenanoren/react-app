import { combineReducers } from "@reduxjs/toolkit";
import {
  changeMainState,
  updateSearchTerm,
  changeChosenRecipe,
  changeState,
} from "./reducers";

const allReducers = combineReducers({
  mainState: changeMainState,
  searchTerm: updateSearchTerm,
  chosenRecipe: changeChosenRecipe,
  prevState: changeState,
});

export default allReducers;
