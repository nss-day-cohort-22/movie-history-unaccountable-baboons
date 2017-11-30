const db = require("./displayMovies")
const displayUserMovies = require("./onLogin/displayUserMovies")
let searchMovieBtn = $(".searchMovieBtn")
//filter through saved movies based on user input
const searchSaved = function () {
    searchMovieBtn.on("click", event => {
        //show search input
        $(".searchSavedInput").show()
    })
    $(".searchSavedInput").keyup(function () {
        $(".tracked__card").html("")
        const userInput = event.target.value.toLowerCase()
        console.log(userInput)
        if (event.target.value.length >= 3) {
            // Get user input
            console.log("if....")
            const moviesArray = db.all().then(movies => {
                let filteredMovies = movies.filter( function (res) {
                    return res.title.toLowerCase().includes(userInput)
                })

                return filteredMovies
            }).then(filteredMovies => {
                //display filtered movies
                filteredMovies.forEach(movie => {
                    let movieHTML = $("<article></article>").html(`${movie.title}<br> <img src=${movie.image}><button id=${movie.id} type="button" class="watch">I've watched this</button>`);
                    $(".tracked__card").append(movieHTML);
                })
            })
        } else {
            displayUserMovies()
        }
    })
}
module.exports = searchSaved