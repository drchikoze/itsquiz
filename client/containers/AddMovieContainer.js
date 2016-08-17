import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as moviesActions from '../actions/moviesActions.js'
import AddMovieForm from '../components/AddMovieForm'
import {bindAll} from 'lodash'


 class AddMovieContainer extends Component {
  constructor(props, context) {
    super(props, context)
    // this.state = {
    //   movieName: '',
    //   movieYear: null,
    //   movieFormat: '',
    //   movieActors:[]
    // }
    bindAll(this, 'handleAddMovie');
  }

  handleAddMovie(movie) {
    const { dispatch } = this.props;
    dispatch(moviesActions.addMovie(movie))
  }



  render() {
    return (
      <div>
        <AddMovieForm
          handleAddMovie = {this.handleAddMovie}
          errors = {this.props.errors}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.movies.addFormErrs
  }
}


export default connect(mapStateToProps)(AddMovieContainer)
