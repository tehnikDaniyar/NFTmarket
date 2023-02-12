import Swiper from "swiper/bundle";
// import {
// 	Navigation,
// 	EffectFade,
// 	Pagination,
// 	Thumbs,
// 	Controller,
// 	FreeMode,
// 	Scrollbar,
// 	A11y,
// 	Mousewheel
// } from "swiper";

export const sliderAuctions = () => {
	return new Swiper('.swiper', {

		loop: true,

		slidesPerView: 1,
		spaceBetween: 10,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			676: {
				slidesPerView: 2,
			},
			1100: {
				slidesPerView: 3,
			},
		}

	});
};