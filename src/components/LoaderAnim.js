import React from 'react';
import injectSheet from 'react-jss';
import anime from 'animejs';

const diameter = 10;

const styles = {
  circle: {
    backgroundColor: '#fff',
    width: diameter,
    height: diameter,
    borderRadius: 20,
    display: 'inline-block',
    margin: 5,
    boxShadow: { x: 0, y: 0, blur: 8, color: 'rgba(0, 0, 0, 0.2)' },
  },
};

class LoaderAnim extends React.Component {
  componentDidMount() {
    const duration = 1000;
    const delay = 50;
    const easing = 'easeInOutQuad';
    const elasticity = 250;
    const start = 0;
    const end = 150;
    let offset = anime.timeline({
      loop: true,
    });
    offset
      .add({
        targets: '.ball1',
        translateX: [
          {
            value: end,
            duration: duration,
            delay: delay,
            elasticity: elasticity,
            easing: easing,
          },
          {
            value: start,
            duration: duration,
            delay: delay,
            elasticity: elasticity,
            easing: easing,
          },
        ],
        loop: true,
        offset: 0,
      })
      .add({
        targets: '.ball2',
        translateX: [
          {
            value: end,
            duration: duration,
            delay: delay,
            elasticity: elasticity,
            easing: easing,
          },
          {
            value: start,
            duration: duration,
            delay: delay,
            elasticity: elasticity,
            easing: easing,
          },
        ],
        loop: true,
        offset: 50,
      })
      .add({
        targets: '.ball3',
        translateX: [
          {
            value: end,
            duration: duration,
            delay: delay,
            elasticity: elasticity,
            easing: easing,
          },
          {
            value: start,
            duration: duration,
            delay: delay,
            elasticity: elasticity,
            easing: easing,
          },
        ],
        loop: true,
        offset: 100,
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="loader">
        <div className={classes.circle + ' ball1'} />
        <div className={classes.circle + ' ball2'} />
        <div className={classes.circle + ' ball3'} />
      </div>
    );
  }
}

export default injectSheet(styles)(LoaderAnim);

// .add({
//   targets: '.loader',
//   rotate: 180,
//   duration: 2000,
// })
