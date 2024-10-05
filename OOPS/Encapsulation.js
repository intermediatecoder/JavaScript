  
class Student  
{  
  constructor(name , marks)  
  {  
     this.name =name;  
     this.marks = marks;  
  }  
      getName()  
      {  
        return this.name;  
      }  
    setName(name)  
    {  
      this.name=name;  
    }  
      
    getMarks()  
    {  
      return this.marks;  
    }  
  setMarks(marks)  
  {  
    this.marks=marks;  
  }  

  }  
  var stud=new Student();  
   stud.setName("John");  
   stud.setMarks(80);  
   console.log(stud.getName()); // outputs: John
    console.log(stud.getMarks())
stud.getName();
