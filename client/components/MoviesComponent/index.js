import React, {Component} from 'react'
import { Table } from 'react-bootstrap';
import xhr from 'xhr'
import {bindAll} from 'lodash'
import MoviesList from '../MoviesList'
import MoviePopupForm from '../MoviePopupForm'
import MoviesFilterContainer from '../../containers/MoviesFilterContainer'

export default class MoviesComponent extends Component {
  constructor(props, context) {
    super(props, context)
    // bindAll(this, 'handleViewMovie');
    this.state = {
      showPopup: false
    }
  }

  render() {
    return (
      <div className='movies_component'>
        <MoviesFilterContainer/>
        <MoviesList
          movies = {this.props.getVisibleMovies(this.props.movies.moviesList, this.props.filter)}
          deleteMovie = {this.props.deleteMovie}
        />
      </div>
    )
  }
}

MoviesComponent.propTypes = {
      movies: React.PropTypes.object,
      filter: React.PropTypes.object,
      deleteMovie: React.PropTypes.func,
      getVisibleMovies: React.PropTypes.func,
};
