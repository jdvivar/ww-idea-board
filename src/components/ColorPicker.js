import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import { updateIdea } from '../actions/ideasActions'
import './ColorPicker.scss'

class ColorPicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.value,
      hover: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)

    this.bounceUpdate = debounce(color => {
      props.onUpdate({ color })
    }, 100)
  }

  handleChange ({ target: { value } }) {
    // Every time, enqueue change to re-render
    this.setState({ value })

    this.updateBackground(value)

    // Debounced, dispatch change to redux state :)
    this.bounceUpdate(value)
  }

  updateBackground (color) {
    const colorPickerBg = document.querySelector(`#idea-${this.props.id} .ColorPicker`)
    colorPickerBg.style.setProperty('--accent', color)
  }

  handleMouseOver (hover) {
    this.setState({ hover })
  }

  render () {
    return (
      <div
        className={`ColorPicker ${this.state.hover}`}
        onMouseEnter={() => this.handleMouseOver('hover')}
        onMouseLeave={() => this.handleMouseOver('')}>
        <span className='ColorPicker-text'>Change accent</span>
        <span className='ColorPicker-value'>{this.state.value}</span>
        <input
          type='color'
          value={this.state.value}
          onChange={e => this.handleChange(e)} />
      </div>
    )
  }
}

ColorPicker.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, { id }) => ({
  onUpdate: newContent => dispatch(updateIdea(id, newContent))
})

export default connect(null, mapDispatchToProps)(ColorPicker)
