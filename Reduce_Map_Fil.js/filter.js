const user = [
    { firstname: "john", lastname: "wick", age: 23 },
    { firstname: "joh", lastname: "wic", age: 23 },
    { firstname: "joh", lastname: "wic", age: 25 },
    { firstname: "joh", lastname: "wic", age: 27 }
  ];
  
  const output = user.filter(x => x.age > 23);
  
  console.log(output);


/*
const user =[
    {firstname : "john" ,lastname : "wick" , age : 23},
    {firstname : "joh" , lastname : "wic" , age : 23},
    {firstname : "joh" , lastname : "wic" , age : 25},
    {firstname : "joh" , lastname : "wic" , age : 27}
];


const output = user.filter((x)=>x.age>23).map((x) => x.firstname);

console.log(output);
*/