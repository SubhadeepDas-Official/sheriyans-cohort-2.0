let btn = document.querySelector('button')
let main = document.querySelector('main')
let arr = ['Be yourself; everyone else is already taken', 'So many books, so little time', 'A room without books is like a body without a soul', 'You only live once, but if you do it right, once is enough', 'Be the change that you wish to see in the world', 'If you tell the truth, you do not have to remember anything','A friend is someone who knows all about you and still loves you']

btn.addEventListener('click', function(){
    let a = arr[Math.floor(Math.random()*arr.length)]

    let x = Math.random()*100
    let y = Math.random()*100
    let rt = Math.random()*180
    let r = Math.random()*256
    let g = Math.random()*256
    let b = Math.random()*256
    let sc = Math.random()*3

    let h1 = document.createElement('h1')
    h1.style.color = 'white'
    h1.style.position = 'absolute'
    h1.style.color = `rgb(${r},${g},${b})`
    h1.innerHTML = a

    h1.style.top = x+'%'
    h1.style.left = y+'%'
    h1.style.scale = sc
    h1.style.rotate = rt+'deg'


    main.appendChild(h1)
    
})