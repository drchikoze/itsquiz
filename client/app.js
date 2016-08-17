import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import { getRoutes } from './routes'


const initialState = {
  movies: {
    isLoaded:false,
    isLoading:false,
    err: null,
    uploadFile: {
      isLoaded: false,
      isLoading: false,
      err: null
    },
    addFormErrs: null,
    currentlyViewing: {
      isLoaded: false
    },
    moviesList: []
  },
  filter: {
    nameFilter:'',
    actorFilter:''
  }
}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
      <Router children={getRoutes(store)} history={ browserHistory } />
  </Provider>,
  document.getElementById('app')
)
