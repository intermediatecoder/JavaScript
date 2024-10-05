let a = [43,5,67,4,2,4,5,6,7,423,43,45,654,76];
let b = [];

for ( let  i = 0 ; i<a.length ; i++){
    if(!b.includes(a[i])){
        b.push(a[i]);


    }
    else{
        console.log("Nothing ");
    }

}


console.log(b);

