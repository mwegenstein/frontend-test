

// Make a new link called "Blue" in the nav that, on hover, turns all the links on the page blue except for the "Blue" link.

$(document).ready(function(){
  $('.blue-trigger').on("hover", function(event){
  	// Prevent default browser action for a hover click
  	 event.preventDefault()
  	$("a").not(this).addClass("blue");
  });
});


// Make a new link called "Sidebar" in the nav that hides and shows the sidebar 3 seconds after you click on it. 

$(document).ready(function(){
	var $sidebar = $('#sidebar');
    
    var hideSidebar = function(){
        $sidebar.addClass('hide');
    }
    
    var showSidebar = function(){
        $sidebar.removeClass('hide');
    }

     $('.sidebar-toggle-trigger').on('click', function(event){
        // Prevent default browser action for a link click
        event.preventDefault()
        
        // Toggle action
        if ($sidebar.hasClass('hide')) {
            window.setTimeout(showSidebar, 3000);
        } else {
            window.setTimeout(hideSidebar, 3000);
        }       
    })

});