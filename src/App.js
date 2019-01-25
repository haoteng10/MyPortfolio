import React, { Component } from 'react';
import logo from './logo.svg';
import InDevelopment from './InDevelopment';
import AboutMe from './AboutMe';
import ListItem from './ListItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <InDevelopment />
          
          <AboutMe />
  
          <ListItem />
          
      </div>
    );
  }
}

export default App;
