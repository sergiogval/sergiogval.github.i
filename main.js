const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const close = document.querySelectorAll('.ham span');
const logoclosed = document.querySelector('.logo-mobile1');
const logoclosed1 = document.querySelector('.logo-mobile2');
const mobileImage = document.querySelector('.projects');

ham.addEventListener('click', () => {
  menu.classList.toggle('active');
  logoclosed.classList.toggle('active');
  logoclosed1.classList.toggle('active');
  mobileImage.style.backgroundImage = "url('images/mobile-menu-img.png')";
  close.forEach((child) => {
    child.classList.toggle('animated');
  });
});

// create an array of objects with the data of the project in the index.html file.