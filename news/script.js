const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
menu.onclick = () => {
	menu.classList.toggle("active");
	navigation.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
	let articles = document.querySelectorAll("article");
	let popup = document.getElementById("popup");
	let overlay = document.getElementById("overlay");
	let popupContent = document.getElementById("popup-content");

	articles.forEach(function (article) {
		article.addEventListener("click", function (event) {

			let rect = article.getBoundingClientRect();
			let x = event.clientX - rect.left;
			let y = event.clientY - rect.top;

			let figcaption = article.querySelector("figcaption span:first-child");
			let figcaptionText = figcaption ? figcaption.textContent : ""; // check if figcaption is present
			let dateAndTimeText = article
				.querySelector(".date-and-time")
				.textContent.trim();
			let authorText = article
				.querySelector("figcaption span:last-child")
				.textContent.trim();

			let img = article.querySelector("img");
			let imgSrc = img ? img.getAttribute("src") : ""; // check if image is present
			let imgElement = imgSrc ? `<img src="${imgSrc}" alt="Popup Image">` : ""; // create img element if image is present

			popupContent.innerHTML = `
                ${imgElement}
                <div>${figcaptionText}</div>
                <div class="flex"><div class="dt-popup">${dateAndTimeText}</div><div>${authorText}</div></div>
                <p>S7 Airlines модернизируют 16 самолётов Airbus A320, добавив в них места бизнес-класса, сообщает телеграм-канал компании. Бизнес-класс исчез из некоторых Airbus A320 ещё в 2019 году в связи с переводом самолётов на короткие и туристические маршруты.</p>
            `;
			popup.style.top = rect.top + y + "px";
			popup.style.left = rect.left + x + "px";
			overlay.style.display = "block";
			popup.style.display = "block";

			setTimeout(() => {
				popup.style.top = "50%";
				popup.style.left = "50%";
			}, 10);
		});
	});

	overlay.addEventListener("click", function () {
		popup.style.display = "none";
		overlay.style.display = "none";
	});

	// Close button functionality
	document.getElementById("close-btn").addEventListener("click", function () {
		popup.style.display = "none";
		overlay.style.display = "none";
	});
});