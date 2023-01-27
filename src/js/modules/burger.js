export function burger() {
	const icon = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');
	icon.addEventListener('click', function () {
		this.classList.toggle('active');
		menu.classList.toggle('active');
	})
};
