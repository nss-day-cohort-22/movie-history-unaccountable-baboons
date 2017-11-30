const unwatchedListener = require("./unwatchedEventListener")

//This page will take the results from the movie search and display them on the page.

//Grab movie search results
 let displayMovies = function (res) {
     console.log(res)
     //loop through restults using forEach loop
    res.results.forEach(function(movie){

        //create side navigation display card

    $("#moviedisplay").append(`<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://image.tmdb.org/t/p/w185${movie.poster_path}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${movie.title}<i class="material-icons right">more_vert</i></span>
      <p><button id=${movie.id} type="button" class="addunwatched">Add Movie to List</button></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${movie.title}<i class="material-icons right">close</i></span>
      <p>${movie.overview} <br>
      Release Date: ${movie.release_date}</p>
    </div>
  </div>`);

        //Invoke event listener to add unwatched movies to tracked movies
        unwatchedListener(movie)



    })
}

module.exports = displayMovies