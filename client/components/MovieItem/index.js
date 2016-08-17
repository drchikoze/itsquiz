import React, {Component} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import xhr from 'xhr'
import {bindAll} from 'lodash'

export default class MovieItem extends Component {
  constructor(props, context) {
    super(props, context)
    bindAll(this, 'handleDelete');
    this.state = {
      data_uri: null,
      processing: false
    }
  }

  handleDelete(e) {
    this.props.deleteMovie(this.props.id)
  }


  render() {
    return (
      <tr className='movie_item'>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.year}</td>
        <td>
          {
            this.props.actors.length > 0 ?
              this.props.actors.map((actor, index) => {
                return (
                  <div key = {index}> {actor} </div>
                )
              })
              : null
          }
        </td>
        <td>
          <Button bsSize="xsmall" onClick={this.handleDelete}>delete</Button>
        </td>
        <td>
          <LinkContainer to={{ pathname: '/movies/' + this.props.id }}>
            <Button bsSize="xsmall">view</Button>
          </LinkContainer>
        </td>
      </tr>
    )
  }
}

MovieItem.propTypes = {
      id: React.PropTypes.string,
      name: React.PropTypes.string,
      year: React.PropTypes.number,
      actors: React.PropTypes.array,
      deleteMovie: React.PropTypes.func
};
