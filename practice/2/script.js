let h1 = document.querySelector("h1")

document.addEventListener("keydown", function(key){
    h1.textContent = key.code
    console.log(key)
})