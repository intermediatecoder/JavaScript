const MyArr = new Array (1,2,3);
console.log(MyArr);

MyArr.push(4)
console.log(`After push ${MyArr}`)
console.log(MyArr.includes(4));

const NewArr = MyArr.join("-")
console.log(`NEw joined Array : ${NewArr}`);
console.log(typeof NewArr);


// Slice And Splice


const Arr2 = new Array (1,2,3,4,5,6)
console.log(`Actual Arr2 : ${Arr2}`); 

const ArrSlice = console.log(Arr2.slice(0,3));
console.log(`Arr after slice :  ${Arr2}`) // Slice from index 0 to 3

const ArrSplice = console.log(Arr2.splice(0,3));
console.log(`Arr after splice : ${Arr2}`)   // Splice Delete the  elements from the array and return the reamaining number