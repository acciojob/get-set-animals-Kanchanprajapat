//complete this code
class Animal {
	constructor(species:string){
		this.species = species;
	}
	get makeSound(){
		return `The ${this.species} make a sound`; 
	}
}

class Dog extends Animal {
	purr(){
		console.log("woof");
	}
}

class Cat extends Animal {
	bark(){
		console.log("purr");
	}
}
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
