// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating new objects
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

//john.greet(); // Output: Hello, my name is John and I am 30 years old.
//jae.greet(); // Output: Hello, my name is Jane and I am 25 years old.


function Student(name, age, grade) {
    Person.call(this, name, age); // Inherit properties from Person
    this.grade = grade;
}

// Inherit methods from Person's prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add a new method to Student prototype
Student.prototype.study = function() {
    console.log(`${this.name} is studying.`);
};

const student = new Student('Alice', 20, 'A');
student.greet();  // Inherited from Person prototype
student.study();  // Specific to Student prototype

