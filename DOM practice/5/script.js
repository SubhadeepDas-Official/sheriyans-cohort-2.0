let items = document.querySelector("ul")

items.addEventListener("click", function(dets){
    // dets.target.style.textDecoration = "line-through"
    console.log(dets)
    if(dets.target.tagName === "LI"){
        dets.target.classList.toggle("done")
    }
})

