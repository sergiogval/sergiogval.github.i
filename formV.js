function message() {
    const error = document.createElement('P');
    error.textContent = 'The email should be with lowercase!';
    error.classList.add('error');
    const emailH = document.querySelector('.items-form');
    emailH.appendChild(error);
  }
  
  const form = document.querySelector('.form');
  const email = document.querySelector('.email');
  
  form.addEventListener('submit', (e) => {
    if (email.value !== email.value.toLowerCase()) {
      message();
      e.preventDefault();
    }
  });