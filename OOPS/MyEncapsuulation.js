class Student {
    
    constructor(name , age , number= 9860414246){
        this.name = name;
        let _age = age
        this.number = number;
        this.get_age = function(){
            return _age;
        } ;
        this.set_age = function(age){
            if(age > 0){
                _age = age;
            }
        };
    }

}

let stuud1 = new Student("Aditya" , 43 )
stuud1.set_age(54);

//console.log(stuud1);
console.log(`This is my name ${stuud1.name} and number is ${stuud1.number}`);

console.log(stuud1.get_age());
