class Name{
    constructor(firstname ){
        this.firstname = firstname;
       // this.middlename = middlename;        
    }
    // show(){
    //     console.log(`Thsi is my Firstname ${this.firstname} this is my middlename ${this.middlename}`);
        
    // }
}
class middlename extends Name{
    constructor(firstname, middlename){
        super(firstname);
        this.middlename = middlename;
    }
}

class lastname extends middlename{
    constructor(firstname,middlename,lastname){
        super(firstname, middlename)
        this.lastname = lastname;
    }
    show(){
        console.log(`Thsi is my Firstname ${this.firstname} this is my middlename ${this.middlename} thsi is my lastname ${this.lastname} `);

    }
}

const Fullname = new lastname("Aditya ", "nana","Bhadane" );
Fullname.show();



class gradutaion extends lastname{
    constructor(firstname, middlename , lastname , gradutaion){
        super(firstname, middlename , lastname)
        this.gradutaion = gradutaion
    }
    show(){
        console.log(`${this.firstname} ${this.middlename} ${this.lastname} ${this.gradutaion}`)
    }
}


let student = new gradutaion("Aditya " ,"Nana" ,"Bhadane" , 2024)
student.show()

class me{
    constructor(name){
        this.name = name;
    }
    show(){
        console.log(`${this.name}`);
        
    }
}

let sa = new me ("jhsd")
sa.show()