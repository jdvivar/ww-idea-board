import React, { Component } from 'react';
import './App.css';

import Idea from './components/Idea/';

class App extends Component {
  render() {
    const content = {
      header: 'here is the header',
      body: 'here is the body'
    }

    return (
      <div className="App">
        <div>Search</div>
        <div>Filter</div>
        <Idea content={content} />
      </div>
    );
  }
}

export default App;
