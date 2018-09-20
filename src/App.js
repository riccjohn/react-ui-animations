import React, { Component } from 'react';
import './App.css';
import {
  AnimeTest,
  SubmitButton,
  HamburgerTest,
  Hamburger,
  LoaderAnim,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimeTest />

        <div className="main-container flex column center-all">
          <div className="section flex column center-all">
            <HamburgerTest />
          </div>
          <div className="section">
            <SubmitButton />
          </div>
          <div className="section flex loaderSection">
            <LoaderAnim />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
