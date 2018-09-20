import anime from 'animejs';

const loaderAnim = anime.timeline();

loaderAnim
  .add({
    targets: '.ball1',
    translateX: 250,
    easing: 'easeOutExpo',
  })
  .add({
    targets: '.ball2',
    translateX: 250,
    easing: 'easeOutExpo',
    offset: '-=600', // Starts 600ms before the previous animation ends
  })
  .add({
    targets: '.ball3',
    translateX: 250,
    easing: 'easeOutExpo',
    offset: '-=800', // Starts 800ms before the previous animation ends
  });

export default loaderAnim;
