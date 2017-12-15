import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './containers/Countries';
import CountryAdd from './containers/CountryAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countries />
        <CountryAdd />
      </div>
    );
  }
}

export default App;
