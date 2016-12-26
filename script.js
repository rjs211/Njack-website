$(document).ready(function() {
	var leftmenu='closed';
	$('.menu-button').on('click', function() {
		$('#hamburger').fadeToggle('fast');
		$('#closeicon').fadeToggle('fast');
		$('.left-sidenav').toggleClass('show-menu');
		if(leftmenu==='closed'){
			$(this).animate({left:'+=190px'},100);
			leftmenu='open';
			document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
		}
		else{
			$(this).animate({left:'-=190px'},100);
			leftmenu='closed';
			document.body.style.backgroundColor = "rgba(0,0,0,0)"
		}
	});
	$('.right-sidenav').hover(function(){
		$('.right-sidenav').toggleClass('show-menu');
		$('#right-menu-button').fadeToggle(100);
	});

	$('.menu-arrow').click(function() {
		$(this).next().slideToggle(500);
	});

});