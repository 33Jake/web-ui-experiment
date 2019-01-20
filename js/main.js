(function() {

	// Load all grid blocks
    $.ajax({
    	dataType: "json",
    	url: "data.json",
    	success: function(data){
    		// Add the primary block
    		var primaryBlockHtml = "<li id='primary'></li>";
    		$('#grid-container').append(primaryBlockHtml);

    		// Add all letters of the alphabet
    		$.each(data, function(key, val){
    			var letterHtml = "<li class='alphabet-item' style='background-image: url(img/" + val.icon + "); background-color: " + val.color + ";'><div class='color-overlay'><span class='letter'>" + val.letter + "</span></div><div class='item-title'>" + val.title + "</div></li>";
    			$('#grid-container').append(letterHtml);
    		});

    		// Add the filler block
    		var doubleBlockHtml = "<li class='double' id='double'><div class='color-overlay'></div></li>";
    		$('#grid-container').append(doubleBlockHtml);

    		// Add the branding block
    		var brandingBlockHtml = "<li></li>";
    		$('#grid-container').append(brandingBlockHtml);

    		// On hover, detect mouseover edge, add classes, remove classes on hover out.
		    $(".alphabet-item").hover(function(e) {
		        // Detect which side the mouse entered from
		        var edge = closestEdge(e.offsetX, e.offsetY, $(this).width(), $(this).height());
		        
		        // Add the appropriate classes to slide out the overlay and slide up the title
		        $(this).find(".color-overlay").addClass("slide-from-" + edge);
		        $(this).find(".item-title").addClass("show");
		    }, function(e) {
		    	// Remove all classes starting with `slide` and the title's show class
		        $(this).find(".color-overlay").removeClass (function (index, css) {
		            return (css.match (/\bslide-\S+/g) || []).join(' ');
		        });
		        $(this).find(".item-title").removeClass("show");
		    });
    	}
    });

}());