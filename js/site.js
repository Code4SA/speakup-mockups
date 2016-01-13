$(document).ready(function(){

	//sidebar toggle
	$("#sidebar-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$("#sidebar-toggle i").toggleClass("fa-angle-double-right fa-comments");
	});

	//navbar scroll
	$(document).scroll(function() {
  	$(".navbar").toggleClass("scrolled", $(document).scrollTop() >= 60);
	});

});