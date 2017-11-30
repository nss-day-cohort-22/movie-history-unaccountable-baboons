//author Ray //this module will use info pulled from the database and display it on the DOM for the current user based on watched or unwatched criteria
const watchedMovieListener = require("../watchedMovieButtonEventListener")
const $ = require("jquery")
const firebase = require("firebase")
const db = require("../displayMovies")
const auth = require("../authenticate")


let displayUserMovies = function(user, boolean = false){
    //grab all movies from the database
    db.all().then(movies => {

        if (boolean === false){
            //filter unwatched movies for current user
            let userMovies = $.grep(movies, function(item) {
                return item.userId === user && item.watched === false
            })
            //write all of the users movies to the dom
            userMovies.forEach(movie => {
                let $movieHTML = $("<article></article>").html(`${movie.title}<br> <img src=${movie.image}><button id=${movie.id} type="button" class="watch">I've watched this</button>`);
                $(".tracked__card").append($movieHTML);
                watchedMovieListener(movie)
            })

        } else {
            //filter watched movies for current user
            let userMovies = $.grep(movies, function(item) {
                return item.userId === user && item.watched === true
            })
            //write all of the users movies to the dom
            userMovies.forEach(movie => {
                let $movieHTML = $("<article></article>").html(`${movie.title}<br> <img src=${movie.image}><button id=${movie.id} type="button" class="rateme">RateMe</button>`);
                $(".tracked__card").append($movieHTML);
            })

        }


    })
}
module.exports = displayUserMovies