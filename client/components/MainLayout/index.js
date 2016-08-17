import React, {Component} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class MainLayout extends Component {
  render() {
    require('./MainLayout.scss')
    return (
      <div className='main_layout'>
        <Header/>
        <div className='main_content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
