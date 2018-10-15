import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters rendered');
    const { onReset, onDelete, onIncrement, onDecrement, counters } = this.props;
    return (
      <>
        <button onClick={onReset} className="btn btn-info btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

export default Counters;
