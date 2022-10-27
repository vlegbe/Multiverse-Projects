const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
    constructor() {
        this.stations = {
            Manhattan: [],
            Brooklyn: [],
            Queens: [],
            Bronx: [],
            StatenIsland: []
        }

        this.registeredUsers = []
        ScooterApp.scooterSessions.push(this)
    }

static scooterSessions = []

//method() for registered user

register(user) {
    if (user === this.registeredUsers) {
        console.log('Already registered!')
    }

    if (user >= 17) {
        console.log('Too young to register!')
    }

    for(let i = 0; i < this.registeredUsers.length; i++){
        if (this.registeredUsers[i].username === User.username) {
        console.log("Error user already registered on the App")
    } 
    else if (User.age <=17) {
        console.log("Too young to register! You must be 18 and over.")
    } else {
        this.registeredUsers.push(User)
        console.log("Registered Successfully")
    }
}

//login check - successful and unsuccessful

logIn(username, password); {
    for (let i = 0; i < this.registeredUsers.length; i++){
    this.user(this.registeredUsers).toBe(true)
}
for (let i = 0; i < this.registeredUsers.length; i++) {
    if((this.registeredUsers.length[i].username === username) && (this.registeredUsers[i].password)===password) {
        this.registeredUsers[i].loggedIn = true
        console.log("Login successful")
    } else {
        console.log('Login Attempt Failed, please try again.')
    }

}
}
}
}