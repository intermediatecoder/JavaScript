// //Function Declaration
// function add(a,b){
//     return a+b;
//  }
//  console.log(add(5,6))


//  //Function Expression
// let sub = function(a,b){
//     return a-b;
// }
// console.log(sub(10,5));


// //closure
// function outer(){
//     let name = "Aditya Bhadane";
//     function inner(){
//         return name;
//     }
//    return inner();
// }
// console.log(outer());


// //Arrow Function
// let multi = (a,b) =>{
//     return a*b;
// }
// console.log(multi(4,4))

// //Constructor Function
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
//  let p1 = new Person("Aditya" , 22);
 
//  console.log(p1.name, p1.age);


 //CallBack Function

 function Callback(call){
    console.log(call())
 }

 function call(){
    return "Hii I am from callback Functin"
 }
Callback(call);

//Anonymous function
setTimeout(function(){
    console.log("Hello anonmyous ")
},1000);


 