export default (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITES_MOVIE":
      return {
        ...state,
        movies: [action.payload, ...state.movies],
      };
    case "REMOVE_FAVORITES_MOVIE":
      return {
        ...state,
        movies: [action.payload, ...state.movies],
      };
    default:
      return state;
  }
};
