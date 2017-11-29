let auth = require("./authenticate")
let firebase = require("firebase")
let $ = require("jquery")

let firebaseURL = "https://movie-history-2debf.firebaseio.com/movies"

let movieFactory = Object.create(null, {
    "add": {
        value: function (object) {
            return firebase.auth().currentUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}/.json?auth=${idToken}`,
                        "method": "POST",
                        "data": JSON.stringify(object)
                    })
            }).catch(function(error) {
                console.log("did not post to firebase")
            })
        }
    }
})

module.exports = movieFactory