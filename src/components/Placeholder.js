import React, { Component } from 'react';
import anime from 'animejs';

class Placeholder extends Component {
  componentDidMount() {
    const start = 0;
    const end = 500;
    const delay = 0;
    const easing = 'easeInOutQuint';
    const elasticity = 600;
    const duration = 1200;
    const baseOffset = 100;

    const xAnimation = [
      {
        value: start,
        duration: duration,
        delay: delay,
        elasticity: elasticity,
        easing: easing,
      },
      {
        value: end,
        duration: duration,
        delay: delay,
        elasticity: elasticity,
        easing: easing,
      },
    ];
    let animate = anime.timeline();
    animate
      .add({
        targets: '.profilePhoto',
        translateX: xAnimation,
      })
      .add({
        targets: '.header  .line:nth-of-type(1)',
        translateX: xAnimation,
        offset: baseOffset * 1,
      })
      .add({
        targets: '.header .line:nth-of-type(2)',
        translateX: xAnimation,
        offset: baseOffset * 2,
      })
      .add({
        targets: '.placeholderBody .line:nth-of-type(1)',
        translateX: xAnimation,
        offset: baseOffset * 3,
      })
      .add({
        targets: '.placeholderBody .line:nth-of-type(2)',
        translateX: xAnimation,
        offset: baseOffset * 4,
      })
      .add({
        targets: '.placeholderBody .line:nth-of-type(3)',
        translateX: xAnimation,
        offset: baseOffset * 5,
      })
      .add({
        targets: '.placeholderBody .line:nth-of-type(4)',
        translateX: xAnimation,
        offset: baseOffset * 6,
      })
      .add({
        targets: '.placeholderBody .line:nth-of-type(5)',
        translateX: xAnimation,
        offset: baseOffset * 7,
      })
      .add({
        targets: '.placeholderBody .line:nth-of-type(6)',
        translateX: xAnimation,
        offset: baseOffset * 8,
      });
  }

  render() {
    return (
      <div className="placeholder-card shadow">
        <div className="content-area">
          <div className="header flex">
            <div className="grey profilePhoto" />
            <div className="header-right flex column">
              <div className="line grey size4" />
              <div className="line grey size3" />
            </div>
          </div>
          <div className="placeholderBody">
            <div className="indent line grey size6"> </div>
            <div className="line grey size3"> </div>
            <div className="line grey size4"> </div>
            <div className="line grey size2"> </div>
            <div className="indent line grey size6"> </div>
            <div className="line grey size4"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Placeholder;
