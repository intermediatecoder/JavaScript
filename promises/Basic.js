// var cart = ["shoe" , "bag" , "books"];

// CratOrder(cart , function(OrderId){
//     Procced(OrderId)
// });

// let promise = CratOrder(cart);
// console.log(promise);




// promise.then(function(OrderId){
//     Procced(OrderId)
// });



const API = "https://api.github.com/users/akshaymarch7"

const user = fetch(API);    
console.log(user);



user.then(function(data){
    console.log(data.json);
});