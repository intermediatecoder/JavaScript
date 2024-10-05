/*    The this keyword refers to the object that is currently calling or executing the function.
It gives access to the properties and methods of that object within the function. */


const person ={
    name :"Aditya",
    greet : function(){
        return `This is hii from ${this.name}`;
    }
}

console.log(person.greet());