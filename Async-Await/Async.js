

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Promise is valid ");
//     },1000);
//    // resolve("Promise is valid2 ");
// });

async function p1(){
    setTimeout(() => {
    try {
        console.log("Promise is valid");
        
    } catch (error) {
        console.log("Error");
        
    }    
    },1000 );
}


async function handle(){
   const val = await p1() ;
    console.log(val);
    
}

console.log("Before call");


handle();


console.log("After call");




// async function getname() {
    
//     return p;
    
// }

// const dataPromise = getname();

// dataPromise.then((res) => {
//     console.log(res);
    
// });