const mysum = Symbol("key1")
const person = {
    name: "Aditya",
    age: 22,
    [mysum] :"key1",             // main differnce you will see in the output
    mysum : "key1",
    location: "pune"
};
/*
 console.log(person["location"]); // Output: pune

 person.age = 23; // Updating the age
 console.log(person["age"]); // Output: 23

//Object.freeze(person); // Freezing the entire[person] object

person.age = 100; // Trying to update the age after freezing, won't work
console.log(person["age"]); // Output: 23, as freezing prevents modification
 console.log(person);
*/

person.greeting = function(){
    console.log(`Helleo ${this.name}`)
}

console.log(person.greeting())