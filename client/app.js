import React, { Component } from 'react'
import Header from "./src//components/header";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world,Welcome to react</h1>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

export default App;