import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const colors = [
  {color: 'red', id: 1},
  {color: 'blue', id: 2},
  {color: 'green', id: 3}
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Delayed />
      </div>
    );
  }
}

class Delayed extends Component {
  state = {
    loading: true
  }

  doSomething() {
    const me = this;
    setTimeout(() => me.setState({loading: false}), 2000);
    this.setState({loading: true});
  }

  componentDidMount() {
    this.doSomething();
  }

  render() {
    let els = colors.map((color) => <li key={color.id}>{color.color}</li>);
    if (this.state.loading) {
      return (
        <div>
          <p key={1}>Loading...</p>
          <p key={2}>{(new Date().toString())}</p>
          <button key={3} onClick={() => this.setState({loading: false})}>Render</button>
          <ul key={4}>{els}</ul>
        </div>
      );
    } else {
      return (
        <div>
          <p key={2}>{(new Date().toString())}</p>
          <button key={3} onClick={() => this.doSomething()}>Render</button>
          <ul key={4}>{els}</ul>
        </div>
      );
    }
  }
}

export default App;
