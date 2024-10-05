const AdiName = ["Aditya", "Nana", "Bhadane"];
const PriName = ["Priyanka", "Sanjay", "Mutkule"];

// Push PriName array as a single element into AdiName
const Mpush = AdiName.push(PriName);
console.log(`New length after push: ${Mpush}`);
console.log(`AdiName after push: ${JSON.stringify(AdiName)}`);

// Pop the last element from AdiName
const Mpop = AdiName.pop();
console.log(`Element popped: ${JSON.stringify(Mpop)}`);
console.log(`AdiName after pop: ${JSON.stringify(AdiName)}`);
