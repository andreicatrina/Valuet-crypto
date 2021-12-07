let switchForms = function () {
  // console.log("Click");
  let element = document.getElementById("sign-in-form");
  console.log(element);
  element.classList.add("hidden");

  let element2 = document.getElementById("sign-up-form");
  console.log(element2);
  element2.classList.remove("hidden");
};
