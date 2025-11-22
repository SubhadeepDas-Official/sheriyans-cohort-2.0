let cursor = document.querySelector('#cursor')
let main = document.querySelector('#main')

main.addEventListener('mousemove', function(det){
    cursor.style.left = det.x + 'px'
    cursor.style.top = det.y + 'px'
    
})