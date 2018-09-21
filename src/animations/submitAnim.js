import anime from 'animejs';

export const submitAnim = () => {
  const target = '.submit';
  const duration = 250;
  const easing = [0.46, 0.035, 0.655, 1.65];

  anime({
    targets: target,
    scale: 0.9,
    duration,
    easing: easing,
  });
  anime({
    targets: target,
    duration,
    color: '#000',
    backgroundColor: '#29ed98',
    easing: easing,
  });

  const elem = document.getElementById('button');
  if (elem.value == 'Submit') elem.value = 'Sent!';
};
