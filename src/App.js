import React, { Component } from 'react';
import './App.css';
import {
  Toggle,
  SubmitButton,
  HamburgerTest,
  Hamburger,
  DotLoader,
  CircleLoader,
  Placeholder,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container flex column center-all">
          <div className="section flex column center-all">
            {/* <h1>Toggle Switch</h1> */}
            <Toggle />
          </div>
          <div className="section flex column center-all">
            {/* <h1>Hamburger</h1> */}
            <HamburgerTest />
          </div>
          <div className="section">
            {/* <h1>Submit Button</h1> */}

            <SubmitButton />
          </div>
          <div className="section flex column loaderSection">
            {/* <h1>Dot Loader</h1> */}
            <DotLoader />
          </div>
          <div className="section loaderSection">
            {/* <h1>Circle Loader</h1> */}
            <CircleLoader />
          </div>
          <div className="section flex column center-all placeholderSection">
            {/* <h1>Placeholder</h1> */}
            <Placeholder />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
