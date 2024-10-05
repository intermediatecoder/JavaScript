/* In JavaScript, a Set is a collection that stores only unique values, meaning it automatically removes any duplicate entries. This is useful when you want to ensure that your data contains no duplicates */



let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Duplicate, will be ignored

console.log(mySet.size); // Output: 2
console.log(mySet.has(1)); // true
