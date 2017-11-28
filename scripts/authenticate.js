const firebase = require("firebase")
const observe = require("./observer")
const $ = require("jquery")
const form = document.getElementById("loginForm")

var config = {
    apiKey: "AIzaSyDw7EnFzuKZ8lGEx5K8hVrOX9m9lUWKLpA",
    authDomain: "personal-site-5cb0d.firebaseapp.com",
    databaseURL: "https://personal-site-5cb0d.firebaseio.com",
    projectId: "personal-site-5cb0d",
    storageBucket: "personal-site-5cb0d.appspot.com",
    messagingSenderId: "352280088091"
}

const auth = Object.create(null, {
    "activeUser": {
        value: null,
        writable: true
    },
    "init": {
        value: function () {
            firebase.initializeApp(config)

            $(".login__submit").on("click", e => {
                // Validate login information
                this.validate(
                    $(".login__email").val(),
                    $(".login__password").val()
                )

                // Clear the form
                form.reset()
            })

            // Set up authentication observer
            observe.init(this)
        }
    },
    "validate": {
        value: function (email, password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    const errorCode = error.code
                    const errorMessage = error.message
                })
        }
    },
    "logout": {
        value: function () {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
            }).catch(function(error) {
                // An error happened.
            });
        }
    }
})

module.exports = auth