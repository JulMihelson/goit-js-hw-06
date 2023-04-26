const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSize = input.addEventListener("input", () => {
  text.style.fontSize = input.value + "px";
});
