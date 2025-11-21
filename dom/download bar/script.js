let btn = document.querySelector('button')
let h = document.querySelector('h2')
let inner = document.querySelector('#inner')
let info = document.querySelector('h3')

let count = 0;
btn.addEventListener('click', function(){
    let num = 50+Math.floor(Math.random()*50)
    btn.style.pointerEvents = 'none'
    info.innerHTML = `Your download will take ${num/10} seconds`
    
    let int = setInterval(() => {
        console.log(count++);
        inner.style.width = count+'%'
        h.innerHTML = count+'%'
    }, num);
    
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.backgroundColor = 'green'
    }, num*100);
})