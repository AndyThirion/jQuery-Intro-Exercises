
// PART 1
// 	Make the paragraphs pink


// What do when paragraphs are hovered over
// Right now it gives 'em a pink background
var pHover = function() {
	$('.can-be-pink').hover(
		function(){
			$(this).addClass('pink')
		}, function() {
			$(this).removeClass('pink')
		}
	)
}

// PART 2
// 	Add an exclaimation point to the end of each heading

// Making a variable to easily select all headings
var headings = "h1, h2, h3, h4, h5";

// Make the hBang function
var hBang = function() {
	// var currentText = $(headings).text();
	// var newText = $(headings).text(currentText + '!');
	// $(headings).text(newText);

	$(headings).each( function() {
		var currentText = $(this).text();;
		var newText = currentText + "!";
		$(this).text(newText);
	} )
}


// PART 3
// 	When a link is clicked:
// 		confirm that user wants to go to that URL
// 		If OK:
// 			Allow default behavior
// 		Else:
// 			Cancel default behavior with return: false;
// 			Then remove link from DOM

var disableLink = function() {
	$('a').on('click', function(e){
		e.preventDefault();
	})
}

// Doc Ready
// Function Calls
$(document).on('ready', function() {
  //What do when paragraphs are hovered over
  pHover();
  hBang();
  disableLink();
});


