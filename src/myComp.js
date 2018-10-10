import React, { Component } from 'react';

export default class myComp extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  increment = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render(){
    return (
      <div onClick={this.increment}>
        {this.state.count}
      </div>
    )
  }
}