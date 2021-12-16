const nameI = document.getElementById('#name');
const emails = document.getElementById('#email');
const message = document.getElementById('#message');
const submit = document.getElementById('#submit');

submit.addEventListener('click', () => {
    setLocalStorage()
});

function setLocalStorage() {
    let data = {
        name: nameI.value,
        email: emails.value,
        message: message.value
    }
    localStorage.setItem('data', JSON.stringify(data));
}
