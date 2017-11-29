const firebase = require("firebase")

const observer = Object.create(null, {
    "init": {
        value: function (auth) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log("Authenticated")
                    auth.activeUser = user
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