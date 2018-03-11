import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import Nav from './components/Nav';
import Header from './components/Header';
import OurWork from './components/OurWork';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
          <OurWork />
          <AboutUs />
          <Footer/>
      </div>
    );
  }
}

export default App;
