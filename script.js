$(document).ready(function() {
	var leftmenu='closed';
	$('.menu-button').on('click', function() {
		$('#hamburger').fadeToggle('fast');
		$('#closeicon').fadeToggle('fast');
		$('.left-sidenav').toggleClass('show-menu');
		if(leftmenu==='closed'){
			$(this).animate({left:'+=190px'},100);
			$('.proList').slideUp(0);
			$('#l-brieft2').addClass('brief-hidden');
			$('#l-brieft2').removeClass('brief-show');
			$('#l-brieft3').addClass('brief-hidden');
			$('#l-brieft3').removeClass('brief-show');
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
		$('#r-brieft1, #r-brieft2, #r-brieft3, #r-brieft5, #r-brieft6').addClass('brief-hidden');
		$('#r-brieft1, #r-brieft2, #r-brieft3, #r-brieft5, #r-brieft6').removeClass('brief-show');
		$('.right-sidenav').toggleClass('show-menu');
		$('#right-menu-button').fadeToggle(100);
	});

	$('.menu-arrow').click(function() {
		$(this).next().slideToggle(500);
	});
	
	/*if(leftmenu==='open'){
		$('Content').click(function(){
			$('.left-sidenav').animate({left:'-=190px'},100);				
			leftmenu='closed';
			document.body.style.backgroundColor = "rgba(0,0,0,0)";
		});
	}*/
	
	$('.Projects').on('click',function(){
		$('.proList').slideToggle(600);
		$('#l-brieft3').removeClass('brief-show');
		$('#l-brieft3').addClass('brief-hidden');
		$('#l-brieft2').addClass('brief-hidden');
		$('#l-brieft2').removeClass('brief-show');
		
	});
	
	$('#l-t2').on('mouseover',function(){
		$('#l-brieft2').addClass('brief-show');
		$('#l-brieft2').removeClass('brief-hidden');
		$('#l-brieft3').addClass('brief-hidden');
		$('#l-brieft3').removeClass('brief-show');
	});
	
	$('#l-t3').on('mouseover',function(){
		$('#l-brieft3').addClass('brief-show');
		$('#l-brieft3').removeClass('brief-hidden');
		$('#l-brieft2').addClass('brief-hidden');
		$('#l-brieft2').removeClass('brief-show');
	});
	
	$('#r-t1').on('mouseover',function(){
		$('#r-brieft1').addClass('brief-show');
		$('#r-brieft1').removeClass('brief-hidden');
		$('#r-brieft2').addClass('brief-hidden');
		$('#r-brieft2').removeClass('brief-show');
		$('#r-brieft3').addClass('brief-hidden');
		$('#r-brieft3').removeClass('brief-show');
		$('#r-brieft5').addClass('brief-hidden');
		$('#r-brieft5').removeClass('brief-show');
		$('#r-brieft6').addClass('brief-hidden');
		$('#r-brieft6').removeClass('brief-show');
		
	});
	
	$('#r-t2').on('mouseover',function(){
		$('#r-brieft2').addClass('brief-show');
		$('#r-brieft2').removeClass('brief-hidden');
		$('#r-brieft1').addClass('brief-hidden');
		$('#r-brieft1').removeClass('brief-show');
		$('#r-brieft3').addClass('brief-hidden');
		$('#r-brieft3').removeClass('brief-show');
		$('#r-brieft5').addClass('brief-hidden');
		$('#r-brieft5').removeClass('brief-show');
		$('#r-brieft6').addClass('brief-hidden');
		$('#r-brieft6').removeClass('brief-show');
		
	});
	$('#r-t3').on('mouseover',function(){
		$('#r-brieft3').addClass('brief-show');
		$('#r-brieft3').removeClass('brief-hidden');
		$('#r-brieft2').addClass('brief-hidden');
		$('#r-brieft2').removeClass('brief-show');
		$('#r-brieft1').addClass('brief-hidden');
		$('#r-brieft1').removeClass('brief-show');
		$('#r-brieft5').addClass('brief-hidden');
		$('#r-brieft5').removeClass('brief-show');
		$('#r-brieft6').addClass('brief-hidden');
		$('#r-brieft6').removeClass('brief-show');
		
	});
	
	$('#r-t5').on('mouseover',function(){
		$('#r-brieft5').addClass('brief-show');
		$('#r-brieft5').removeClass('brief-hidden');
		$('#r-brieft2').addClass('brief-hidden');
		$('#r-brieft2').removeClass('brief-show');
		$('#r-brieft3').addClass('brief-hidden');
		$('#r-brieft3').removeClass('brief-show');
		$('#r-brieft1').addClass('brief-hidden');
		$('#r-brieft1').removeClass('brief-show');
		$('#r-brieft6').addClass('brief-hidden');
		$('#r-brieft6').removeClass('brief-show');
		
	});
	
	$('#r-t6').on('mouseover',function(){
		$('#r-brieft6').addClass('brief-show');
		$('#r-brieft6').removeClass('brief-hidden');
		$('#r-brieft2').addClass('brief-hidden');
		$('#r-brieft2').removeClass('brief-show');
		$('#r-brieft3').addClass('brief-hidden');
		$('#r-brieft3').removeClass('brief-show');
		$('#r-brieft5').addClass('brief-hidden');
		$('#r-brieft5').removeClass('brief-show');
		$('#r-brieft1').addClass('brief-hidden');
		$('#r-brieft1').removeClass('brief-show');
		
	});
	
	var slideIndex = 1;
showSlides(slideIndex);

	$('.prev').on('click',function(){
		plusSlides(-1);
		clearTimeout(myVar);
	});
	
	$('.next').on('click',function(){
		plusSlides(+1);
	    clearTimeout(myVar);
	});

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
  
}

	$('img').mouseout(function(){
			clearTimeout(myVar);
		    myVar=setTimeout(showSlides2, 4000);
	});

slideIndex = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    myVar=setTimeout(showSlides2, 4000);
}	
	
});

