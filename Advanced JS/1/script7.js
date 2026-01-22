// Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        this.details = function(){
            return name + " - " + salary;
        };
    }
}
let e1 = new Employee("Harsh" , 23000) 
let e2 = new Employee("Raj" , 23500) 
let e3 = new Employee("Taniya" , 43000) 