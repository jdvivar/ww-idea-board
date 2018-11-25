import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Idea from './Idea'
import NewIdea from './NewIdea'

import './IdeaList.scss'

const mapIdeas = idea => (
  <Idea key={ idea.id } id={ idea.id } content={ idea.content }/>
)

class IdeaList extends Component {
  render () {
    return  (
      <ul className="IdeaList">
        { this.props.ideas.map(mapIdeas) }
        <NewIdea />
      </ul>
    )
  }
}

IdeaList.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.object.isRequired
    }).isRequired
  ).isRequired,
}

const mapStateToProps = ({ ideasReducers: state }) => ({
  ideas: state.ideas.map( id => ({ id, content: state.ideasById[id] }))
})

export default connect(mapStateToProps)(IdeaList)
