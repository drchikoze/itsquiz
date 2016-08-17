import React, {Component} from 'react'
import { FormGroup, ControlLabel, Form, FormControl } from 'react-bootstrap';
import xhr from 'xhr'
import {bindAll} from 'lodash'

export default class FilterForm extends Component {
  constructor(props, context) {
    super(props, context)
    bindAll(this, 'handleChangeName', 'handleChangeActor')
  }

  handleChangeName(e) {
    this.props.setNameFilter(e.target.value)
  }

  handleChangeActor(e) {
    this.props.setActorFilter(e.target.value)
  }

  render() {
    return (
      <div className='filter_form'>
        <Form inline>
          <FormGroup controlId="formName">
            <ControlLabel>Movie Name</ControlLabel>
            {' '}
            <FormControl value={this.props.filter.nameFilter} type="text" placeholder="filter by name" onChange={this.handleChangeName}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="formActors">
            <ControlLabel>Movie Actors</ControlLabel>
            {' '}
            <FormControl value={this.props.filter.actorFilter}type="text" placeholder="filter by actor" onChange={this.handleChangeActor}/>
          </FormGroup>
          {' '}
        </Form>
      </div>
    )
  }
}

FilterForm.propTypes = {
      setNameFilter: React.PropTypes.func,
      setActorFilter: React.PropTypes.func
};
