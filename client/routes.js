import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './components/MainLayout'
import BodyLayout from './components/BodyLayout'
import FileUploadContainer from './containers/FileUploadContainer'
import MoviesContainer from './containers/MoviesContainer'
import MovieProfileContainer from './containers/MovieProfileContainer'
import AddMovieContainer from './containers/AddMovieContainer'

export const getRoutes = (store) => {
  return (
    <Route component={MainLayout}>
      <Route component={BodyLayout}>
        <Route path='/' component={FileUploadContainer}/>
        <Route path='/movies' component={MoviesContainer}/>
        <Route path='/addMovie' component={AddMovieContainer}/>
        <Route path='/movies/:movieId' component={MovieProfileContainer}/>
      </Route>
    </Route>
  )
}
