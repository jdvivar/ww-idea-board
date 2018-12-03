import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addIdea } from '../actions/ideasActions'

import './NewIdea.scss'

class NewIdea extends Component {
  render () {
    return <li className='NewIdea' onClick={this.props.onClick}>
      +
    </li>
  }
}

NewIdea.propTypes = {
  onClick: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(addIdea())
})

export default connect(null, mapDispatchToProps)(NewIdea)
