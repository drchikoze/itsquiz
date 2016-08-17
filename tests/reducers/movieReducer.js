import {expect} from 'chai'
import moviesReducer from '../../client/reducers/moviesReducer.js'

describe('movies reducer', () => {
  it('should return initial state', () => {
    expect(
      moviesReducer(undefined, {})
    ).to.eql({})
  })

  it('should handle add movie request', () => {
    expect(
      moviesReducer({}, {
        type: 'REQUEST_ADD_MOVIE'
      })
    ).to.eql(
      {
        isLoading: true,
      }
    )
  })

  it('should handle add movie failed', () => {
    expect(
      moviesReducer({}, {
        type: 'FAILED_ADD_MOVIE',
        err: 'some_error'
      })
    ).to.eql(
      {
        isLoading: false,
        addFormErrs: 'some_error'
      }
    )
  })

  it('should handle add movie success', () => {
    expect(
      moviesReducer({
        isLoading: false,
        isLoaded: false,
        err: null,
        moviesList:[]
      }, {
        type: 'SUCCESS_ADD_MOVIE',
        movie: {
          _id: 'some_id',
          name: 'movie_name',
          format: 'DVD',
          year: 1999,
          actors:['some_actor'],
        }
      })
    ).to.eql(
      {
        isLoading: false,
        isLoaded: true,
        err: null,
        moviesList: [{
          movieId: 'some_id',
          movieName: 'movie_name',
          movieYear: 1999,
          movieActors: ['some_actor']
        }]
      }
    )
  })

  it('should handle upload movies request', () => {
    expect(
      moviesReducer({}, {
        type: 'REQUEST_UPLOAD_MOVIES',
      })
    ).to.eql(
      {
        uploadFile: {
          isLoading: true,
        }
      }
    )
  })

  it('should handle upload movies request', () => {
    expect(
      moviesReducer({}, {
        type: 'REQUEST_UPLOAD_MOVIES',
      })
    ).to.eql(
      {
        uploadFile: {
          isLoading: true,
        }
      }
    )
  })

})
