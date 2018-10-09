import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <>
        <span>{this.formatCount()}</span>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default Counter;
