import xhr from 'xhr'
// require('es6-promise').polyfill();
// import 'isomorphic-fetch'
import { browserHistory } from 'react-router'

// export function addMovie(movie) {
//   return dispatch => {
//     dispatch(requestAddMovie())
//     let data = new FormData()
//     data.append( "json", JSON.stringify( movie ) )
//     return fetch('http://localhost:3000/api/movies',{
//       headers: {
//         'Accept': 'application/json', 'Content-Type': 'application/json'
//       },
//       method: 'POST',
//       body: data
//     })
//       .then(res => {
//         res.json()
//       })
//       .then(json => {
//         console.log(json);
//         dispatch(successAddMovie(json.body))
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch(failedAddMovie(err))
//       })
//   }
// }
//-------------------------------------------------------------
export function addMovie(movie) {
  return dispatch => {
    dispatch(requestAddMovie())
    return xhr.post('/api/movies',
      {
        body: JSON.stringify(movie), headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      },
       function(err, resp) {
          if(err) {
            console.log(err);
            dispatch(failedAddMovie(message));
          }
          if ( resp.statusCode == 400 ) {
            let err = JSON.parse(resp.body)
            dispatch(failedAddMovie(err));
          }
          if ( resp.statusCode == 200 ) {
            let movie = JSON.parse(resp.body)
            dispatch(successAddMovie(movie))
            browserHistory.push('/movies')
          }
       }
     )
  }
}

function requestAddMovie() {
  return {
    type: 'REQUEST_ADD_MOVIE'
  }
}

function failedAddMovie(err) {
  return {
    type: 'FAILED_ADD_MOVIE',
    err: err
  }
}

function successAddMovie(movie) {
  return {
    type: 'SUCCESS_ADD_MOVIE',
    movie: movie
  }
}
//----------------------------------------------------
export function deleteMovie(movieId) {
  return dispatch => {
    dispatch(requestDeleteMovie())
    return xhr.del('/api/movies/'+movieId,
      {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      },
       function(err, resp) {
          if(err) {
            console.log(err);
            dispatch(failedDeleteMovie(message));
          }
          if ( resp.statusCode == 200 ) {
            let movie = JSON.parse(resp.body)
            dispatch(successDeleteMovie(movie))
          }
       }
     )
  }
}

function requestDeleteMovie() {
  return {
    type: 'REQUEST_DELETE_MOVIE'
  }
}

function failedDeleteMovie(err) {
  return {
    type: 'FAILED_DELETE_MOVIE',
    err: err
  }
}

function successDeleteMovie(movie) {
  return {
    type: 'SUCCESS_DELETE_MOVIE',
    movie: movie
  }
}

export function uploadMovies(file) {
  return dispatch => {
    dispatch(requestUploadMovies())
    return xhr.post('/api/upload_movies',
      {
        body: JSON.stringify({data: file}) , headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      },
       function(err, resp) {
          if(err) {
            console.log(err);
            dispatch(failedUploadMovies(err));
          }
          if( resp.statusCode == 400 ) {
            let err = JSON.parse(resp.body)
            dispatch(failedUploadMovies(err.err));
          }
          if ( resp.statusCode == 200 ) {
            let movies = JSON.parse(resp.body)
            dispatch(successUploadMovies(movies))
          }
       }
     )
  }
}

function requestUploadMovies() {
  return {
    type: 'REQUEST_UPLOAD_MOVIES'
  }
}

function failedUploadMovies(err) {
  return {
    type: 'FAILED_UPLOAD_MOVIES',
    err: err
  }
}

function successUploadMovies(movies) {
  return {
    type: 'SUCCESS_UPLOAD_MOVIES',
    movies: movies
  }
}

export function loadMovies() {
  return dispatch => {
    dispatch(requestLoadMovies())
    return xhr.get('/api/movies',
      {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      },
       function(err, resp) {
          if(err) {
            console.log(err);
            dispatch(failedLoadMovies(message));
          }
          if ( resp.statusCode == 200 ) {
            let movies = JSON.parse(resp.body)
            dispatch(successLoadMovies(movies))
          }
       }
     )
  }
}

function requestLoadMovies() {
  return {
    type: 'REQUEST_LOAD_MOVIES'
  }
}

function failedLoadMovies(err) {
  return {
    type: 'FAILED_LOAD_MOVIES',
    err: err
  }
}

function successLoadMovies(movies) {
  return {
    type: 'SUCCESS_LOAD_MOVIES',
    movies: movies
  }
}

export function loadMovie(movieId) {
  return dispatch => {
    dispatch(requestLoadMovie())
    return xhr.get('/api/movies/'+movieId,
      {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      },
       function(err, resp) {
          if(err) {
            console.log(err);
            dispatch(failedLoadMovie(message));
          }
          if ( resp.statusCode == 200 ) {
            let movie = JSON.parse(resp.body)
            dispatch(successLoadMovie(movie))
          }
       }
     )
  }
}

function requestLoadMovie() {
  return {
    type: 'REQUEST_LOAD_MOVIE'
  }
}

function failedLoadMovie(err) {
  return {
    type: 'FAILED_LOAD_MOVIE',
    err: err
  }
}

function successLoadMovie(movie) {
  return {
    type: 'SUCCESS_LOAD_MOVIE',
    movie: movie
  }
}
