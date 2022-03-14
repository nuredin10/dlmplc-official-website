jQuery(document).ready(function($) {
"use strict";
$('#customers-testimonials').owlCarousel( {
		loop: false,
		center: false,
		items: 3,
		margin: 30,	
		autoplay: false,
		dots:true,
    nav:true,
		autoplayTimeout: 1500,
		smartSpeed: 450,
  	navText: ['<p class="btn btn-transp-arrow"><i class="icon"><span class="arrow-left"></span></i></p>','<p class="btn btn-transp-arrow"><i class="icon"><span class="arrow-right"></span></i></p>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
});