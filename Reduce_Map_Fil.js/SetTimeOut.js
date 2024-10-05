// console.log("Fetching data...");

// function fetchData() {
//     setTimeout(function () {
//         console.log("Data fetched successfully!");
//         processData();
//     }, 2000); // Simulating a 2-second delay for data fetching
// }

// function processData() {
//     console.log("Processing data...");
//     setTimeout(function () {
//         console.log("Data processed!");
//     }, 1500); // Simulating data processing after fetching
// }

// fetchData();


let time =  setTimeout(function(){
    console.log("Fetching Data");
    
},1000);

clearTimeout(time);



var a = setInterval(()=>{
    console.log("Hello World");
    
},1000);

console.log(a);

var c = setTimeout(()=>{
    console.log("Hello rld")
},1000);

clearTimeout(c);


setTimeout(()=>{
    clearInterval(a)
},5000)

