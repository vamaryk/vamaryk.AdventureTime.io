const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
menu.onclick = () => {
	menu.classList.toggle("active");
	navigation.classList.toggle("active");
};

const heartBtns = document.querySelectorAll('.heart-btn');

heartBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});