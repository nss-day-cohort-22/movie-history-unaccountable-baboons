const auth = require("./authenticate")
const observe = require("./observer")

const login = document.getElementById("loginBtn")

login.addEventListener("click", (event) => {
//     //verify auth and start observer
    auth.validate()
    observe.init()
})