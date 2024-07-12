//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get makeSound(){
		return `The ${this.species} makes a sound`; 
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}
const myCat = new Cat("Siamese");
console.log(myCat.makeSound); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
console.log(myDog.makeSound); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woofof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
