const firebase = require("firebase")
let $ = require("jquery")
const loginButton = $(".myButton")
const modal = $("#loginModal")
const displayUser = require("./displayUsernameLogout")
let displayMovies = require("./displayMovies")
let displayUserMovies = require("./onLogin/displayUserMovies")

const observer = Object.create(null, {
    "init": {
        value: function (auth) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log("Authenticated")
                    auth.activeUser = user // user is now logged in successfully
                    auth.activeUser = user
                    userid = auth.activeUser.uid
                    console.log(userid)
                    modal.hide(); //hiding the modal
                    displayUser(user); //calls the module to display the username
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