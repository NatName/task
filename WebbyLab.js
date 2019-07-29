//////////////
/////ES6/////
/////////////
class Animal {
	constructor(name) {
		this.name = name;
	}
	getName () {
		return this.name;
	}
}

class Dog extends Animal {
	bark() {
		return `Dog ${this.name} is barking`;
	}
}

//////////////
/////ES5/////
/////////////
function Animal(name) {
	this.name = name;
}

Animal.prototype.getName = function() {
	return this.name;
};

function Dog(name) {
	Animal.call(this, name);
}

Dog.prototype = Object.create( Animal.prototype );

Dog.prototype.bark = function() {
	return "Dog " + this.getName() + " is barking";
};
