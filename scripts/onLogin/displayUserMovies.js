//author Ray //this module will use info pulled from the database and display it on the DOM for the current user

const $ = require("jquery")
const firebase = require("firebase")
const db = require("../displayMovies")
const auth = require("../authenticate")


let displayUserMovies = function(user){
    //grab all movies from the database
    db.all().then(movies => {
        //filter movies for current user
        let userMovies = $.grep(movies, function(item) {
            return item.userId === user
        })
        //write all of the users movies to the dom
        userMovies.forEach(movie => {
            let $movieHTML = $("<article></article>").html(`${movie.title}<br> <img src=${movie.image}><button id=${movie.id} type="button" class="watch">I've watched this</button>`);
            $(".tracked__card").append($movieHTML);
        })

    })
}
module.exports = displayUserMovies