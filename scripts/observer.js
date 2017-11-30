const firebase = require("firebase")
let $ = require("jquery")
let displayMovies = require("./displayMovies")
let displayUserMovies = require("./onLogin/displayUserMovies")
let addEventListenersDisplayBar = require("./addEventListenersDisplayBar")

const observer = Object.create(null, {
    "init": {
        value: function (auth) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log("Authenticated")
                    auth.activeUser = user
                    userid = auth.activeUser.uid
                    console.log(userid)
                    displayUserMovies(userid,false)
                    debugger
                    addEventListenersDisplayBar(userid)
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