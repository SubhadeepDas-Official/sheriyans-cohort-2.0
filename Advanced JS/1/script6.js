// Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

let laptop = {
    brand : "HP",
    price : 23000,
    start : function(){
        console.log("Laptop Started");
    },
    priceIncreased : function(){
        console.log(this.price + 2000)
    }
}
laptop.start();
laptop.priceIncreased();