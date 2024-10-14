const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
menu.onclick = () => {
	menu.classList.toggle("active");
	navigation.classList.toggle("active");
};