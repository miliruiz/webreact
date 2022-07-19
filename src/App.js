import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsCointainer from './components/ItemDetailsContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
        </NavBar>
       <ItemDetailsCointainer/>
      </div>
    );
  }
}

export default App;
