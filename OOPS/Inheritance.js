class Name{
    constructor(firstname , middlename){
        this.firstname = firstname;
        this.middlename = middlename;        
    }
    // show(){
    //     console.log(`Thsi is my Firstname ${this.firstname} this is my middlename ${this.middlename}`);
        
    // }
}

class lastname extends Name{
    constructor(firstname,middlename,lastname){
        super(firstname,middlename);
        this.lastname = lastname;
    }
    show(){
        console.log(`Thsi is my Firstname ${this.firstname} this is my middlename ${this.middlename} thsi is my lastname ${this.lastname} `);

    }
}

const Fullname = new lastname("Aditya ", "nana","Bhadane" );
Fullname.show();