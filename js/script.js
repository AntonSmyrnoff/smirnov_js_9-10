(function($) {
	$(function() {
	    $('.jcarousel').jcarousel({
	         list: '.jcarousel-list',
	         items: '.jcarousel-item',
	         animation: 'slow',
	         transitions: true,
	         wrap: 'circular',
	    });

	    
	    $('.jcarousel-prev').jcarouselControl({
	        target: '-=1'
	    });

	    
	    $('.jcarousel-next').jcarouselControl({
	        target: '+=1'
	    });
	});
});





















