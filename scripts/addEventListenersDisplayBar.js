//author Ray //This module adds eventlisteners to the Display Watched / Display Unwatched Movies bar
//const firebase = require("firebase")
const displayUserMovies = require("./onLogin/displayUserMovies")

const addEventListenersDisplayBar = function(userid){
    //add event listeners to the buttons
    $("#watchedDisplay").on("click", e => {
        $(".tracked__card").empty()
        displayUserMovies(userid, true)
        console.log("weve clicked on watched")
    })
    $("#unwatchedDisplay").on("click", e => {
        $(".tracked__card").empty()
        displayUserMovies(userid, false)
        console.log("weve clicked on unwatched")
    })



}
module.exports = addEventListenersDisplayBar