$(document).ready(function(){

	//sidebar toggle
	$("#sidebar-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$("#sidebar-toggle i").toggleClass("fa-angle-double-right fa-comments");
	});	

});