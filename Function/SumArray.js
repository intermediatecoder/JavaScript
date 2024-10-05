function sumArray(arr){
    let sum = 0;
    for (let i =0 ; i<arr.length ; i++){
        sum += arr[i];
    }
    return sum;

}

const number = [2,3,4,5];
console.log(sumArray(number));

  

//ArrowFunction 

const AreaofCircle = (radius) => {
    let area = Math.PI * radius*radius;
    return area;
}

console.log(AreaofCircle(6));




//...

const Sumall = (...args) =>{
    let sum = 0;
    for(let i =0 ; i<args.length ; i++){
        sum += args[i];
    }
    return sum;
    
}

console.log(Sumall(3,4,5));


for (var i =0 ; i<5 ; i++){ //var doesn't have a block scope that;s why 5 5 5 5 
    // If we write a let then we get 0 1 2 3 4
    setTimeout(function(){
        console.log(i);
        
    }, i*1000);
}

