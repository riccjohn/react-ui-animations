import React, { Component } from 'react';
import anime from 'animejs';

class AnimeTest extends Component {
  constructor() {
    super();
    this.state = {
      on: false,
    };
    this.slide = this.slide.bind(this);
  }
  slide() {
    anime({
      targets: '.slider',
      duration: 250,
      translateX: this.state.on ? 0 : 47,
      easing: [0.4, 0.1, 0.6, 0.9],
      elasticity: 0,
    });

    this.setState({
      on: !this.state.on,
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="main-container flex column center-all">
        {this.state.on ? <h1>ON</h1> : <h1>OFF</h1>}
        <div className="switch flex" onClick={this.slide}>
          <div className="slider" />
        </div>
      </div>
    );
  }
}

export default AnimeTest;
