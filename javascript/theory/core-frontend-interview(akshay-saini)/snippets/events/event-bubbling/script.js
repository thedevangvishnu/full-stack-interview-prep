const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const button = document.querySelector("button");

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent clicked");
});

parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});

button.addEventListener("click", (e) => {
  //   e.stopPropagation();
  console.log("Button clicked");
});
