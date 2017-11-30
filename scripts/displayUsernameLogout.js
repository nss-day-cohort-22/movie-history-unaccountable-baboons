
const firebase = require("firebase")
const auth = require("./authenticate")
const userEl = document.getElementsByClassName("loggedIn")[0];
let user = auth.activeuser
console.log("Deanna - Display", user)
// console.log(firebase.auth().currentUser)

const dispUser = function(user){
console.log(user.email)
    userEl.innerHTML =
    `
    <span>Welcome ${user.email} </span>
    <a href="#">Logout</a>
    `;
}

module.exports = dispUser