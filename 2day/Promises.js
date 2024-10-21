// let promise = new Promise((resolve , reject) =>{
//     const suc = true;
//     if(suc){
//         resolve("PRomise Resoled ")
//     }
//     else{
//         reject ("Prmoise Reject")
//     }
// })

// promise
// .then((message)=>{
//     console.log(message);
    
// })

// .catch((error)=>{
//     console.log(erroe);
    
// })


// //Add two Number


// const Add= ((num1, num2) =>{
//     return new Promise((resolve , reject)=>{
//         if(typeof num1 ==="number" && typeof num2 === "number"){
//         resolve(num1+num2)
//         }
//         else{}
//         reject("Not solved")
//     } )
// })

// Add(5,"7")
// .then((Sum)=>{
//     console.log(Sum);
    
// })

// .catch((error)=>{
//     console.log(error);
    
// })


//SetTime Out 

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
  
      if (success) {
        resolve("Operation completed successfully!"); 
      } else {
        reject("Operation failed."); 
      }
    }, 2000); 
});
  
  console.log("Promise created. Current state: Pending.");
  
  myPromise
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.log(error); 
    });
  