const ham = document.querySelector('.ham');
const links = document.querySelector('.menu');

ham.addEventListener('click', () => {
  links.classList.toggle('open');
});
