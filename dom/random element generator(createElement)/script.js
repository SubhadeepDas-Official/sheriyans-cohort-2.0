let main = document.querySelector('main')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let div = document.createElement('div')

    let x = Math.random()*100
    let y = Math.random()*100
    let rt = Math.random()*100
    let s = Math.random()*3
    let r = Math.random()*256
    let g = Math.random()*256
    let b = Math.random()*256

    div.style.height = '100px'
    div.style.width = '100px'
    div.style.position = 'absolute'
    div.style.top = x+'%'
    div.style.left = y+'%'
    div.style.rotate = rt+'deg'
    div.style.scale = s
    div.style.backgroundColor = `rgb(${r},${g},${b})`

    main.appendChild(div)
    
})