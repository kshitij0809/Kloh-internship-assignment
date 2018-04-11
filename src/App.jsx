import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Udemy from './components/ActivityList';
import Details from './components/ActivityDetail';


class App extends Component {
  render() {
    return (
      <div>
        <Details/>
      </div>
    );
  }
}

export default App;
