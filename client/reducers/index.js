import { combineReducers } from 'redux'
import movies from './moviesReducer.js'
import filter from './filterReducer.js'

const rootReducer = combineReducers({
  movies,
  filter
})


export default rootReducer
