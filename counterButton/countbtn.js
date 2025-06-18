let count = 0;

const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("Btn");

Btn.addEventListener("click", function () {
  count++;
  counterElement.textContent = count;
});
