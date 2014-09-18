// Create the Pop Up content
var popUpDiv = $('<div class="popup"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque a at vitae, assumenda, fuga laboriosam. Nulla id quam exercitationem quisquam, est voluptates vero, iure culpa aperiam vitae. Placeat, ipsum aperiam!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at laudantium blanditiis culpa itaque eveniet sed ducimus dolore, veniam dignissimos. Porro iusto eveniet dolorem consequatur est. Impedit, tenetur, animi! Numquam.</p><button class="close-popup">GET THIS SHIT OUT OF HERE</button></div>')





var popUp = function() {
	$(document).on('click', '.giant-button', function(){
		$(popUpDiv).appendTo('body');
	})
}


var popDown = function() {
	$(document).on('click', '.close-popup', function() {
		$('.popup').remove();
	})
	
}



// DOCUMENT READY
$(document).on('ready', function() {
  popUp();
  popDown();
});