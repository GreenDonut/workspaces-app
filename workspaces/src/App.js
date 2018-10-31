import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import LocationList from './components/LocationList/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fl w-100 pa2 outline">
          <div className="outline w-25 p2">
            Saved
          </div>
          
        </div>
        <div>
          <h1>workspaces</h1>
          <h3>Find a place to get things done.</h3>
        </div>
       {/* <button className="mt6">start here</button> */} 
        <SearchPage />
        <LocationList 
          
        />

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