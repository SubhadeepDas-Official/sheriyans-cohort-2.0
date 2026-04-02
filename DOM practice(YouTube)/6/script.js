let inp = document.querySelector("input")
let char = document.querySelector("span")
inp.addEventListener("input",  function(dets){
    let n = 20 - inp.value.length
    char.innerHTML = n
    if(n<0){
        char.style.color = "red"
    }
    else{
        char.style.color = "black"
    }
})