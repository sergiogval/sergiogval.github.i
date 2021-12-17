// object constructor function
const Projects = function (name, description, image, languages, demo, source) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.languages = languages;
  this.demo = demo;
  this.source = source;
}

// objects populated
const project01 = new Projects(1, 'Empezando a programar', 'This project is about some tests I did with no idea about what I was doing', '/images/project1.png', ['HTML', 'CSS', 'JS'], 'demo', 'source');
const project02 = new Projects(2, 'Alien invasion but with a twist', 'A wonderful remake of the classic Alien Invasion but this time the enemy is COVID-19', 'src="/images/project2.png"', ['HTML', 'CSS', 'JS'], 'demo', 'source');
const project03 = new Projects(3, 'A Blog about hemp', 'A personal project that has as ultimate propourse inform people about what hemp is and the 50k derivated products that are available', 'src="/images/project3.png"', ['HTML', 'CSS', 'JS'], 'demo', 'source');
const project04 = new Projects(4, 'A Generic form page', 'This is a test I did in order to get into the Microverse program. It is just a simple form full of inputs', 'src="/images/project4.png"', ['HTML', 'CSS', 'JS'], 'demo', 'source');
const project05 = new Projects(5, 'An submmit page', 'This is a project that I did as final block of the module 1 in MV program', 'src="/images/project5.png"', ['HTML', 'CSS', 'JS'], 'demo', 'source');
const project06 = new Projects(6, 'This project', 'This is my portfolio and it is the first capstone that I have to achieve in MV program', 'src="/images/project1.png"', ['HTML', 'CSS', 'JS'], 'demo', 'source');

// objects array
const myProjects = [project01, project02, project03, project04, project05, project06];

const arr = myProjects.length;
const modalTitle = document.querySelector('#modaltitle');
const modalDescription = document.querySelector('#modalDescription${i}');
const modalImage = document.querySelector(`modalImage${i}`);
const modalLanguages = document.querySelector(`modalLanguages${i}`);
const modalDemo = document.querySelector(`modalDemo${i}`);
const modalSource = document.querySelector(`modalSource${i}`);

function populateModals() {
  for (let i = 0; i <= arr; i++) {
    modalTitle.innerHTML = myProjects[i].name;
    modalDescription.innerHTML = myProjects[i].description;
    modalImage.src = myProjects[i].image;
    modalLanguages.innerHTML = myProjects[i].languages;
    modalDemo.innerHTML = myProjects[i].demo;
    modalSource.innerHTML = myProjects[i].source;
  };
}
populateModals();

// Create a function closes the modal when the user clicks on the close button