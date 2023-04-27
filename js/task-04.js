const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action =increment]");
const value = document.querySelector("#value");
const counterValue = 0;
decrementBtn.addEventListener("click", () => {
  const counterValue = Number(value.textContent);
  value.textContent = counterValue - 1;
});
incrementBtn.addEventListener("click", () => {
  const counterValue = Number(value.textContent);
  value.textContent = counterValue + 1;
});
