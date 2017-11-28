//This page will take the results from the movie search and display them on the page.
//Grab movie search results
 let displayMovies = function (res) {
     console.log(res)
    res.results.forEach(function(movie){
        let $movieHTML = $("<article></article>").html(`${movie.title} ${movie.release_date}<br> <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}">`);
        $("#moviedisplay").append($movieHTML);
    })
}

module.exports = displayMovies