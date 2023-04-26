const categoryList = document.querySelectorAll(".item");
console.log("Number of elements :>> ", categoryList.length);
categoryList.forEach((element) => {
  const title = element.querySelector("h2");
  const quant = element.querySelectorAll("li");
  console.log(`Category:${title.textContent} Elements:${quant.length}`);
});
