export const changeMainState = (state) => ({
  type: "CHANGE_STATE",
  mainState: state,
});

export const updateSearchTerm = (value) => ({
  type: "UPDATE_SEARCH_TERM",
  searchTerm: value,
});

export const savePrevState = (prevState) => ({
  type: "SAVE_PREV_STATE",
  prevState: prevState,
});

export const changeChosenRecipe = (id, title, img) => ({
  type: "CHANGE_CHOSEN_RECIPE",
  payload: {
    id: id,
    title: title,
    img: img,
  },
});
