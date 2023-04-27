const body = document.querySelector("body");
const background = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
background.addEventListener("click", () => {
  const random = getRandomHexColor();
  body.setAttribute("style", `background-color: ${random}`);
  colorName.textContent = `${random}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
