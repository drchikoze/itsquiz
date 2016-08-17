import React, {Component} from 'react'
import { Col, Row, Button, Form, FormGroup, FormControl, ControlLabel, FieldGroup } from 'react-bootstrap';
import {bindAll} from 'lodash'

export default class InfoBox extends Component {
  render() {
    return (
      <div className='info_box'>
        this is InfoBox
      </div>
    )
  }
}

InfoBox.propTypes = {
      handleUploadFile: React.PropTypes.func,
      isLoading: React.PropTypes.bool
};
