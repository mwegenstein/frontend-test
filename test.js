
// Make a new link called "Blue" in the nav that, on hover, turns all the links on the page blue except for the "Blue" link.

$(document).ready(function(){
  $('.blue-trigger').on("hover", function(){
  	$("a").not(this).addClass("blue");
  });
});

