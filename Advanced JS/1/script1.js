// Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
    name:"cap",
    price:3500,
    discountedPrice : function(){
        return this.price - 200;
    },
};
console.log(product.discountedPrice())