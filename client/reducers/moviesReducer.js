let moviesReducer = function(movies = {}, action) {
  switch (action.type) {
    //load movies
    case 'REQUEST_LOAD_MOVIES':
      return Object.assign({}, movies, {
        isLoading: true,
        isLoaded: false
      })
    case 'FAILED_LOAD_MOVIES':
      return Object.assign({}, movies, {
        isLoading: false,
        error: action.err
      })
    case 'SUCCESS_LOAD_MOVIES':
      return Object.assign({}, movies, {
        isLoading: false,
        isLoaded: true,
        err: null,
        moviesList: action.movies.map((movie) => {
          return {
            movieId: movie._id,
            movieName: movie.name,
            movieYear: movie.year,
            movieActors: movie.actors,
          }
        })
      })
    //upload
    case 'REQUEST_UPLOAD_MOVIES':
      return Object.assign({}, movies, {
        uploadFile: Object.assign({}, movies.uploadFile, {
          isLoading: true,
        })
      })
    case 'FAILED_UPLOAD_MOVIES':
      return Object.assign({}, movies, {
        uploadFile: Object.assign({}, movies.uploadFile, {
          isLoading: false,
          isLoaded: false,
          err: action.err
        })
      })
    case 'SUCCESS_UPLOAD_MOVIES':
      return Object.assign({}, movies, {
        uploadFile: Object.assign({}, movies.uploadFile, {
          isLoading: false,
          isLoaded: true,
          err: null
        })
      })
    //delete
    case 'REQUEST_DELETE_MOVIE':
      return Object.assign({}, movies, {
        isLoading: true
      })
    case 'FAILED_DELETE_MOVIE':
      return Object.assign({}, movies, {
        isLoading: false,
        err: action.err
      })
    case 'SUCCESS_DELETE_MOVIE':
      return Object.assign({}, movies, {
        isLoading: false,
        isLoaded: true,
        err: null,
        moviesList: movies.moviesList.filter((movie) => {
          return movie.movieId != action.movie._id
        })
      })
    //add
    case 'REQUEST_ADD_MOVIE':
      return Object.assign({}, movies, {
        isLoading: true
      })
    case 'FAILED_ADD_MOVIE':
      return Object.assign({}, movies, {
        isLoading: false,
        addFormErrs: action.err,
      })
    case 'SUCCESS_ADD_MOVIE':
      return Object.assign({}, movies, {
        isLoading: false,
        isLoaded: true,
        err: null,
        moviesList: [{
          movieId: action.movie._id,
          movieName: action.movie.name,
          movieYear: action.movie.year,
          movieActors: action.movie.actors,
        }, ...movies.moviesList]
      })
    //load movie
    case 'REQUEST_LOAD_MOVIE':
      return Object.assign({}, movies, {
        currentlyViewing: {
          isLoaded: false,
        }
      })
    case 'FAILED_LOAD_MOVIE':
      return Object.assign({}, movies, {
        currentlyViewing: {
          isLoaded: false,
        }
      })
    case 'SUCCESS_LOAD_MOVIE':
      return Object.assign({}, movies, {
        currentlyViewing: {
          isLoaded: true,
          movieId: action.movie._id,
          movieName: action.movie.name,
          movieYear: action.movie.year,
          movieFormat: action.movie.format,
          movieActors: action.movie.actors,
        }
      })
    default:
      return movies
  }
}
export default moviesReducer
