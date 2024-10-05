/* When we write a function inside another function, it creates what is known as a closure.
Closures allow the inner function to access variables from the outer function, even after the outer function has finished executing.
This works because of lexical scope. In lexical scope, if a variable is not found in the inner function's local scope, JavaScript
looks for it in the outer function's scope, continuing up the scope chain until it finds the variable or reaches the global scope.*/


function name(){
    let a = "Aditya Bhadane";
    function inner(){
        console.log(a);
        
    }
    inner();
}                                                                                                                       
name()
