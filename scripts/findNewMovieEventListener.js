
const movieSearch = require("./searchMovieData")

//Grab movie button in HTML and add event listener
let movieButton = $(".searchbutton")

const movieListener = function () {
    //Attach click event listener to button
    movieButton[0].addEventListener("click", event => {
        //Get input form from HTML
        const movieInput = document.querySelector("input[name='movietitle']").value
        //Call movieSearch function with input from search bar
        movieSearch(movieInput)
    })
}

module.exports = movieListener