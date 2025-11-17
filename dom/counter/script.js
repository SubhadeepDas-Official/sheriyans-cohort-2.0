let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let h = document.querySelector('h1')
let count = 0;

inc.addEventListener('click', function(){
    count++;
    h.innerHTML = count;
})
dec.addEventListener('click', function(){
    count--;
    h.innerHTML = count;
})