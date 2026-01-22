// Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

class Student{
    constructor(name, rollNo){
        this.name = name;
        this.rollNo = rollNo;
        this.details = function(){
            return name +" - "+rollNo;
        }
    }
}
let Student1 = new Student("Raj",37)
let Student2 = new Student("Rakesh",57)