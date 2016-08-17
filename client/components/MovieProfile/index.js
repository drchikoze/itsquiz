import React, {Component} from 'react'
import { Link } from 'react-router';

export default class MovieProfile extends Component {
  render() {
    return (
      <div>
        {
          this.props.movie.isLoaded ?
            <div className='movie_profile'>
              <div>Movie Id - {this.props.movie.movieId}</div>
              <div>Movie Name - {this.props.movie.movieName}</div>
              <div>Movie Year - {this.props.movie.movieYear}</div>
              <div>Movie Format - {this.props.movie.movieFormat}</div>
              <div>
                Actors:
                {
                  this.props.movie.movieActors.map((actor, index) =>{
                    return (
                      <div key={index}>{actor}</div>
                    )
                  })
                }
              </div>
            </div>
            : null
        }
      </div>
    )
  }
}

MovieProfile.propTypes = {
      movie: React.PropTypes.object,
};
