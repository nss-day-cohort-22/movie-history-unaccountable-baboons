const $ = require("jquery")
const firebase = require("firebase")
let auth = require("./authenticate")

let firebaseURL = "https://movie-history-2debf.firebaseio.com/movies"
let firebaseMovieUsersURL = "https://movie-history-2debf.firebaseio.com/movieusers"

const getDataFactory = Object.create(null, {
    "cache": {
        value: null,
        writable: true
    },
    "all": {
        value: function () {
            return firebase.auth().currentUser.getIdToken(true).then(idToken =>{
                return $.ajax({
                    "url": `${firebaseMovieUsersURL}/.json?auth=${idToken}`,
                    "method": "GET"
                }).then(data => {
                    this.cache = Object.keys(data)
                        .map(key => {
                            data[key].id = key
                            return data[key]
                        })
                        debugger
                    console.log(getDataFactory.cache)
                    //return this.cache
                })

            })
        }
    }
})
module.exports = getDataFactory