import React, {Component} from 'react'
import { Modal, Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import xhr from 'xhr'
import {bindAll} from 'lodash'
import MovieItem from '../MovieItem'

export default class MoviePopupForm extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className='movie_popup_form'>
        <Modal show={this.props.isOpen} >
          <Modal.Header>
            <Modal.Title>Movie</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form horizontal style={{width: '90%'}} onChange={this.handleBlur}>
              <FormGroup>
                <Col componentClass={ControlLabel} md={4}>
                  Customer Name
                </Col>
                <Col md={8}>
                  <FormControl value='' type="text" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} md={4}>
                  Customer address
                </Col>
                <Col md={8}>
                  <FormControl value='' type="text"/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} md={4}>
                  Customer phone
                </Col>
                <Col md={8}>
                  <FormControl value='' type="text"/>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
            <Button  bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
