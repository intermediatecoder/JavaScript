// function Person(first , last,age){
//     this.first = first;
//     this.last = last;
//     this.age = age;
// }

// const Myfather = new Person("Nana", "Bhadane", 54);

// console.log(`my Father name is ${Myfather.first} ${Myfather.last} and age ${Myfather.age}`);


const person ={
    name :"Aditya",
    gradutaion : "B.Tech",
    age : 20,
    Fullname :function(sur){
        return this.name + " " + sur;
    },
    
};

 console.log(
  person.Fullname("Bhadane"));