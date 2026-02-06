fetch(`https://randomuser.me/api/`)
// .then(function(edata){
//     return edata.json();
// })
// .then(function(data){
//     console.log(data.results[0].name)
// })

// OR

.then((raw) => raw.json())
.then((data) => {
    console.log(data.results[0].name.first)
})