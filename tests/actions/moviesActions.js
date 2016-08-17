//не работает потому что в екшенах xhr браузерный, а у xhr-node сигнатура другая=(
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as moviesActions from '../../client/actions/moviesActions.js'
import {assert} from 'chai'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('movies actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should add movie', () => {
    nock('http://localhost:3000/')
      .post('/api/movies')
      .reply(200, { body: {
        _id: 'some_id',
        name: 'movie_name',
        year: 1999,
        type: 'DVD',
        actors: ['some_actor']
      }})

    const expectedActions = [
      { type: 'REQUEST_ADD_MOVIE' },
      { type: 'SUCCESS_ADD_MOVIE', body: {
          _id: 'some_id',
          name: 'movie_name',
          year: 1999,
          type: 'DVD',
          actors: ['some_actor']
        }
      }
    ]

    const store = mockStore({ movies: {} })

    return store.dispatch(moviesActions.addMovie())
      .then(() => {
        assert.deepEqual(store.getActions(), expectedActions)
      })

  })
})
