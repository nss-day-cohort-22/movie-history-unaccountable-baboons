
//Required files...
const $ = require("jquery");
const auth = require("./authenticate")
const starReview = require("./starEvent/toggleStarCheck");
const movieListener = require("./findNewMovieEventListener")
const movieSearch = require("./searchMovieData")
const loginModal = require("./userLoginModal")



// Required functions...

auth.init()
movieListener();
starReview()
loginModal()

