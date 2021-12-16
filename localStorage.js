const nameI = document.getElementById('name');
const emails = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

function saveLocalStore() {
  const data = {
    name: nameI.value,
    email: emails.value,
    message: message.value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}
submit.addEventListener('click', saveLocalStore);

function getLocalStorage() {
  if (localStorage.getItem('data')) {
    const data = JSON.parse(localStorage.getItem('data'));
    nameI.value = data.name;
    emails.value = data.email;
    message.value = data.message;
  }
}

window.addEventListener('load', getLocalStorage());
