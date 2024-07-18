const parent = document.querySelector(".parent");
const button = document.querySelector("button");

parent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("parent clicked");
});

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("1st Button Handler executed!");
});

button.addEventListener("click", (e) => {
  e.target.style.background = "yellow";
  console.log("2nd Button Handler executed!");
});
