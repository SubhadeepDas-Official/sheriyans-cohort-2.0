let slt = document.querySelector("select")
let h3 = document.querySelector("h3")
slt.addEventListener("change", function(data){
    h3.textContent = `${data.target.value} device is selected`
    console.log(data.target.value)
})