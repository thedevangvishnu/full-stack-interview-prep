const main = document.getElementById("main");

main.addEventListener("click", (e) => handleClick(e));

let clicked = 0;

function handleClick(e) {
  clicked++;

  if (clicked > 2) {
    main.innerHTML = "";
    clicked = 0;
    return;
  }

  const radius = parseInt(Math.random() * 101 + 100);
  createCircle(e.clientX, e.clientY, radius);
}

function createCircle(x, y, radius) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.style.setProperty("left", `${x - radius}px`);
  circle.style.setProperty("top", `${y - radius}px`);
  circle.style.setProperty("width", `${radius * 2}px`);
  circle.style.setProperty("height", `${radius * 2}px`);

  main.appendChild(circle);
  return circle;
}
