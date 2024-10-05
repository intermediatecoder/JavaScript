const AdiName = ["Aditya", "Nana", "Bhadane" ]
const PriName = ["Priyanka", "Sanjay", "Mutkule"]


// const Mpush = AdiName.push(PriName)
// console.log(`Mpush : ${Mpush}`);
// const Mpop = AdiName.pop(PriName)
// console.log(`Mpop : ${Mpop}`);
// console.log(AdiName);

//  const Mconcat = AdiName.concat(PriName)
//  console.log("Mconcat : " , Mconcat);

//Alternative for  concat

//  const FNAme = [...AdiName, ...PriName]    // Advantage of this dot Method is We can concat more than 2 array at a time .

//  console.log("FName" ,  FNAme); 

// For sloving in depth array problem

//  const InDepthArray =[1,2,3[4,5[3,5]] ,6]
//  const SloveArray = InDepthArray.flat(Infinity)
//  console.log(SloveArray); 

//Another Method
 
 const InDepthArray = [1, 2, 3, [4, 5, [3, 5]], 6];

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

const SolvArray = flattenArray(InDepthArray);
console.log(SolvArray);

