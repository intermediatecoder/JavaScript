/* 
The new keyword in JavaScript is essential for creating instances of objects. When you use it with a constructor function, 
it initializes a new object with the properties defined in that function.
This allows you to create multiple objects with similar structures and behaviors easily.
*/

function a(name){
    this.name = name;
}

let b = new a("Aditya");
console.log(b);
