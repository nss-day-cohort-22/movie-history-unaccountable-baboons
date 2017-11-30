const firebase = require("firebase")
let $ = require("jquery")
const movieFactory = require("./postMovieFirebase")


let watchedMovieListener = function (movie) {
    let watchedButton = $(`#${movie.id}`)
    watchedButton.on("click", event => {
        console.log(event, "clicked watch button")
    })
}

module.exports = watchedMovieListener