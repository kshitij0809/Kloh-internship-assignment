import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Udemy from './components/ActivityList';


class App extends Component {
  render() {
    return (
      <div>
        <Udemy/>
      </div>
    );
  }
}

export default App;
