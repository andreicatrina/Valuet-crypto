let apiServer = "http://127.0.0.1:3000/api";
let element2 = document.getElementById("sign-up-form");
let element = document.getElementById("sign-in-form");

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
    window.location.href = "transactions-page.html";
  } catch (error) {
    let errorMessage = error.response.data.message;
    console.log(errorMessage);
    document.getElementById("sign-in-error").innerHTML = errorMessage;
    document.getElementById("sign-in-error").classList.remove("hidden");
  }
};

let createAccount = async function () {
  // document.getElementById("sign-up-error").classList.add("hidden");
  let isFormValid = validateSignUpForm();
  if (!isFormValid) {
    return;
  }

  // TODO : Make server request
  let emailElement = document.querySelector("#sign-up-form #email").value;
  let nameElement = document.querySelector("#sign-up-form #name").value;
  let passwordElement = document.querySelector("#sign-up-form #password").value;

  try {
    document.getElementById("sign-up-error").classList.add("hidden");

    let apiResponse = await axios.post(apiServer + "/auth/sign-up", {
      email: emailElement,
      name: nameElement,
      password: passwordElement,
    });
    console.log(apiResponse.data);
    element2.classList.add("hidden");
    element.classList.remove("hidden");
    window.location.href = "index.html";
  } catch (error) {
    let errorMessage = error.response.data.message;
    console.log(errorMessage);
    document.getElementById("sign-up-error").innerHTML = errorMessage;
    document.getElementById("sign-up-error").classList.remove("hidden");
  }
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
