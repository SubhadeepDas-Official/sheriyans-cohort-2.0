let n = +prompt("enter number");
if(n%2 === 0){
    console.log("stopped");
}
while(n%2!== 0){
    n = +prompt("enter number");
    if(n%2 === 0){
        console.log("stopped");
    }
}