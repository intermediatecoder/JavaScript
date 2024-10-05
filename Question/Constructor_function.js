/* A function constructor in JavaScript is a special type of function used to create objects. Before the introduction of ES6 classes,
 function constructors were the primary way to create multiple objects with similar properties and methods.
 With function constructors, we can initialize object properties and methods, similar to what classes do in ES6.

*/

function Fullname(name , middle , lastname){

        this.name = name;
        this.middle = middle;
        this.lastname = lastname;


        //this is option if we want output in string only else normally output came in a object

        // this.getname = function (){
        //     return `${this.name} " " ${this.middle} " "  ${this.lastname}`
        // }
}

let stud1 = new Fullname("Aditya" , "Nana" , "Bhadane");
//console.log(stud1.getname());
 
console.log(stud1);
