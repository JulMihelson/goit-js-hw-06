const input = document.querySelector("#validation-input");

const neededLength = Number(input.getAttribute("data-length"));
input.addEventListener("blur", () => {
  const text = input.value;
  if (text.length === neededLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
