import React, { Component } from 'react';

class Counter extends Component {
  formatValue = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter !== this.props.counter) {
      // Make some ajax call to get new data from server
    }
  }

  componentWillUnmount() {
    console.log('Counter unmounting');
  }

  styles = {
    fontSize: 11,
    fontWeight: 'bold'
  };

  render() {
    console.log('Counter rendered');
    return (
      <div className="row">
        <div className="col-1">
          <span
            style={this.styles}
            className={`badge badge-${this.props.counter.value === 0 ? 'warning' : 'primary'} m-2`}
          >
            {this.formatValue()}
          </span>
        </div>
        <div className="col">
          <button
            style={{ boxShadow: 'none' }}
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-disabled btn-sm m-2"
            disabled={this.props.counter.value <= 0}
          >
            {' '}
            -{' '}
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
