const auth = require("./authenticate")
const observe = require("./observer")
const register = document.getElementById("registerBtn")

const createUser = (email, password) => {
    //throw error if input fields are blank
    if (email === "" || password === "") {
        alert("Email and password fields cannot be blank. Please check fields and try again")
    } else {
        //create user in firebase DB
        auth.validate()
        observe.init()
    }
}

login.addEventListener("click", (event) => {
    //add user to database and start observer
    createUser()
})