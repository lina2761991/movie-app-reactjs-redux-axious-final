import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  EDIT_MOVIE,
  SELECTED_ITEM_DATA,
  ON_CHANGE_ITEM,
  DESCRIPTION_ITEM,
  IMAGE_ITEM,
  RATING_ITEM
} from "../actions/actionTypes";

const INITIAL_DATA = {
  title: "Joker",
  year: 2019,
  id: 1,
  description: "blabla",
  image:
    "https://www.mauvais-genres.com/27765/joker-original-movie-poster-15x20-in-2019-joaquin-phoenix.jpg",
  rating: 2
};

const selectedred = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case SELECTED_ITEM_DATA:
      return action.item;
    case ON_CHANGE_ITEM:
      return { ...state, title: action.value };

    case DESCRIPTION_ITEM:
      return { ...state, description: action.e.target.value };

    case IMAGE_ITEM:
      return { ...state, image: action.e.target.value };

    case RATING_ITEM:
      return { ...state, rating: action };

    default:
      return state;
  }
};

export default selectedred;
