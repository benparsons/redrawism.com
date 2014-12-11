$(document).ready(function() {

	$("#carousel > .slide:gt(0)").hide();

	setInterval(function() {
		$("#carousel > .slide:first")
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo("#carousel");
	},  7000);
});