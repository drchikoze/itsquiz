import React, {Component} from 'react'
import { Table } from 'react-bootstrap';
import xhr from 'xhr'
import {bindAll} from 'lodash'
import MovieItem from '../MovieItem'

export default class MoviesList extends Component {
  constructor(props, context) {
    super(props, context)

    // this.state = {
    //   data_uri: null,
    //   processing: false
    // }
  }


  render() {
    return (
      <div className='movies_list'>
        <Table responsive>
          <thead>
            <tr>
              <th>Movie id</th>
              <th>Name</th>
              <th>Year</th>
              <th>Actors</th>
              <th>Delele</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.movies.length > 0 ?
                this.props.movies.map((movie, index) => {
                  return (
                    <MovieItem
                      key = {index}
                      id = {movie.movieId}
                      name = {movie.movieName}
                      year = {movie.movieYear}
                      actors = {movie.movieActors}
                      deleteMovie = {this.props.deleteMovie}
                    />
                  )
                })
                : null
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

MoviesList.propTypes = {
      movies: React.PropTypes.array,
      deleteMovie: React.PropTypes.func,
};
