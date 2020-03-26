/*responsivmenu===============================*/
const menuBtn = document.querySelector(".menu__spans");
menuBtn.addEventListener("click", () => {
	document.querySelector(".header__right").classList.toggle("menu__active");
	document.querySelector(".menu__spans").classList.toggle("menu__close");
});
/*/responsivmenu===============================*/