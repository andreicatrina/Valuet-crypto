let apiServer = "http://127.0.0.1:3000/api";

let switchForms = function () {
  // console.log("Click");
  let element = document.getElementById("sign-in-form");
  // console.log(element);
  element.classList.add("hidden");

  let element2 = document.getElementById("sign-up-form");
  // console.log(element2);
  element2.classList.remove("hidden");
};

let signinAction = async function () {
  let emailElement = document.querySelector("#sign-in-form #email").value;
  let passwordElement = document.querySelector("#sign-in-form #password").value;

  try {
    document.getElementById("sign-in-error").classList.add("hidden");
    let apiResponse = await axios.post(apiServer + "/auth/sign-in", {
      email: emailElement,
      password: passwordElement,
    });
    console.log(apiResponse.data);
  } catch (error) {
    let errorMessage = error.response.data.message;
    console.log(errorMessage);
    document.getElementById("sign-in-error").innerHTML = errorMessage;
    document.getElementById("sign-in-error").classList.remove("hidden");
  }
};

let createAccount = function () {
  document.getElementById("sign-up-error").classList.add("hidden");
  let isFormValid = validateSignUpForm();
  if (!isFormValid) {
    return;
  }

  // TODO : Make server request
};

function validateSignUpForm() {
  let password = document.querySelector("#sign-up-form #password").value;
  let confirmPassword = document.querySelector(
    "#sign-up-form #confirm-password"
  ).value;
  let email = document.querySelector("#sign-up-form #email").value;
  let name = document.querySelector("#sign-up-form #name").value;

  if (password !== confirmPassword) {
    document.getElementById("sign-up-error").innerHTML =
      "Please check the password";
    document.getElementById("sign-up-error").classList.remove("hidden");
    return false;
  }

  if (
    email === "" ||
    name === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    document.getElementById("sign-up-error").innerHTML = "Fill the form";
    document.getElementById("sign-up-error").classList.remove("hidden");
    return false;
  }
  return true;
}
