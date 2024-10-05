// Adding a custom method to Object.prototype
Object.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  let a ={ 
    name : "Aditya"
};
  // Using the custom method
  a.sayHello(); // Output: "Hello, my name is Aditya"
  