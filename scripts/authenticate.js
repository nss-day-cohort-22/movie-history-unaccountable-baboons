const firebase = require("firebase")
const observe = require("./observer")
const $ = require("jquery")
const form = document.getElementById("loginForm")
const email = $(".login__email")
const password = $(".login__password")
const userFactory = require("./database/userfactory")


var config = {
    apiKey: "AIzaSyDOvk0tq_BKiUfsMmjJJdy-Sx5HZzwhgXM",
    authDomain: "movie-history-2debf.firebaseapp.com",
    databaseURL: "https://movie-history-2debf.firebaseio.com",
    projectId: "movie-history-2debf",
    storageBucket: "movie-history-2debf.appspot.com",
    messagingSenderId: "737577620281"
};

const auth = Object.create(null, {
    "activeUser": {
        value: null,
        writable: true
    },
    "init": {
        value: function () {
            firebase.initializeApp(config)
            observe.init(this)
            //click event for login
            $(".login__submit").on("click", e => {
                // Validate login information
                this.validate(
                    email.val(),
                    password.val()
                )
                // Clear the form
                form.reset()
                // start observing
            })
            // //click event for register
            $(".register__submit").on("click", e => {
                //throw error if input fields are blank
                if (email.val() === "" || password.val() === "") {
                    alert("Email and password fields cannot be blank. Please check fields and try again")
                } else {
                    //create user in firebase DB
                    this.createUser(
                        email.val(),
                        password.val()
                    )
                    //observe.init(this)
                    console.log("New user added to database")
                }
                // Clear the form
                form.reset()
            })
            $(".logout").on("click", e => {
                this.logout()
            })
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
                    console.log(errorMessage, "Email or password is invalid")
                })
            console.log("You are signed in")

        }
    },
    "createUser": {
        value: function (email, password) {

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(function(response){
                    let newUser = {
                        "id": response.uid,
                        "email": response.email
                    }
                    userFactory(newUser)
                })
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    // ...
                    console.log(errorMessage)
                })
        }
    },
    "logout": {
        value: function () {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                console.log("You have signed out")
            }).catch(function (error) {
                // An error happened.
            });
        }
    }
})

module.exports = auth