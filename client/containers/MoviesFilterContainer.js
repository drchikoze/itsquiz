import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as filterActions from '../actions/filterActions.js'
import {bindAll} from 'lodash'
import FilterForm from '../components/FilterForm'


class MoviesFilterContainer extends Component {
  constructor(props, context) {
    super(props, context)
    bindAll(this, 'setNameFilter', 'setActorFilter')
  }


  setNameFilter(value) {
    const { dispatch } = this.props;
    dispatch(filterActions.setNameFilter(value))
  }

  setActorFilter(value) {
    const { dispatch } = this.props;
    dispatch(filterActions.setActorFilter(value))
  }


  render() {
    return (
      <div>
        <FilterForm
          setNameFilter = {this.setNameFilter}
          setActorFilter = {this.setActorFilter}
          filter = {this.props.filter}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}


export default connect(mapStateToProps)(MoviesFilterContainer)
