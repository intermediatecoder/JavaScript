class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`${this.name} ${this.age}`)
    }
}

class Middle{
    constructor(Middle){
        this.Middle= Middle;
    }
    shows(){
        console.log(`${this.Middle}`);
        
    }
}


class A extends (person,Middle){
    constructor(name , age , Middle , last){
        super(name, age, Middle);
        this.last = last;
        
        
    }
    show(){
        console.log(`${this.name} ${this.age} ${this.Middle} ${this.last}`)
    }
}



let p3 = new A("Aditya" , 22 , "Nana" ,"Bhadane")



let p1 = new Grad("Aditya",22,"A");
let p2 = new Middle("Aditya" , 22 ,"Nana")
//p2.shows();
//p1.show();


class Grad extends Person{
    constructor(name, age , grade){
        super(name, age);
        this.grade = grade;
    }
    show(){
        //super.show();
        console.log(`${this.name} ${this.age} ${this.grade}`);
        
    }
}
