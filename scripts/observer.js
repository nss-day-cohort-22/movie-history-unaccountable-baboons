const firebase = require("firebase")
const loginButton = $(".myButton")
const modal = $("#loginModal")
const displayUser = require("./dispUser")
let $ = require("jquery")
let displayMovies = require("./displayMovies")
let displayUserMovies = require("./onLogin/displayUserMovies")

const observer = Object.create(null, {
    "init": {
        value: function (auth) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log("Authenticated")
                    auth.activeUser = user // user is now logged in successfully
                    modal.hide(); //hiding the modal
                    loginButton.hide(); //hiding the login button
                    displayUser();
                    auth.activeUser = user
                    userid = auth.activeUser.uid
                    console.log(userid)
                    displayUserMovies(userid)
                    // nav.init(true)
                    // nav.hideLogin()
                } else {
                    console.log("Not Authenticated")
                    // nav.init(false)
                    auth.activeUser = null
                }
            })
        }
    }
})

  module.exports = observer