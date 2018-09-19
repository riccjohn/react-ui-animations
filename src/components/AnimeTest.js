import React, { Component } from 'react';
import anime from 'animejs';

class AnimeTest extends Component {
  componentDidMount() {
    var cssSelector = anime({
      targets: '#cssSelector',
      duration: 3000,
      translateX: 250,
    });
  }

  render() {
    return (
      <div className="main-container flex column center-all">
        <div className="switch flex">
          <div className="slider" />
        </div>
      </div>
    );
  }
}

export default AnimeTest;
