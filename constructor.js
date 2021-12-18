// object constructor function
function Project(id, title, description, image, languages, demo, source) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.image = image;
  this.languages = languages;
  this.demo = demo;
  this.source = source;
}

const myProjects = [
  new Project('1', 'Tic Tac Toe', 'A simple tic tac toe game', '/images/project1.png', ['html', 'css', 'javascript'], 'https://tictactoe-game-jr.herokuapp.com/', 'https://www.github.com/sergiogval' ),
  new Project('2', 'Pomodoro Clock', 'A simple pomodoro clock', 'images/project2.png', ['html', 'css', 'javascript'], 'https://pomodoro-clock-jr.herokuapp.com/', 'https://www.github.com/sergiogval' ),
  new Project('3', 'Weather App', 'A simple weather app', 'images/project3.png', ['html', 'css', 'javascript'], 'https://weather-app-jr.herokuapp.com/', 'https://www.github.com/sergiogval' ),
  new Project('4', 'Calculator', 'A simple calculator', 'images/project4.png', ['html', 'css', 'javascript'], 'https://calculator-jr.herokuapp.com/', 'https://www.github.com/sergiogval' ),
  new Project('5', 'Wikipedia Viewer', 'A simple wikipedia viewer', 'images/project5.png', ['html', 'css', 'javascript'], 'https://wikipedia-viewer-jr.herokuapp.com/', 'https://www.github.com/sergiogval' ),
  new Project('6', 'GifTastic', 'A simple gif tastic', 'images/project6.png', ['html', 'css', 'javascript'], 'https://giftastic-jr.herokuapp.com/', 'https://www.github.com/sergiogval' ),
];

function getProjects() {
  return myProjects;
}
getProjects();

const arr = myProjects.length;
for (let i = 0; i < arr; i += 1) {
  let project = myProjects[i];
  let modalTitle = body.getElementById('modaltitle');
  const modalTemplate = document.querySelector('#modalTemplate');
  const modalDescription = document.querySelector('#modalDescription');
  const modalImage = document.querySelector('#modalImage');
  const modalLanguages = document.getElementById('modalLanguages').children;
  const modalDemo = document.querySelector('#modalDemo');
  const modalSource = document.querySelector('#modalSource');
  const openModal = document.getElementById('openModal');
  const modalCloser = document.querySelector('#modalClose');
  const badges = modalLanguages.lenght;
  for (let i = 0; i < badges; i += 1) {
    modalLanguages[i].innerText = myProjects[i].badges;
  }
}

openModal.addEventListener('click', () => {
  modalTemplate.style.display = 'flex';
  for (let i = 0; i < arr; i += 1) {
    modalTitle.innerText = myProjects[i].name;
    modalDescription.innerText = myProjects[i].description;
    modalImage.src = myProjects[i].image;
    modalDemo.innerText = myProjects[i].demo;
    modalSource.innerText = myProjects[i].source;
  }
});

// Create a function closes the modal when the user clicks on the close button
modalCloser.addEventListener('click', () => {
  modalTemplate.style.display = 'none';
});