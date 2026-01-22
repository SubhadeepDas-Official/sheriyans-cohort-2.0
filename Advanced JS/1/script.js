// Create a user object that stores name and email and has a login method which prints “User logged in”.
// Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    loggedIn(){
        console.log("loggedIn")
    }
}

let User1 = new User("deep", "deep@email.com")
let User2 = new User("deep", "deep@email.com")
let User3 = new User("deep", "deep@email.com")
let User4 = new User("deep", "deep@email.com")