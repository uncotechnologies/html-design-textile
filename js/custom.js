jQuery(document).ready(function(){

	/********* Sticky Header ************/	
	jQuery(window).scroll(function(){
	var sticky = jQuery('body'),
		scroll = jQuery(window).scrollTop();	
	if(scroll >= 200) sticky.addClass('sticky-header');
	else sticky.removeClass('sticky-header');	
	});

	/********* Sliders ************/	
	jQuery('#main-slide').owlCarousel({
		loop:true,
		items:1,
		nav:true,
		dots:false,
		autoplay:true, 
		margin:10,
		autoplayTimeout:5000,
		smartSpeed:1500,
		navText: [
					"<i class='fa fa-long-arrow-left'></i>",
					"<i class='fa fa-long-arrow-right'></i>"
				]
				
	});
	jQuery('.ou-mis-slide').owlCarousel({
		loop:true,
		items:5,
		nav:true, 
		dots:false,
		autoplay:true,
		margin:10,
		autoplayTimeout:5000,
		smartSpeed:1500,
		navText: [
					"<i class='fa fa-long-arrow-left'></i>",
					"<i class='fa fa-long-arrow-right'></i>"
				],
		/*animateOut: 'slideOutUp',
		animateIn: 'slideInUp',*/			   
				
	});

	jQuery('[data-toggle="popover"]').popover();
	$(".custom-checkbox").click(function(){
        $(".stitching-size").slideToggle();
    });
});
