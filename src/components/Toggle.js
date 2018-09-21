import React, { Component } from 'react';
import anime from 'animejs';

class Toggle extends Component {
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
      duration: 500,
      translateX: this.state.on ? 0 : 47,
      easing: [0.4, 0.1, 0.6, 0.9],
      elasticity: 0,
    });

    anime({
      targets: '.switch',
      duration: 250,
      backgroundColor: this.state.on ? '#f2f2f2' : '#00ffb4',
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
        <div className="switch innerShadow flex" onClick={this.slide}>
          <div className="slider" />
        </div>
      </div>
    );
  }
}

export default Toggle;
