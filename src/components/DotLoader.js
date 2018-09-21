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
    position: 'relative',
    left: -125,
    margin: 5,
    boxShadow: { x: 0, y: 0, blur: 8, color: 'rgba(0, 0, 0, 0.2)' },
  },
  loader: {
    display: 'block',
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
        targets: '.ball:nth-of-type(1)',
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
        targets: '.ball:nth-of-type(2)',
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
        targets: '.ball:nth-of-type(3)',
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
      <div className={classes.loader + ' dotLoader'}>
        <div className={classes.circle + ' ball'} />
        <div className={classes.circle + ' ball'} />
        <div className={classes.circle + ' ball'} />
      </div>
    );
  }
}

export default injectSheet(styles)(LoaderAnim);
