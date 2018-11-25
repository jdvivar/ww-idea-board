import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import { updateIdea, removeIdea } from '../actions/ideasActions'
import ColorPicker from './ColorPicker'
import Close from './Close'
import { randomColor } from '../styles/presetColors.js'

import './Idea.scss'
import '../styles/animations.css'

const placeholder = {
  header: 'Title...',
  body: 'And your idea here...',
}

class Idea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ideaAnimation: 'bounceIn',
      showColorPicker: 'false',
      showClose: 'false',
      accent: randomColor()
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    // Part of the instance so it can correctly debounce
    this.bounceUpdate = debounce(newContent => {
      props.onUpdate(newContent)
    }, 2000)
  }

  handleInput(event, where) {
    this.bounceUpdate({ [where]: event.target.innerText })
  }

  toggleIdeaAnimation() {
    this.setState(state => ({
      ideaAnimation: state.ideaAnimation === 'bounceIn' ? 'bounceOut' : 'bounceIn'
    }))
  }

  handleRemove() {
    this.toggleIdeaAnimation()
    setTimeout(this.props.onRemove, 700)
  }

  updateColor(color) {
    const ideaElement = document.getElementById(`idea-${this.props.id}`)
    ideaElement.style.setProperty('--accent', color)
  }

  render () {
    return (
      <li
          id={ `idea-${this.props.id}` }
          className={`Idea ${this.state.ideaAnimation}`}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
        <ColorPicker id={this.props.id} value={this.state.accent} show={this.state.showColorPicker} />
        <Close onClick={this.handleRemove} show={this.state.showClose} />
        <div
            className="Idea-header"
            contentEditable="true"
            placeholder={placeholder.header}
            onInput={event => this.handleInput(event, 'header')}
            suppressContentEditableWarning>
          { this.props.content.header }
        </div>
        <div
            className="Idea-body"
            contentEditable="true"
            placeholder={placeholder.body}
            onInput={event => this.handleInput(event, 'body')}
            suppressContentEditableWarning>
          { this.props.content.body }
        </div>
      </li>
    )

  }

  componentDidMount() {
    if (this.props.content.color) {
      this.setState({ color: this.props.content.color })
    }
    this.updateColor(this.state.accent)
  }

  componentDidUpdate() {
    if (this.props.content.color) {
      this.updateColor(this.props.content.color)
    }
  }
}

Idea.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, { id }) => ({
  onUpdate: newContent => dispatch(updateIdea(id, newContent)),
  onRemove: () => dispatch(removeIdea(id))
})

export default connect(null, mapDispatchToProps)(Idea)
