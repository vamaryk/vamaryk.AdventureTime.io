document.addEventListener('DOMContentLoaded', function () {
      // инициализация слайдера
      var slider = new SimpleAdaptiveSlider('.slider', {
        autoplay: true,
        interval: 5000,
        swipe: true,
      });
    });

const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
menu.onclick = () => {
	menu.classList.toggle("active");
	navigation.classList.toggle("active");
};

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  interval: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    }
  }
});

const heartBtns = document.querySelectorAll('.heart-btn');

heartBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});