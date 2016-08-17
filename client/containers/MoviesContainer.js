import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindAll} from 'lodash'
import * as moviesActions from '../actions/moviesActions.js'
import MoviesComponent from '../components/MoviesComponent'


class MoviesContainer extends Component {
  constructor(props, context) {
    super(props, context)
    const { dispatch } = this.props;
    dispatch(moviesActions.loadMovies())
    bindAll(this, 'handleDeleteMovie', 'getVisibleMovies');
  }

  handleDeleteMovie(id) {
    const { dispatch } = this.props;
    dispatch(moviesActions.deleteMovie(id))
  }

  getVisibleMovies(movies, filter) {
    if( filter.actorFilter == '' && filter.nameFilter != '') {
      return movies.filter((movie) => {
        return movie.movieName.toLowerCase().indexOf(filter.nameFilter.toLowerCase()) != -1
      })
    }
    if( filter.actorFilter != '' && filter.nameFilter == '') {
      return movies.filter((movie) => {
        for( let i = 0; i < movie.movieActors.length; i++ ) {
          if ( movie.movieActors[i].toLowerCase().indexOf(filter.actorFilter.toLowerCase()) != -1 ) {
            return true
          }
        }
        return false
      })
    }
    if( filter.actorFilter != '' && filter.nameFilter != '') {
      return movies.filter((movie) => {
        for( let i = 0; i < movie.movieActors.length; i++ ) {
          if ( movie.movieActors[i].toLowerCase().indexOf(filter.actorFilter.toLowerCase()) != -1 &&
          movie.movieName.toLowerCase().indexOf(filter.nameFilter.toLowerCase()) != -1) {
            return true
          }
        }
        return false
      })
    }
    return movies
  }

  render() {
    return (
        <MoviesComponent
          movies = {this.props.movies}
          filter = {this.props.filter}
          deleteMovie = {this.handleDeleteMovie}
          getVisibleMovies = {this.getVisibleMovies}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(MoviesContainer)
