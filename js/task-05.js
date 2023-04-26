const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const text = event.target.value;
  if (text) {
    output.textContent = text;
  } else {
    output.textContent = "Anonymous";
  }
});
