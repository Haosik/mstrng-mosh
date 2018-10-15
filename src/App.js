import React, { Component } from 'react';
// import MoviesInDB from './components/moviesindb';

import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };
  constructor() {
    super();
    console.log('App Constructor initialized');
  }
  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({
      counters
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map(elem => {
      elem.value = 0;
      return elem;
    });
    console.log(counters);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index);
    counters[index] = { ...this.state.counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  componentDidMount() {
    console.log('Component did mount');
  }

  render() {
    console.log('App rendered');
    return (
      <div>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
