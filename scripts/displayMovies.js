const $ = require("jquery")
const firebase = require("firebase")
let auth = require("./authenticate")

let firebaseURL = "https://movie-history-2debf.firebaseio.com/movies"

const getDataFactory = Object.create(null, {
    "cache": {
        value: null,
        writable: true
    },
    "all": {
        value: function () {
            //perform ajax call on firebase movies key and cache them as an array
            return firebase.auth().currentUser.getIdToken(true).then(idToken =>{
                return $.ajax({
                    "url": `${firebaseURL}/.json?auth=${idToken}`,
                    "method": "GET"
                }).then(movies => {
                    this.cache = Object.keys(movies)
                    .map(key => {
                        movies[key].id = key
                        return movies[key]
                    })
                    return this.cache
                })

            })
        }
    }
})
module.exports = getDataFactory