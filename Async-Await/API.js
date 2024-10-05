const API = "https://api.github.com/users/intermediatecoder";

const handle = async () => {
    try {
        const data =await  fetch(API);
        const use = await data.json();
        console.log(use);
        
    } catch (error) {
        console.log(error);
            
    }
   
    
}


handle();
