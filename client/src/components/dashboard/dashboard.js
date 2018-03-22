import React, { Component } from 'react'

class  Dashboard extends Component {
  render() {
    console.log(this.props.match)
    
    return (
      <div>
        Dashoard
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard;