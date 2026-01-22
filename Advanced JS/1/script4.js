// Create a User constructor function (do not use class syntax).
// Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

function User(name){
    this.name = name;
}
    User.prototype.loggedIn = function() {
        console.log("LoggedIn")
    }
let U1 = new User("Subhadeep")

// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.
// ----> if the login method is inside the constructor then the answer will be false because for each new user their identity is unique and hence the login methods of each users are different from each other but if the login method is in shared memory or in the prototype then the answer is true as same login method is shared between all users