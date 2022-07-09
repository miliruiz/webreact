import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import '/home/milagros/Escritorio/react/clase 1/miweb/src/styles/Nav.css'
import ItemListContainer from './components/ItemListContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
        </NavBar>
       <ItemListContainer greeting="Boton"/>
      </div>
    );
  }
}

export default App;
