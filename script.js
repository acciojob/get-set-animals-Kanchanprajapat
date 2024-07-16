class Animal {
	constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a sound (can be overridden by subclasses)
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
	constructor(species) {
        super(species);
    }

    // Method to bark
    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
	 constructor(species) {
        super(species);
    }

    // Method to purr
    purr() {
        console.log("purr");
    }
}

const animal = new Animal("generic");
console.log(animal.species); // Output: generic
animal.makeSound(); // Output: Some generic animal sound

const cat = new Cat("feline");
console.log(cat.species); // Output: feline
cat.makeSound(); // Output: Some generic animal sound (inherited from Animal)
cat.purr(); // Output: purr

const dog = new Dog("canine");
console.log(dog.species); // Output: canine
dog.makeSound(); // Output: Some generic animal sound (inherited from Animal)
dog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;