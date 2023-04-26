const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action =increment]");
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  const calc = Number(counterValue.textContent);
  counterValue.textContent = calc - 1;
});
incrementBtn.addEventListener("click", () => {
  const calc = Number(counterValue.textContent);
  counterValue.textContent = calc + 1;
});
