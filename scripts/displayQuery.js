const unwatchedListener = require("./unwatchedEventListener")

//This page will take the results from the movie search and display them on the page.
const $ = require("jquery")
//Grab movie search results
 let displayQuery = function (res) {
     //console.log(res)
     //loop through restults using forEach loop
    res.results.forEach(function(movie){
        //create article tags to place the displayed material into and display them onto the HTML
        let $movieHTML = $("<article></article>").html(`${movie.title} ${movie.release_date}<br> <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}"><button id=${movie.id} type="button" class="addunwatched">Add Movie to List</button>`);
        $("#moviedisplay").append($movieHTML);
        unwatchedListener(movie)
    })
}

module.exports = displayQuery