import React, { Component } from 'react';
import anime from 'animejs';

class CircleLoader extends Component {
  componentDidMount() {
    const elasticity = 0;
    const easing = 'linear';

    const maxTranslate = 6;
    const minTranslate = maxTranslate * -1;
    const minDuration = 800;
    const maxDuration = 1400;

    const animate = selector => {
      anime({
        targets: selector,
        opacity: 0.5,
        translateX: [
          {
            value: () => {
              return anime.random(minTranslate, maxTranslate);
            },
            duration: () => {
              return anime.random(minDuration, maxDuration);
            },
            elasticity: elasticity,
          },
          {
            value: () => {
              return anime.random(minTranslate, maxTranslate);
            },
            duration: () => {
              return anime.random(minDuration, maxDuration);
            },
            elasticity: elasticity,
          },
          {
            value: () => {
              return anime.random(minTranslate, maxTranslate);
            },
            duration: () => {
              return anime.random(minDuration, maxDuration);
            },
            elasticity: elasticity,
          },
        ],
        translateY: [
          {
            value: () => {
              return anime.random(minTranslate, maxTranslate);
            },
            duration: () => {
              return anime.random(minDuration, maxDuration);
            },
            elasticity: elasticity,
          },
          {
            value: () => {
              return anime.random(minTranslate, maxTranslate);
            },
            duration: () => {
              return anime.random(minDuration, maxDuration);
            },
            elasticity: elasticity,
          },
          {
            value: () => {
              return anime.random(minTranslate, maxTranslate);
            },
            duration: () => {
              return anime.random(minDuration, maxDuration);
            },
            elasticity: elasticity,
          },
        ],
        delay: 0,
        direction: 'alternate',
        easing: easing,
        loop: true,
      });
    };
    animate('.circle:nth-of-type(1)');
    animate('.circle:nth-of-type(2)');
    animate('.circle:nth-of-type(3)');
    animate('.circle:nth-of-type(4)');
  }
  render() {
    return (
      <div className="flex center-all">
        <div className="circleLoader flex center-all column">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>
    );
  }
}

export default CircleLoader;
