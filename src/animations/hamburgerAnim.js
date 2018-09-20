import anime from 'animejs';

const toggle = () => {
  let menu = true;
  return () => {
    const duration = 1000;
    let rotate = menu ? 45 : 0;
    menu = !menu;

    anime({
      targets: '.top',
      translateY: [{ value: menu ? -0.75 : 6, duration: duration, delay: 100 }],
      scale: menu ? 1 : 0.8,
      rotate: rotate,
      duration: duration,
    });

    anime({
      targets: '.mid',
      scale: menu ? 1 : 0,
      rotate: rotate,
      duration: duration,
    });

    anime({
      targets: '.bottom',
      translateY: [{ value: menu ? 0.75 : -6, duration: duration, delay: 100 }],
      scale: menu ? 1 : 0.8,
      rotate: rotate * -1,
      duration: duration,
    });
  };
};

export default toggle();
