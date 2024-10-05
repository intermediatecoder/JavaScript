
const user =[
    {firstname : "john" ,lastname : "wick" , age : 23},
    {firstname : "joh" , lastname : "wic" , age : 23},
    {firstname : "joh" , lastname : "wic" , age : 25},
    {firstname : "joh" , lastname : "wic" , age : 27}
];


const output = user.reduce(function(acc, curr){

if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
}
else{
    acc[curr.age] = 1;
}
return acc;

},{ });

console.log(
    output
);

