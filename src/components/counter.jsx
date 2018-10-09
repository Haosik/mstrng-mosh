import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
  increment = () => {
    this.setState({
      count: this.state.count + 10
    });
  };
  styles = {
    fontSize: 11,
    fontWeight: 'bold'
  };
  render() {
    return (
      <>
        <span style={this.styles} className={`badge badge-${this.state.count === 0 ? 'warning' : 'primary'} m-2`}>
          {this.formatCount()}
        </span>
        <button
          style={{ boxShadow: 'none' }}
          className="btn btn-primary btn-sm"
          onClick={this.increment}
        >
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
