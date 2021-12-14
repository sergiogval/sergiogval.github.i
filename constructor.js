// make an object constructor for an object with the name Projects and the properties id, name, description, image and languages array.


function Projects(id, name, description, image, languages, demo, source) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.image = image;
  this.languages = languages;
  this.demo = demo;
  this.source = source;
}

let project01 = new Projects(1, 'name', 'description', 'image', ['lang1','lang2','lang3'], 'demo','source');
let project02 = new Projects(2, 'name', 'description', 'image', ['lang1','lang2','lang3'], 'demo','source');
let project03 = new Projects(3, 'name', 'description', 'image', ['lang1','lang2','lang3'], 'demo','source');
let project04 = new Projects(4, 'name', 'description', 'image', ['lang1','lang2','lang3'], 'demo','source');
let project05 = new Projects(5, 'name', 'description', 'image', ['lang1','lang2','lang3'], 'demo','source');
let project06 = new Projects(6, 'name', 'description', 'image', ['lang1','lang2','lang3'], 'demo','source');

const myProjects = [project01,project02,project03,project04,project05,project06];

console.log(myProjects);

