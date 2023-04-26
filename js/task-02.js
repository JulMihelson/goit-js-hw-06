const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const marckup = ingredients.map((ingredients) => {
  const ingredList = document.createElement("li");
  ingredList.textContent = ingredients;
  ingredList.classList.add("item");
  return ingredList;
});
list.append(...marckup);
