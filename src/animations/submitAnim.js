import anime from 'animejs';

export const submitHover = () => {
  anime({
    targets: '.submit',
    duration: 200,
    scale: 1.05,
  });
};

export const submitAnim = () => {
  const target = '.submit';
  const duration = 250;
  const easing = [0.46, 0.035, 0.655, 1.65];

  anime({
    targets: target,
    scale: 0.9,
    duration,
    // direction: 'alternate',
    easing: easing,
  });
  anime({
    targets: target,
    duration,
    color: '#000',
    backgroundColor: '#29ed98',
    easing: easing,
  });
};
