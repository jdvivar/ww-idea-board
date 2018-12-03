import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Header.scss'

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <h2>Idea board</h2>
        <div className='Header-status'>
          {
            this.props.status
              ? `Last update: ${this.props.status}`
              : 'Welcome!'
          }
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  status: PropTypes.string.isRequired
}

const mapStateToProps = ({ ideasReducers: { lastStatus: status } }, props) => (
  { status }
)

export default connect(mapStateToProps)(Header)
