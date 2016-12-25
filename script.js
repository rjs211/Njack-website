$(document).ready(function() {
	var menu='closed';
	$('.menu-button').on('click', function() {
		$('#hamburger').fadeToggle('fast');
		$('#closeicon').fadeToggle('fast');
		$('.sidenav').toggleClass('show-menu');
		if(menu==='closed'){
			$(this).animate({left:'+=190px'},100);
			menu='open';
		}
		else{
			$(this).animate({left:'-=190px'},100);
			menu='closed';
		}
	});

	$('.menu-arrow').click(function() {
		$(this).next().slideToggle(500);
	});

});