let element = document.querySelector(".time");
let count = 59;

let interval = setInterval(() => {
  element.innerHTML = count;
  count--;

  if (count < 1) {
    count = 60;
  }
}, 1000);
