const firebase = require("firebase")
let $ = require("jquery")
const db = require("./displayMovies")




let watchedMovieListener = function (movie) {
    //grabbed watched button to attach event listener to
    let watchedButton = $(`#${movie.id}`)
    console.log(watchedButton, "watched button")
    //add on click event to the watched button
    watchedButton.on("click", event => {
        const movieFactory = require("./postMovieFirebase")
        const user = require("./authenticate")
        let movieId = event.target.id
        console.log(user.activeUser)
        let userId = user.activeUser.uid
        //testing to see if it grabs the event of the click.
        //looking for button id that matches movie id of movie that was clicked
        console.log(event, "clicked watch button")
        db.all().then(movies => {
            let userMovies = movies.filter(function(item) {
                return item.userId === userId && item.watched === false
            })
            return userMovies
        }).then(userMovies => {
            let watchedMovie = userMovies.find(movie => {
                return movie.id === movieId
            })
            watchedMovie.watched = true
            movieFactory.updateMovieUser(watchedMovie, watchedMovie.id)
        })

    })
}

module.exports = watchedMovieListener