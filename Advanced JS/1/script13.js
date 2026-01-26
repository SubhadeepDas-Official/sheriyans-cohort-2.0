// Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

function loginUser(username, cb){
    console.log("Login in user...")
    setTimeout(() => {
        cb({user:username})
    }, 1000);
}

function fetchPermissions(userId, cb){
    console.log("Fetching permissions...")
    setTimeout(() => {
        cb(["read","write", "delete"])
    }, 2000);
}

function loadDashboard(permissions, cb){
    console.log("User logged in!")
    setTimeout(() => {
        cb("Dashboard Loaded!✅")
    }, 3000);
}

loginUser("Harsh", function(username){
    fetchPermissions(1, function(permission){
        console.log(permission)
        loadDashboard(permission, function(outputdata){
            console.log(outputdata)
        })
    })
})