import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  SET_VISIBILITY_FILTER,
  SHOW_TITLE,
  EDIT_MOVIE,
  SELECTED_ITEM_DATA,
  ON_CHANGE_ITEM,
  DESCRIPTION_ITEM,
  IMAGE_ITEM,
  RATING_ITEM,
  SHOW
} from "./actionTypes";
import axios from "axios";
let MovieId = 4;

export const addMovie = (title, description, image, rating) => ({
  type: ADD_MOVIE,
  id: MovieId++,
  //id: movies[movies.length - 1] + 1,
  title,
  description,
  image,
  rating
});

export const deleteMovie = id => ({
  type: REMOVE_MOVIE,
  id: id
});

export const editMovie = (id, title, description, image, rating) => ({
  type: EDIT_MOVIE,
  id,
  title,
  description,
  image,
  rating
});

// export const openForm = showForm => ({
//     type: OPEN_FORM,
//     payload: showForm
//   });
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter: filter
});

export const selected = item => ({
  type: SELECTED_ITEM_DATA,
  item: item
});

export const titlehandler = value => ({
  type: ON_CHANGE_ITEM,
  value
});

export const descriptionHandler = e => ({
  type: DESCRIPTION_ITEM,
  e
});
export const imageHandler = e => ({
  type: IMAGE_ITEM,
  e
});

export const ratingHandler = value => ({
  type: RATING_ITEM,
  value
});

export const show = data => ({
  type: SHOW,
  data
});

export const showAll = () => {
  return dispatch => {
    return axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=2f405090a0d390d5a14c1dd343de86f3"
      )
      .then(response => {
        console.log("dataaaaaaaaaa: ", response.data.results);
        dispatch(show(response.data.results));
      })
      .catch(error => {
        throw error;
      });
  };
};
