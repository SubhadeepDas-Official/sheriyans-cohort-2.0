let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#loginForm")

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let usernameans = usernameRegex.test(username.value)
    let emailans = emailRegex.test(email.value)
    let passwordans = passwordRegex.test(password.value)

    let isValid = true

    if(!usernameans){
        document.querySelector("#userError").style.display = "initial"
        document.querySelector("#userError").textContent = "username is incorrect"
        isValid = false;
    }
    else{
        document.querySelector("#userError").style.display = "none"
    }
    if(!emailans){
        document.querySelector("#emailError").style.display = "initial"
        document.querySelector("#emailError").textContent = "email is incorrect"
        isValid = false;
    }
    else{
        document.querySelector("#emailError").style.display = "none"
    }
    if(!passwordans){
        document.querySelector("#passError").style.display = "initial"
        document.querySelector("#passError").textContent = "password is incorrect"
        isValid = false;
    }
    else{
        document.querySelector("#passError").style.display = "none"
    }

    if(isValid){
        document.querySelector("#message").textContent = "Credentials are correct"
    }
    else{
        document.querySelector("#message").textContent = "Credentials are incorrect"
    }
})
