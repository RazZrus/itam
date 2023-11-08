const burgerMenuButton = document.querySelector('.mobile-menu-button');
const mobileNavigation = document.querySelector('.mobile-nav');
const mobileNavigationButton = document.querySelectorAll('.mobile-nav-list-item');
const page = document.querySelector('body');

burgerMenuButton.addEventListener('click', function () {
	burgerMenuButton.classList.toggle('is-active');
	mobileNavigation.classList.toggle('activated');
	page.classList.toggle('fixed');
});

console.log(mobileNavigationButton);

mobileNavigationButton.forEach((button) => {
	button.addEventListener('click', function () {
		burgerMenuButton.classList.remove('is-active');
		mobileNavigation.classList.remove('activated');
		page.classList.toggle('fixed');
	});
});
