function dog (options){
  this.sound = options.sound || 'guau';
  this.legs = options.legs || 4;
  this.tail = options.tail || true;
  this.color = options.color || 'black';
}

function cat(options){
  this.sound = options.sound || 'miau';
  this.legs = options.legs || 4;
  this.tail = options.tail || true;
  this.color = options.color || 'yellow';
  this.fangs = options.fangs || 4;
}

function kangaroo(options){
  this.legs = options.legs || 2;
  this.tail = options.tail || true;
  this.color = options.color || 'brown';
}

function animalFactory() {}

animalFactory.prototype.animalClass = dog;

animalFactory.prototype.createAnimal = (options) => {
  switch(options.animalType){
    case 'dog':
      this.animalClass = dog;
      break;
    case 'cat':
      this.animalClass = cat;
      break;
    case 'kangaroo':
      this.animalClass = kangaroo;
   }
   return new this.animalClass(options);
};

const catFactory = new animalFactory();

const Cat = catFactory.createAnimal({
  animalType : 'cat',
  legs : 3,
  tail : false,
  color: 'White',
  fangs : 4
});

console.log(Cat);
