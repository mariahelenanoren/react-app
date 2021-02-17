export const renderSearch = () => ({
  type: "SEARCH",
  mainState: "search",
});

export const renderResults = () => ({
  type: "SEARCH_RESULTS",
  mainState: "searchResults",
});

export const renderRecipe = () => ({
  type: "RECIPE",
  mainState: "recipe",
});

export const updateSearchTerm = (value) => ({
  type: "UPDATE_SEARCH_TERM",
  searchTerm: value,
});

export const changeChosenRecipe = (id, title, img) => ({
  type: "CHANGE_CHOSEN_RECIPE",
  payload: {
    id: id,
    title: title,
    img: img,
  },
});
