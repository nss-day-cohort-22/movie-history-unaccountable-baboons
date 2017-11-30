
const $ = require("jquery")
const firebase = require("firebase")
const userEl = document.getElementsByClassName("loggedIn");
let user = firebase.auth().currentUser
console.log(user)
const dispUser = function(){


    userEl.innerHTML =
    `
    <p>Welcome ${user} </p>
    <a href=#>Logout</a>
    `;
}

module.exports = dispUser