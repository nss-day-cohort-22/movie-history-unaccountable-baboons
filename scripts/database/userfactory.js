//author Ray  //this module takes in the current user created and then writes a new user to  a user table
const firebase = require("firebase")
const firebaseURL = "https://movie-history-2debf.firebaseio.com/users"
const userFactory = userObj => {
    return firebase.auth().currentUser.getIdToken(true)
    .then(idToken => {
        return $.ajax({
            "url": `${firebaseURL}/.json?auth=${idToken}`,
            "method": "POST",
            "data": JSON.stringify(userObj)
        })
  }).catch(function(error) {
    notify.log("Error while adding the user, please try again.")
  })
}
module.exports = userFactory