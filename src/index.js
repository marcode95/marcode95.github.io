import canvas from './components/canvas';
canvas();

const showcaseButton = document.getElementById('showcase-button');
const showcaseHeight = document.getElementById('showcase').scrollHeight
showcaseButton.addEventListener('click', () => {
  window.scrollBy(0, window.scrollTo(0, window.innerHeight))
});