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

		slidesPerView: 3,
		spaceBetween: 10,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
};