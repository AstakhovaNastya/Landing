import 'bootstrap';

document.addEventListener("DOMContentLoaded", function(event) {
	initBurger();
	initSwiper();
});


function initBurger() {
	const activeClass = 'menu-opened';
	const page = document.documentElement;
	const opener = document.querySelector('.burger-menu');
	const onClickFn = (e) => {
		e.preventDefault();

		page.classList.toggle(activeClass);
	};

	opener.addEventListener('click', onClickFn);
}

function initSwiper() {
	new Swiper(".slider", {
		slidesPerView: "auto",
    spaceBetween: 8,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	new Swiper(".slider-multiple", {
		slidesPerView: 4,
    spaceBetween: 24,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 2
			},
			640: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			}
		}
	});
}