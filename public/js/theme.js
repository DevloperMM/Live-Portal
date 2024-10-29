let tick = document.querySelector(".navbox .form-check-input");
let image = document.querySelector(".navbox img");
let body = document.body;
let rows = document.querySelectorAll(".tab-body");

tick.addEventListener("change", () => {
  if (tick.checked) {
    image.setAttribute("src", "/assets/logo-white.png");
    body.classList.add("light-body");
    for (let row of rows) {
      row.classList.add("tab-light-body");
    }
  } else {
    image.setAttribute("src", "/assets/logo-dark.png");
    body.classList.remove("light-body");
    for (let row of rows) {
      row.classList.remove("tab-light-body");
    }
  }
});
