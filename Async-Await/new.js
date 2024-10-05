

const p1 = new Promise((resolve , reject) => {

});


// async function Handle() {

    
// }

async function Exceaute()  {
    try {
        const a = Math.random()*10;
        if(a >5){
    
        conole.log(a + "  Slove the Question");
       }
       else{
        console.log(a +  "   Failed the Nuber");
       }
        
    } 
    catch (error) {
    console.log(error);
    }
}

Exceaute();