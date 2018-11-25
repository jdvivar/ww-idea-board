import React, { Component } from 'react'

import './Close.css'

class Close extends Component {
  render() {
    return <div className="Close" onClick={this.props.onClick}>✕</div>
  }
}

export default Close
