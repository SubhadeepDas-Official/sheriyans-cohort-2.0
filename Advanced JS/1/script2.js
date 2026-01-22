// Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

class Car{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
        this.drive = function(){
            return this.brand + " - " + this.speed;
        }
    }
}
let Car1 = new Car("BMW", "200mph")
let Car2 = new Car("Maruti", "140mph")