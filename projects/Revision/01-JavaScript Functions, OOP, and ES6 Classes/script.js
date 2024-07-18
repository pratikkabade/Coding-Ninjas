// JavaScript Functions
function greet(name) {
    return `Hello, ${name}!`;
}

document.getElementById('functionButton').addEventListener('click', () => {
    const output = greet('World');
    document.getElementById('functionOutput').innerText = output;
});

// Object-Oriented Programming (OOP) in JavaScript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

document.getElementById('oopButton').addEventListener('click', () => {
    const person = new Person('Alice', 30);
    document.getElementById('oopOutput').innerText = person.greet();
});

// ES6 Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        return `${this.name} says hello!`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    bark() {
        return `${this.name} the ${this.breed} barks!`;
    }
}

document.getElementById('classButton').addEventListener('click', () => {
    const dog = new Dog('Buddy', 'Golden Retriever');
    document.getElementById('classOutput').innerText = `${dog.speak()} ${dog.bark()}`;
});