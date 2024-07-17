const parent = document.querySelector(".parent");
const children = document.querySelectorAll(".child");

// window.addEventListener("click", (e) => e.stopPropagation(), true);

function handleParentClick(e) {
  if (e.target.classList.contains("child") && e.target.tagName === "DIV") {
    e.target.style.backgroundColor = generateRandomBg();
  }
}
parent.addEventListener("click", handleParentClick);

// function handleChildClick(e) {
//   let bg = generateRandomBg();
//   e.target.style.backgroundColor = bg;
// }

// children.forEach((child) => {
//   child.addEventListener("click", handleChildClick);
// });

function generateRandomBg() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function random(n) {
  return Math.random() * n;
}
