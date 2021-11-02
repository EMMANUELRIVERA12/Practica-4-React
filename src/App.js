import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Libros from './Components/Libros';
import Lista from './Components/Lista';
import LibreriaProvider from './Context/LibreriaContext';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LibreriaProvider>
        <Header/>
        <div className="Contenedor">
          <Libros/>
          <Lista/>
        </div>
        </LibreriaProvider>
      </div>
    );
  }
}

export default App;