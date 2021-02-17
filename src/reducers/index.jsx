import { combineReducers } from "@reduxjs/toolkit";
import { changeMainState, updateSearchTerm } from "./reducers"

const allReducers = combineReducers({
    mainState: changeMainState,
    searchTerm: updateSearchTerm
});

export default allReducers;