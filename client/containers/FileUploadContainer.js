import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindAll} from 'lodash'
import * as moviesActions from '../actions/moviesActions.js'
import FileForm from '../components/FileForm'


class FileFormContainer extends Component {
  constructor(props, context) {
    super(props, context)
    bindAll(this, 'handleUploadFile');
  }

  handleUploadFile(file) {
    const { dispatch } = this.props;
    dispatch(moviesActions.uploadMovies(file))
  }

  render() {
    return (
      <div>
        <FileForm
          handleUploadFile = {this.handleUploadFile}
          isLoading = {this.props.isLoading}
          isLoaded = {this.props.isLoaded}
          error = {this.props.error}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.movies.uploadFile.isLoading,
    isLoaded: state.movies.uploadFile.isLoaded,
    error: state.movies.uploadFile.err
  }
}

export default FileFormContainer = connect(mapStateToProps)(FileFormContainer)
