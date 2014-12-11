$(document).ready(function() {

	$("#carousel > div:gt(1)").hide();

	setInterval(function() {
		$("#carousel > div:first-of-type")
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo("#carousel");
	},  7000);

});