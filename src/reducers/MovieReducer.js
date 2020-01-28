import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  EDIT_MOVIE,
  SELECTED_ITEM_DATA,
  SHOW
} from "../actions/actionTypes";
// if you want to show initial data :)


// componentDidMount(){
//   Axios.get('http://www.omdbapi.com/?s=inception&apikey=70fd372f')
//   .then(res=>{
//     console.log(res)
//   })
// }
const INITIAL_DATA = [
  {
    title: "start Wars",
    year: 2017,
    description: "blabla",
    image: "https://images-na.ssl-images-amazon.com/images/I/51%2Bzb74v-TL.jpg",
    id: 0,
    rating: 0
  },
  {
    title: "Joker",
    year: 2019,
    id: 1,
    description: "blabla",
    image:
      "https://www.mauvais-genres.com/27765/joker-original-movie-poster-15x20-in-2019-joaquin-phoenix.jpg",
    rating: 2
  },

  {
    title: "Captain Marvel",
    year: 2016,
    description: "lina",
    image:
      "https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/captain-marvel-epic-61x91-5cm-movie-poster-31596-1-p.jpg",
    id: 2,
    rating: 4
  },
  {
    title: "Avengers",
    year: 2015,
    description: `Avengers ou Les Avengers : Le film au Québec et au Nouveau-Brunswick (Marvel's The Avengers) est un film de super-héros américain écrit et réalisé par Joss Whedon, sorti en 2012. Il se base sur l'équipe de super-héros du même nom (Les Vengeurs en français) apparaissant dans le comic book publié par Marvel Comics et constitue le sixième film de l'univers cinématographique Marvel (dont il clôt le premier arc, appelé « Phase I »).

      Les interprètes des six Avengers sont Robert Downey Jr., Chris Evans, Chris Hemsworth, Scarlett Johansson, Jeremy Renner et Mark Ruffalo. Dans ce premier des quatre films de la série Avengers, Iron Man, Captain America, Thor, Hulk, Clint Barton et Natasha Romanoff doivent tenter de travailler en équipe afin d'empêcher le frère adoptif de Thor, Loki, d'envahir la Terre.
      
      Le film reçoit des critiques positives de la plupart des critiques de cinéma et établit plusieurs records au box-office américain, parmi lesquels le meilleur premier week-end d'exploitation en Amérique du Nord. Le film est également le plus rapide à atteindre la somme de 1 milliard de dollars de recettes. Il récolte au total 1,519 milliards de dollars, faisant de lui un des plus grands succès au box-office. Le film sort en Blu-ray, Blu-ray 3D et en DVD le 29 août en France et le 25 septembre 2012 aux États-Unis.`,
    image:
      "https://preview.redd.it/i16fmegsy8z01.jpg?auto=webp&s=b8dbbb4114c0b0194d810364e28d1c06cd82a886",
    id: 3,
    rating: 4
  }
];

//const INITIAL_DATA = []

const MovieReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {

    case SHOW:
    return action.data;

    case SELECTED_ITEM_DATA:
      console.log("hello from reducer", action.item);
      return state;

    case ADD_MOVIE:
      return [
        ...state,
        {
          id: action.id,
          original_title: action.title,
          overview: action.description,
          poster_path: action.image,
          vote_average: action.rating
        }
      ];

    case REMOVE_MOVIE:
      
      return state.filter(movie => movie.id !== action.id);



    case EDIT_MOVIE:
     // const numIndex1 = parseInt(action.id);

      return state.map(movie => {
        if (movie.id === action.id) {
          return {
            ...movie,

            original_title: action.title,
            overview: action.description,
            poster_path: action.image,
            vote_average: action.rating
          };

        //  return movie;
        } else {
          return movie;
        }
      });

    default:
      return state;
  }
};

export default MovieReducer;
