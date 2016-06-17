function checkwidth(){
	var winw = window.innerWidth; 
	var winh = window.innerHeight;
	console.log(winw); 
	console.log(winh); 
	if (winw >= 680) {
		$(window).scroll(function (event) {
			var scroll = $(document).scrollTop(); 
			if (scroll <= 25){
				$('.navbar.navbar-fixed-top').removeClass('onscroll');
			} else {
				$('.navbar,navbar-fixed-top').addClass('onscroll'); 
			}
		});
	} else {$('.navbar,navbar-fixed-top').addClass('onscroll')};
};

$(document).ready(checkwidth()); 
$(window).resize(function(){checkwidth()});