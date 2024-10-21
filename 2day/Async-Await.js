const Add = (num1 ,num2) =>{
    return new Promise((resolve , reject)=>{
        resolve(num1 +num2)

        reject("Error")
    })
}



const a = async (a,b)=>{
    try{
        const result = await Add(a,b)
        console.log(result);
        
    }
    catch{
        console.error(error);
    }
};

a(5,6,)
