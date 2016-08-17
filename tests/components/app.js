import React from 'react'
import {findDOMNode, render} from 'react-dom';
import {expect} from 'chai'
import {renderIntoDocument, scryRenderedComponentsWithType} from 'react-addons-test-utils'
import MoviesList from '../../client/components/MoviesList'
import MovieItem from '../../client/components/MovieItem'

const movies = [
    {
      movieId: '1',
      movieName: 'test1',
      movieYear: 2000,
      // format: 'DVD',
      movieActors: ['first_actor', 'second_actor'],
    },
    {
      movieId: '2',
      movieName: 'test2',
      movieYear: 2000,
      // format: 'DVD',
      movieActors: ['first_actor', 'second_actor'],
    }
  ]

describe('MoviesList', () => {
  let moviesList
  beforeEach(() => {
    moviesList = renderIntoDocument(
      <MoviesList movies = {movies}/>
    )
  })

  it('should render correctly ', () => {
    const items = findDOMNode(moviesList).querySelectorAll('.movie_item')
    expect(items.length).to.eql(movies.length)
  })

  it('should render correctly (component type matching)', () => {
    const items = scryRenderedComponentsWithType(moviesList, MovieItem)
    expect(items.length).to.eql(movies.length)
  })

  it('should render with the correct props', () => {
    const items = scryRenderedComponentsWithType(moviesList, MovieItem)
    expect(items[0].props.id).to.eql(movies[0].movieId)
    expect(items[0].props.name).to.eql(movies[0].movieName)
    expect(items[0].props.year).to.eql(movies[0].movieYear)
  })
})
