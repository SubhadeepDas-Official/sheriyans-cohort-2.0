let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let main = document.querySelector("main")

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    // console.log(inputs[0].files[0])
    
    let card = document.createElement("div")
    card.classList.add("card")
    let name = document.createElement("h2")
    let age = document.createElement("h3")
    let email = document.createElement("h6")
    email.classList.add("h6")
    let image = document.createElement("img")
    image.classList.add("img")

    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(age)
    card.appendChild(email)
    main.appendChild(card)

    
    const selectedFile = inputs[0].files[0];
    const fileURL = URL.createObjectURL(selectedFile);

    image.setAttribute("src", fileURL)
    name.textContent = inputs[1].value
    age.textContent = inputs[2].value
    email.textContent = inputs[3].value
})