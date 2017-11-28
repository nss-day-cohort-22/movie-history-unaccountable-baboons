//Required files....
const $ = require("jquery");

const starReview = function() {
   $("span").click(function(){
       $(this).toggleClass("checked");
   });
}

module.exports = starReview;