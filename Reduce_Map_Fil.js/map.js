// var number = [ 5,6,7,8];

// var double = function (number){
//     return number *2;
// }

// console.log(number.map(double));



//tricky question 


const user =[
    {firstname : "john" , lastname : "wick" , age : 23},
    {firstname : "joh" , lastname : "wic" , age : 23},
];

const fullname = user.map(x =>{
    return x.firstname +
    " "+ x.lastname;
})


console.log(fullname);
