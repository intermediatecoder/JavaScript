function ForCount(){
let count =0;
 
document.getElementById("clickme").addEventListener("click" , function xyz(){
    console.log("Button Clicked" , ++count);
    
});
}


ForCount();

