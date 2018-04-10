import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Footer/>
      </div>
    );
  }
}

export default App;
