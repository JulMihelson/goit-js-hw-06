const form = document.querySelector(".login-form");
const textLine = document.querySelector("input");
form.addEventListener("submit", () => {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  textLine.addEventListener("input", () => {
    if (email || password === "") {
      alert("Всі поля повинні бути заповнені!");
    } else {
      const info = { email, password };
      return info;
    }
  });
  form.reset();
});
