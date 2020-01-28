import { combineReducers } from 'redux'
import movies from './MovieReducer'
import selectedred from './selectedred.js'


export default combineReducers({
  movies,
  selectedred
})