const displayMovie = require("./displayMovie")


const MovieDB = require("moviedb")("5d0e08b5bfd8f7dbf4b204c7d7d5b14c");
let movieSearch = function (searchText) {
    MovieDB.searchMovie({ query: searchText }, (err, res) => {
        console.log(res)
        displayMovie(res)

    })
}

module.exports = movieSearch