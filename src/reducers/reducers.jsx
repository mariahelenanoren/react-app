export const changeMainState = (state = "search", action) => {
  switch (action.type) {
    case "SEARCH":
      return action.mainState;
    case "SEARCH_RESULTS":
      return action.mainState;
    case "RECIPE":
      return action.mainState;
    default:
      return state;
  }
};

export const updateSearchTerm = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_TERM":
      return action.searchTerm;
    default:
      return state;
  }
};

export const changeChosenRecipe = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_CHOSEN_RECIPE":
      return action.payload;
    default:
      return state;
  }
};
