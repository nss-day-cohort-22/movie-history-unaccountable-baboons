const movieFactory = require("./postMovieFirebase")
const getDataFactory = require("./displayMovies")
const firebase = require("firebase")


let $ = require("jquery")


//Grab movie button in HTML and add event listener
const unwatchedListener = function (movie) {
    let unwatchedButton = $(`#${movie.id}`)
    console.log(unwatchedButton)
    //Attach click event listener to button
    unwatchedButton.on("click", event => {
        console.log("YOU CLICKED!")
        console.log(event)
        let unwatchedMovieObject = {
            "title": "",
            "year": "",
            "image": "",
            "actors": "",
            "userId": firebase.auth().currentUser.uid,
            "rating": 0,
            "watched": false
        }
        console.log(unwatchedMovieObject, "da movie object")
        const MovieDB = require("moviedb")("5d0e08b5bfd8f7dbf4b204c7d7d5b14c");
        let movieIdSearch = function (event) {
            MovieDB
            .movieInfo({ id: event.target.id }, (err, mov) => {
                //console.log(res, "Movie id")
                unwatchedMovieObject.title = mov.title
                unwatchedMovieObject.year = mov.release_date
                unwatchedMovieObject.image = `https://image.tmdb.org/t/p/w185${mov.poster_path}`
            })
            .movieCredits ({ id: event.target.id }, (err, res) => {
                let resArray = res.cast
                let slicedArray = resArray.slice(0, 4)
                unwatchedMovieObject.actors = slicedArray
                //Put data from click event into new object containing movie information
                movieFactory.add(unwatchedMovieObject)
            });
        }
        movieIdSearch(event)
        getDataFactory.all()

    })
}

//When user clicks on Add Movie to List.
//Push data from displayed movie into tracked/unwatched list.

module.exports = unwatchedListener