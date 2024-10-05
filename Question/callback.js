function a(){
    return "Hello World";
    
}

function b (callback){
    console.log(`I am calling a  ${callback()}` );
    //a();
    //console.log(a());
    
}
b(a);