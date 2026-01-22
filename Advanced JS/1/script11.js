// call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

function showBrand(brand){
    // console.log(brand)
    console.log(this.brand)
}

let obj1 = {
    brand : "h&m",
}

let obj2 = {
    brand : "spark",
}


// let b1 = new showBrand("cultfit")
// let b2 = new showBrand("bearhouse")

let b3 = showBrand.call(obj1);
let b4 = showBrand.call(obj2);