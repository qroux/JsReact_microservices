import React, { Component } from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Reddit Cursed Copycat</h1>
        <hr />
        <PostCreate />
        <hr />
        <PostList />
      </div>
    )
  }
}

export default App
