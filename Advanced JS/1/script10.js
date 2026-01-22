// Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

function Vehicle(type, wheels){
    this.type = type;
    this.wheels = wheels;
    this.describe = function(){
        console.log(this.type + " has " + this.wheels + " wheels" )
    }
}
let v1 = new Vehicle("Car" ,4 )
let v2 = new Vehicle("Bike" ,2 )

v1.describe()
v2.describe()

console.log(v1.describe === v2.describe)

Vehicle.prototype.describe2 = function(){
    console.log(this.type + " has " + this.wheels + " wheels" )
}

let v3 = new Vehicle("Truck" ,8 )
let v4 = new Vehicle("Bus" ,6 )

v3.describe2()
v4.describe2()

console.log(v3.describe2 === v4.describe2)