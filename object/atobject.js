class User {
    static userCount = 0; // static property
    name = ""; // instance variable / public property.
  
    constructor(name) {
      User.userCount += 1;
      this.name = name; // set the value of instance variable.
    }
  
    getName() {
      return this.name;
    }
  
    static getUserCount() {
      return User.userCount;
    }
  }


const aditya = new User("Aditya Bhadane");
const atmanand = new User("Atmanand Nagpure");
const random = new User("Random Guy");

aditya.xyzww = 100;

console.log(User.userCount);
console.log(aditya.name);
console.log(random.userCount);