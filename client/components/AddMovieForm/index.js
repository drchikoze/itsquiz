import React, {Component} from 'react'
import { FormGroup, ControlLabel, Form, FormControl, Col, Button, HelpBlock } from 'react-bootstrap';
import xhr from 'xhr'
import {bindAll} from 'lodash'

export default class AddMovieForm extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      movieName: '',
      movieYear: null,
      movieFormat: '',
      movieActors:[]
    }
    bindAll(this, 'handleAddActor', 'handleChangeActorName', 'handleChangeName', 'handleChangeYear', 'handleChangeFormat', 'handleSave');
  }


  handleAddActor(e) {
    e.preventDefault()
    this.setState({
      movieActors: this.state.movieActors.concat('')
    })
  }

  handleChangeName(e) {
    this.setState({
      movieName: e.target.value
    })
  }

  handleChangeFormat(e) {
    let format
    let childrens = e.target.children
    for( let i = 0; i < childrens.length; i ++ ) {
      if(childrens[i].selected) {
        format = childrens[i].value
      }
    }
    this.setState({
      movieFormat: format
    })
  }

  handleChangeYear(e) {
    this.setState({
      movieYear: e.target.value
    })
  }

  handleChangeActorName(e) {
    var value = e.target.value,
        id = e.target.id;
    this.setState({
      movieActors: this.state.movieActors.map((actor, index) => {
        return index == id ?
          actor = value
          : actor
      })
    })
  }

  handleSave() {
    this.props.handleAddMovie({
      name: this.state.movieName,
      year: this.state.movieYear,
      format: this.state.movieFormat,
      actors: this.state.movieActors,
    })
  }

  render() {
    return (
      <Form horizontal>
          <FormGroup>
            <Col mdPush={2} md={9}>
              <HelpBlock>
                {
                  this.props.errors?
                    this.props.errors.map((err, index) =>{
                      return (<li key={index} style={{color: 'red'}}>{err}</li>)
                    })
                    :null
                }
              </HelpBlock>
            </Col>
          </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Movie Name
          </Col>
          <Col md={9}>
            <FormControl type="text" placeholder="input movie name here" onChange={this.handleChangeName}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Movie Year
          </Col>
          <Col md={9}>
            <FormControl min="1900" max = "2017" type="number" placeholder="input movie year here" onChange={this.handleChangeYear}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Select Format
          </Col>
          <Col md={9}>
          <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeFormat}>
            <option>select format</option>
            <option value='VHS'>VHS</option>
            <option value='DVD'>DVD</option>
            <option value='Blu-Ray'>Blu-Ray</option>
          </FormControl>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col mdOffset={2} md={9}>
            <Button onClick={this.handleAddActor}>
              Add Actors
            </Button>
          </Col>
        </FormGroup>
        {
          this.state.movieActors.map((newActor, index) => {
            return (
              <FormGroup key = {index}>
                <Col componentClass={ControlLabel} md={2}>
                  Actor Name
                </Col>
                <Col md={9}>
                  <FormControl id={index} type="text" placeholder="input actor name here" onChange={this.handleChangeActorName}/>
                </Col>
              </FormGroup>
            )
          })
        }

        <FormGroup>
          <Col mdOffset={2} md={9}>
            <Button onClick={this.handleSave}>
              Save Movie
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

AddMovieForm.propTypes = {
      handleAddMovie: React.PropTypes.func,
      errors: React.PropTypes.array,
};
