import React, { Component } from 'react';
import './Idea.css';

class Idea extends Component {
  render() {
    return (
      <div className="Idea">
        <div className="Idea-header">
          {this.props.content.header}
        </div>
        <div className="Idea-body">
          {this.props.content.body}
        </div>
      </div>
    );
  }
}

export default Idea;
