let arr = [
    {
        team: 'csk',
        primary: 'yellow',
        secondary: 'blue'
    },
    {
        team: 'kkr',
        primary: 'purple',
        secondary: 'gold'
    },
    {
        team: 'srh',
        primary: 'orange',
        secondary: 'yellow'
    },
    {
        team: 'rcb',
        primary: 'red',
        secondary: 'black'
    },
    {
        team: 'rr',
        primary: 'crimson',
        secondary: 'purple'
    },
    {
        team: 'mi',
        primary: 'royalblue',
        secondary: 'gold'
    },
    {
        team: 'dc',
        primary: 'blue',
        secondary: 'red'
    },
]

let teamName = document.querySelector('h1')
let btn = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click', function(){
    let team = arr[Math.floor(Math.random()*arr.length)]
    teamName.innerHTML = team.team
    teamName.style.backgroundColor = team.primary
    main.style.backgroundColor = team.secondary
})
