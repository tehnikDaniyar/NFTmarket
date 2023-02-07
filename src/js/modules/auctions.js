import Swiper from "swiper";

export const sliderAuctions = () => {
	return new Swiper('.swiper', {

		slidesPerView: 1,
		spaceBetween: 10,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
};