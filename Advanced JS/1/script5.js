// call, apply, bind
// 	Create a function that prints this.name.

function abcd(){
    console.log(this.name);
}

let obj = {
    name:"Deep"
};

abcd.call(obj)