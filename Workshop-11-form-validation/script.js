const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const password2 = document.getElementById("re-password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput([username, email, password1, password2]);
  if (!validateEmail(email.value.trim())) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  checkPassword(password1, password2);
  checkInputLength(username, 5, 10);
  checkInputLength(password1, 5, 12);
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(".+"))@((\[[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkInput(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() == "") {
      showError(input, `Enter your ${getInputCase(input)}`);
    } else {
      showSuccess(input);
    }
  });
}

function getInputCase(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPassword(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, "Password don't match");
  }
}

function checkInputLength(input, min, max) {
  if (input.value.length <= min) {
    showError(
      input,
      `${getInputCase(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getInputCase(input)} can not be longer than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
