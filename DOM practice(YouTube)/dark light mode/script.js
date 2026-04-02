function setDarkLight(){
    if(window.matchMedia("(prefers-color-scheme : dark)").matches){
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }
    else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
}

const savedTheme = localStorage.getItem("theme")

if(savedTheme){
    document.body.classList.remove("dark","light")
    document.body.classList.add(savedTheme)
}
else{
    setDarkLight()
}

window.matchMedia("(prefers-color-scheme : dark)").addEventListener("change", function(){
    if(!localStorage.getItem("theme")){
        
        setDarkLight()
    }
})


document.querySelector("#toggleBtn").addEventListener("click", function(){
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        
        localStorage.setItem("theme" , "light")
    }
    else{
        document.body.classList.add("dark")
        document.body.classList.remove("light")
        
        localStorage.setItem("theme" , "dark")
    }
})


