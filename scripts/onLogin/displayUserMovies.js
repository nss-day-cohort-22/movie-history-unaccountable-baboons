//author Ray //this module will use info pulled from the database and display it on the DOM for the current user based on watched or unwatched criteria
const watchedMovieListener = require("../watchedMovieButtonEventListener")
const $ = require("jquery")
const firebase = require("firebase")
const db = require("../displayMovies")
const auth = require("../authenticate")


let displayUserMovies = function(user, boolean = false){
    //grab all movies from the database
    db.all().then(movies => {

        if (boolean === false){
            //filter unwatched movies for current user
            let userMovies = $.grep(movies, function(item) {
                return item.userId === user && item.watched === false
            })
            //write all of the users movies to the dom
            userMovies.forEach(movie => {
                // let $movieHTML = $("<article></article>").html(`${movie.title}<br> <img src=${movie.image}><button id=${movie.id} type="button" class="watch">I've watched this</button>`);
                // $(".tracked__card").append($movieHTML);

               $(".tracked__card").append(`<div class="col s4"><div class="card small">
                   <div class="card-image">
                     <img src=${movie.image}>
                     <span class="card-title"></span>
                   </div>
                   <div class="card-content">
                     <p>${movie.title}<br> 
                     ${movie.year}
                     <div class="rated__card">
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                     </p>
                   </div>
                   <div class="card-action">
                   <button id=${movie.id} type="button" class="watch">Seen It!</button>
                   </div>
                 </div>
                 </div>`)

                watchedMovieListener(movie)
            })

        } else {
            //filter watched movies for current user
            let userMovies = $.grep(movies, function(item) {
                return item.userId === user && item.watched === true
            })
            //write all of the users movies to the dom
            userMovies.forEach(movie => {
                // let $movieHTML = $("<article></article>").html(`${movie.title}<br> <img src=${movie.image}><button id=${movie.id} type="button" class="rateme">RateMe</button>`);
                // $(".tracked__card").append($movieHTML);
                `<div class="col s4"><div class="card small">
                <div class="card-image">
                  <img src=${movie.image}>
                  <span class="card-title"></span>
                </div>
                <div class="card-content">
                  <p>${movie.title}<br> 
                  ${movie.year}
                  <div class="rated__card">
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                 </div>
                  </p>
                </div>
                <div class="card-action">
                <div class="chip">
                <i id ="${movie.id}class="close material-icons">Close Me!</i>
              </div>
                </div>
              </div>
              </div>`
            })

        }


    })
}
module.exports = displayUserMovies