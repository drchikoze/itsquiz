import React, {Component} from 'react'
import { Link } from 'react-router'
import { Col, Row } from 'react-bootstrap'

export default class BodyLayout extends Component {
  render() {
    if (process.env.BROWSER) {
      require('./BodyLayout.scss')
    }
    return (
      <div className='body_layout'>
        <Row>
          <Col mdPush={1} md={10}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    )
  }
}
