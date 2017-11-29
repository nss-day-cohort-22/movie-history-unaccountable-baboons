let auth = require("./authenticate")
let firebase = require("firebase")
let $ = require("jquery")

let firebaseURL = "https://movie-history-2debf.firebaseio.com/movies"
let firebaseMovieUsersURL = "https://movie-history-2debf.firebaseio.com/movieusers"

let movieFactory = Object.create(null, {
    "add": {
        value: function (object) {
            return firebase.auth().currentUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}/.json?auth=${idToken}`,
                        "method": "POST",
                        "data": JSON.stringify(object)
                    }).then(function (response) {
                        let movieUsersObject = {
                            "movieId": response.name,
                            "userId": firebase.auth().currentUser.uid,
                            "watched": false,
                            "rating": 0
                        }
                        movieFactory.addMovieUser(movieUsersObject)
                    })
                }).catch(function (error) {
                    console.log("did not post to firebase")
                })
        }
    },
    "addMovieUser": {
        value: function (object) {
            return firebase.auth().currentUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseMovieUsersURL}/.json?auth=${idToken}`,
                        "method": "POST",
                        "data": JSON.stringify(object)
                    })

                })
        }
    }
})

module.exports = movieFactory