//Required files...
const $ = require("jquery")
require("materialize")
const auth = require("./authenticate")
const starReview = require("./starEvent/toggleStarCheck")
const movieListener = require("./findNewMovieEventListener")
const movieSearch = require("./searchMovieData")
const loginModal = require("./userLoginModal")
const unwatchedListener = require("./unwatchedEventListener")
const displaySideNav = require("./displaySideNav")

// Required functions...

auth.init()
movieListener();
starReview()
loginModal()

