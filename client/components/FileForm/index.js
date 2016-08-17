import React, {Component} from 'react'
import { Col, Row, Button, Form, FormGroup, FormControl, ControlLabel, FieldGroup } from 'react-bootstrap';
import xhr from 'xhr'
import {bindAll} from 'lodash'

export default class FileForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      data: null,
      processing: false
    }
    bindAll(this, 'handleFile', 'handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleUploadFile(this.state.data)
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        data: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className='file_form'>
        <Form horizontal onSubmit={this.handleSubmit} encType="multipart/form-data">
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Input file
            </Col>
            <Col sm={10} style={{paddingTop: '7px'}}>
              <FormControl type="file" placeholder="input file" onChange={this.handleFile}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={4}>
              <Button type="submit" disabled = {this.props.isLoading}>
                Upload file
              </Button>
              <div style={{display: 'inline', marginLeft: '5px'}}>
                {
                  this.props.isLoading ?
                    'Loading...'
                    : null
                }
              </div>
            </Col>
          </FormGroup>
          <FormGroup >
            <Col smOffset={2} sm={3}>
              {
                this.props.isLoaded ?
                  <div>Movies loaded successfully.</div>
                  :null
              }
              {
                this.props.error ?
                  <div style={{color: 'red'}}>{this.props.error}</div>
                  :null
              }
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

FileForm.propTypes = {
      handleUploadFile: React.PropTypes.func,
      isLoading: React.PropTypes.bool
};
