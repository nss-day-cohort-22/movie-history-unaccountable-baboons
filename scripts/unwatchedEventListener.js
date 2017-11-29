const movieFactory = require("./postMovieFirebase")

//Grab movie button in HTML and add event listener
const unwatchedListener = function (movie) {
    let unwatchedButton = $(`#${movie.id}`)
    console.log(unwatchedButton)
    //Attach click event listener to button
    unwatchedButton.on("click", event => {
        console.log("YOU CLICKED!")
        console.log(event)
        const MovieDB = require("moviedb")("5d0e08b5bfd8f7dbf4b204c7d7d5b14c");
        let movieIdSearch = function (event) {
            MovieDB.movieInfo({ id: event.target.id }, (err, res) => {
                console.log(res, "Movie id")
                //Put data from click event into new object containing movie information
                    let unwatchedMovieObject = {
                        "title": res.title,
                        "year": res.release_date,
                        "image": `https://image.tmdb.org/t/p/w185${res.poster_path}`,
                    }
                    movieFactory.add(unwatchedMovieObject)
            })
        }
        movieIdSearch(event)
    })
}

//When user clicks on Add Movie to List.
//Push data from displayed movie into tracked/unwatched list.

module.exports = unwatchedListener