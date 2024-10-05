var number = [3,4,5,2];

// const max = function (max){
//     let m = 0;
//     for(let i =0 ; i<number.length ;i++){
//         if(number[i]>m){
//             m = number[i];
//         }
//     }
//     return m;
// }

// console.log(max(number));

const output = number.reduce(function(max, curr){
if(curr > max){
    max = curr;
    
}
return max;
},0);
console.log(output);
