import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>workspaces</h1>
        <h3>Find a place to get things done.</h3>
       {/* <button className="mt6">start here</button> */} 
        <SearchPage />
        {/*
        
      
        */}
      </div>
    );
  }
}

export default App;
/*
Ask user list of questions


*/