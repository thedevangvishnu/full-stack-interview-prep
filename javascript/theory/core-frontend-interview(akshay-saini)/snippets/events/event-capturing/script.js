const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const button = document.querySelector("button");

// window.addEventListener("click", (e) => e.stopPropagation(), true);

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent clicked");
  },
  false
);

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
  },
  true
);

child.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Child clicked");
  },
  true
);

button.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Button clicked");
  },
  true
);
