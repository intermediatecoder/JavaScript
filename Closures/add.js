let e =10;

function sum(a){
    return function(b){
        return function(c){
            return a+b+c+e;
        }
    };
};


//  console.log(sum((4),(3),(2)));     //The issue with the console.log(sum((4),(3),(2))) call in your code is that sum() is a curried function. It returns a series of functions, each expecting one argument at a time.

console.log(sum(4)(5)(6));
