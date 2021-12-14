const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const close = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
  menu.classList.toggle('activate');
  close.forEach(child => {
    child.classList.toggle('animated');
  });
}); 