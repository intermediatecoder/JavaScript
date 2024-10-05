const obj1 ={1 : "a" , 2 : "b"}
const obj2 ={3 : "a" , 4 : "b"}
//const obj3 = Object.assign(obj1 , obj2)
//const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
//console.log(obj3);


const TinderUser = {}
TinderUser.id = "123"
TinderUser.name = "Aditya Bhadane"
TinderUser.age= 21
const User  = [
    {
        name : "Aditya",
        adge : 22
    },
    {
        name : "Aditya",
        adge : 22
    },
    {
        name : "Aditya",
        adge : 22
    },
       {
        name : "Aditya",
        adge : 22
    }
]

User[1].email
// console.log(TinderUser);
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));
console.log(Object.keys(User));
// console.log(TinderUser.hasOwnProperty("name"));