import React, { Component } from 'react'

import IdeaList from './components/IdeaList'
import Header from './components/Header'

import './App.scss'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='grid-wrapper'>
          <Header />
          <IdeaList />
        </div>
      </div>
    )
  }
}

export default App
