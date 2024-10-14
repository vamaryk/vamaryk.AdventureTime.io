const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
menu.onclick = () => {
	menu.classList.toggle("active");
	navigation.classList.toggle("active");
};

const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
// const phone = document.getElementById('phone');
const password = document.getElementById("password");
const cpassword = document.getElementById("retypepass");

//add event
form.addEventListener("submit", (event) => {
  console.log("form submit");
  event.preventDefault();

  validate();
});

//is email(check the email)
const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;

  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false;

  if (dot === emailVal.length - 1) return false;

  return true;
};

const validate = () => {
  const userNameVal = username.value.trim();
  const emailVal = email.value.trim();
  // const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate userName
  if (userNameVal === "") {
    setErrorMsg(username, "Имя пользователя не может быть пустым");
  } else if (userNameVal.length <= 2) {
    setErrorMsg(username, "Введите минимум 3 символа");
  } else {
    setSuccessmsg(username);
  }

  // validate email
  if (emailVal === "") {
    setErrorMsg(email, "Email не может быть пустым");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not valid email");
  } else {
    setSuccessmsg(email);
  }

  //validate phone
  /*if(phoneVal === ""){
		setErrorMsg(phone, 'phone num cannot be blank');
	} else if (phoneVal.length != 11 ) {
		setErrorMsg(phone, 'not valid phone num');
	} else{
		setSuccessmsg(phone);
	}*/

  const hasD = /^\d+$/;
  const D_ = /12345678/;
  const l_ = /abc|1111|2222|3333|4444|5555|6666|7777|8888|9999|0000|qwerty|password|1q2w3e4r/;
  
  //validate password
  if (passwordVal === "") {
    setErrorMsg(password, "Пароль не может быть пустым");
  } else if (passwordVal.length < 8) {
    setErrorMsg(password, "Введите минимум 8 символов");
  } 
    else if (hasD.test(passwordVal) == true) {
    setErrorMsg(password, "Пароль должен содержать другие символы (помимо цифр) ");
  }
    else if (D_.test(passwordVal) == true || l_.test(passwordVal) == true) {
    setErrorMsg(password, "Придумайте другой пароль");
  } else {
    setSuccessmsg(password);
  }

  //validate confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Поле не может быть пустым");
  } else if (cpasswordVal.length < 8) {
    setErrorMsg(cpassword, "Введите минимум 8 символов");
  } else if (cpasswordVal != passwordVal) {
    setErrorMsg(cpassword, "Пароль не совпал ");
  } 
    else if (hasD.test(cpasswordVal) == true) {
    setErrorMsg(cpassword, "Пароль должен содержать другие символы (помимо цифр) ");
  }
    else if (D_.test(cpasswordVal) == true || l_.test(cpasswordVal) == true) {
    setErrorMsg(cpassword, "Придумайте другой пароль");
  }
    else {
    setSuccessmsg(cpassword);
  }

  setTimeout(() => {
    let successCls = document.querySelectorAll(".success");
    if (successCls.length == 4) {
      showSubmittedMsg();
    }
  }, 1000);
};

function showSubmittedMsg() {
  let mainPage = document.getElementById("main-page");
  mainPage.style.display = "none";
  let successMsgPage = document.getElementById("submitted-msg");
  successMsgPage.style.display = "block";

  document.getElementById("msg-name").innerText = userName.value;
}

function setErrorMsg(input, errormsg) {
  const formGroup = input.parentNode;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = errormsg;
}

function setSuccessmsg(input) {
  const fromGroup = input.parentNode;
  fromGroup.className = "form-group success";
}

function previewForm() {
  document.getElementById("main-page").style.display = "block";
  document.getElementById("submitted-msg").style.display = "none";

  let submitBtn = document.getElementById("submit-btn");
  submitBtn.classList.remove("btn");
  submitBtn.classList.add("disabled-btn");
  submitBtn.disabled = true;
}

// Получаем элементы кнопок и полей ввода пароля
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("retypepass");
const togglePasswordButton = document.getElementById("toggle-password");
const toggleConfirmPasswordButton = document.getElementById("toggle-retypepass");

// Добавляем обработчики событий для кнопок
togglePasswordButton.addEventListener("click", () => {
  // Toggle тип поля ввода пароля
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.classList.add("fa-eye-slash"); // показать иконку глаза с полосой
    togglePasswordButton.classList.remove("fa-eye"); // убрать иконку глаза
  } else {
    passwordInput.type = "password";
    togglePasswordButton.classList.add("fa-eye"); // показать иконку глаза
    togglePasswordButton.classList.remove("fa-eye-slash"); // убрать иконку глаза с полосой
  }
});

toggleConfirmPasswordButton.addEventListener("click", () => {
  // Toggle тип поля ввода подтверждения пароля
  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    toggleConfirmPasswordButton.classList.add("fa-eye-slash"); // показать иконку глаза с полосой
    toggleConfirmPasswordButton.classList.remove("fa-eye"); // убрать иконку глаза
  } else {
    confirmPasswordInput.type = "password";
    toggleConfirmPasswordButton.classList.add("fa-eye"); // показать иконку глаза
    toggleConfirmPasswordButton.classList.remove("fa-eye-slash"); // убрать иконку глаза с полосой
  }
});