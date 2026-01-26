// Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

function getUser(username, cb){
    console.log("Fetching userdata...")
    setTimeout(() => {
        cb({username:username});
    }, 1000);
}
function getUserPosts(id ,cb){
    console.log("Fetching all posts...")
    setTimeout(() => {
        cb(["a","b","c"]);
    }, 2000);
}

getUser("Harsh", function(user){
    getUserPosts(1, function(allPosts){
        console.log(user.username, allPosts)
    })
})
