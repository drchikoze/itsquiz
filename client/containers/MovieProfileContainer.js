import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as moviesActions from '../actions/moviesActions.js'
import MovieProfile from '../components/MovieProfile'


 class MovieProfileContainer extends Component {
  constructor(props, context) {
    super(props, context)
    const { dispatch } = this.props;
    dispatch(moviesActions.loadMovie(this.props.params.movieId))
  }

  // <MovieProfile
  //   movie = {this.props.movie}
  // />
  render() {
    return (
      <div>
        <MovieProfile
          movie = {this.props.movie}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.currentlyViewing
  }
}

export default connect(mapStateToProps)(MovieProfileContainer)
