(function ($) {
	"use strict";


	jQuery('.dropdown-icon').on('click', function () {
		jQuery(this).toggleClass('active').next('ul').slideToggle();
		jQuery(this).parent().siblings().children('ul').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	jQuery('.dropdown-icon2').on('click', function () {
		jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
		jQuery(this).parent().siblings().children('.submenu-list').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});	
	
	// sticky header
	window.addEventListener('scroll', function () {
		const header = document.querySelector('header.header-area');
		header.classList.toggle("sticky", window.scrollY > 200);
	});

	// sidebar
	$('.right-sidebar-button').on("click", function () {
		$('.right-sidebar-menu').addClass('show-right-menu');
	});
	$('.right-sidebar-close-btn').on("click", function () {
		$('.right-sidebar-menu').removeClass('show-right-menu');
	});

	//Counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1500
	});

	// Video Popup

	$('[data-fancybox="gallery"]').fancybox({
		buttons: [
			"close"
		],
		loop: false,
		protect: true
	});
	$('.video-player').fancybox({
		buttons: [
			"close"
		],
		loop: false,
		protect: true
	});

	// niceSelect
	$('select').niceSelect();
	
	
	// testimonial Slider
	var swiper = new Swiper(".home1-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
		navigation: {
		  nextEl: ".testimonial-slider-next",
		  prevEl: ".testimonial-slider-prev",
		},
	
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 2,
		  },
		  1200: {
			slidesPerView: 4,
			spaceBetween: 15,
		  },
		  1400: {
			slidesPerView: 4,
		  },
		},
	});
	// Home2 Team Slider
	var swiper = new Swiper(".home2-team-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 2,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 4,
		  },
		  1400: {
			slidesPerView: 5,
		  },
		},
	});
	// Home1 Feature Slider
	var swiper = new Swiper(".home2-feature-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 2.7,
		  },
		  1200: {
			slidesPerView: 3.7,
		  },
		  1400: {
			slidesPerView: 4.7,
		  },
		},
	});
	// testimonial Slider
	var swiper = new Swiper(".home2-banner-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		// loop: true,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
			crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
		nextEl: ".banner-slider-next",
		prevEl: ".banner-slider-prev",
		},
	});
	// testimonial Slider
	var swiper = new Swiper(".home2-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		// loop: true,
        effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
		nextEl: ".testimonial-slider-next",
		prevEl: ".testimonial-slider-prev",
		},
	});
	// testimonial Slider
	var swiper = new Swiper(".home3-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
		navigation: {
		  nextEl: ".testimonial-slider-next",
		  prevEl: ".testimonial-slider-prev",
		},
	
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 2,
		  },
		  1200: {
			slidesPerView: 3,
			spaceBetween: 15,
		  },
		  1400: {
			slidesPerView: 3,
		  },
		},
	});
	// Home3 Team Slider
	var swiper = new Swiper(".home3-team-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 2,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 4,
		  },
		  1400: {
			slidesPerView: 4,
		  },
		},
	});
	// Home3 Portfolio Slider
	var swiper = new Swiper(".home3-portfolio-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
		  nextEl: ".portfolio-slider-next",
		  prevEl: ".portfolio-slider-prev",
		},
	
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 2,
		  },
		  1200: {
			slidesPerView: 3,
		  },
		  1400: {
			slidesPerView: 3,
		  },
		},
	});
	// Home4 Portfolio Slider
	var swiper = new Swiper(".home4-portfolio-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
		  nextEl: ".portfolio-slider-next",
		  prevEl: ".portfolio-slider-prev",
		},
	
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		  },
		  1400: {
			slidesPerView: 4,
		  },
		},
	});
	// Home4 Testimonial Slider
	var swiper = new Swiper(".home4-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
		navigation: {
		  nextEl: ".testimonial-slider-next",
		  prevEl: ".testimonial-slider-prev",
		},
	
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 2,
			centeredSlides: false,
		  },
		  1200: {
			slidesPerView: 3,
			spaceBetween: 15,
			centeredSlides: true,
		  },
		  1400: {
			slidesPerView: 3,
			centeredSlides: true,
		  },
		},
	});
	// Home5 Case Study Slider
	var swiper = new Swiper(".home5-case-study-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 3,
		  },
		  1400: {
			slidesPerView: 3,
		  },
		},
	});
	// Home5 Blog Slider
	var swiper = new Swiper(".home5-blog-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination3",
			clickable: true,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 3,
		  },
		  1400: {
			slidesPerView: 3,
		  },
		},
	});
	// Home5 Testimonial Slider
	var swiper = new Swiper(".home5-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".testimonial-slider-next",
			prevEl: ".testimonial-slider-prev",
		},
	});
	
	//Quantity Increment
	$(".quantity__minus").on("click", function (e) {
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val());
		if (value > 1) {
			value--;
		}
		input.val(value.toString().padStart(2, "0"));
	});
	$(".quantity__plus").on("click", function (e) {
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val());
		value++;
		input.val(value.toString().padStart(2, "0"));
	});

	$(".home3-service-section .accordion-flush .accordion-item").on(
		"click",
		function (e) {
		  // // Get the index of the hovered content list item
		  var index = $(this).index();
		  // Remove the 'active' class from all image list items
		  $(".solution-img-wrapper li").removeClass("active");
		  // Add the 'active' class to the corresponding image list item
		  $(".solution-img-wrapper li:eq(" + index + ")").addClass("active");
		}
	  );
	// sidebar
	$(".home4-banner-section .play-icon").on("click", function (e) {
		e.stopPropagation();
		$(".video-wrapper").toggleClass("slide");
		});

	 // password-hide and show
	 const togglePassword = document.querySelector('#togglePassword');
	 const password = document.querySelector('#password');
	 if(togglePassword){
	 togglePassword.addEventListener('click', function (e) {
	 // toggle the type attribute
	 const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
	 password.setAttribute('type', type);
	 // toggle the eye / eye slash icon
	 this.classList.toggle('bi-eye');
	 });
	 }

	// New-password
	const togglePassword2= document.getElementById('togglePassword2');
	const password2 = document.querySelector('#password2');
	if (togglePassword2){
	togglePassword2.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
	password2.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}
	// confirm-password
	const togglePassword3= document.getElementById('togglePassword3');
	const password3 = document.querySelector('#password3');
	if (togglePassword3){
	togglePassword3.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
	password3.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}
	
	const circularProgress = document.querySelectorAll(".circular-progress");

	const observerOptions = {
	  root: null, // Use the viewport as the root
	  rootMargin: "0px",
	  threshold: 0.1 // Trigger when at least 10% of the element is visible
	};
	
	const progressObserver = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  const progressBar = entry.target;
		  const progressValue = progressBar.querySelector(".percentage");
		  const innerCircle = progressBar.querySelector(".inner-circle");
		  let startValue = 0,
			endValue = Number(progressBar.getAttribute("data-percentage")),
			speed = 40,
			progressColor = progressBar.getAttribute("data-progress-color");
	
		  const progress = setInterval(() => {
			startValue++;
			progressValue.textContent = `${startValue}%`;
			progressValue.style.color = `${progressColor}`;
	
			// innerCircle.style.backgroundColor = 'transparent'; // Ensure this is set correctly
	
			progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6}deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
			if (startValue === endValue) {
			  clearInterval(progress);
			}
		  }, speed);
	
		  // Stop observing the progress bar once the animation starts
		  observer.unobserve(progressBar);
		}
	  });
	}, observerOptions);
	
	// Observe each circular progress bar
	circularProgress.forEach(progressBar => {
	  progressObserver.observe(progressBar);
	});
	


	//wow js 
    jQuery(window).on('load', function () {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            offset: 80
        })
        window.wow.init();
    });
	///Marquee
	const marquee = document.querySelectorAll(".marquee_text");
	if (marquee) {
		$(".marquee_text").marquee({
			direction: "left",
			duration: 25000,
			gap: 50,
			delayBeforeStart: 0,
			duplicated: true,
			startVisible: true,
		});
	}

}(jQuery));