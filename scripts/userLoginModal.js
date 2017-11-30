const $ = require("jquery")


const userLoginModal = function(){

// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
    $(".modal").show();

    })
}

// document.addEventListener("click", function(event){
//     if (event.target === modal){
//         $(".modal").hide();
//     }
// })
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target === window) {
//         modal.style.display = "none";
//     }
// }


module.exports = userLoginModal