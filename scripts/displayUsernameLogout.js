
const firebase = require("firebase")
const auth = require("./authenticate")
const userEl = document.getElementById("username");
let user = auth.activeuser
console.log("Deanna - Display", user)
// console.log(firebase.auth().currentUser)

const dispUser = function(user){
console.log(user.email)
    userEl.innerHTML =
    `
    <span>Welcome ${user.email}
    </span>
    `;
}

module.exports = dispUser