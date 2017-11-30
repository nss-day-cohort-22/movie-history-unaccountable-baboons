const db = require("./displayMovies")
const displayUserMovies = require("./onLogin/displayUserMovies")
let searchMovieBtn = $(".searchMovieBtn")
//filter through saved movies based on user input
const searchSaved = function () {
    searchMovieBtn.addEventListener("click", event => {
        document.querySelector("input[name='trackedMovieFilter']").addEventListener(
            "keyup",
            event => {
                if (event.target.value.length >= 3) {
                    // Get lower case version of user input
                    const userInput = event.target.value

                    const moviesArray = db.all().then(movies => {
                        let filterMovies = $.grep(movies, function (res) {
                            return res.title === filteredMovies
                        })
                    })
                    //display filtered movies
                    let $movieHTML = $("<article></article>").html(`${movie.title}<br> <img src=${movie.image}><button id=${movie.id} type="button" class="watch">I've watched this</button>`);
                    $(".tracked__card").append($movieHTML);
                } else {
                    displayUserMovies()
                }
            })
    })
}
module.exports = searchSaved