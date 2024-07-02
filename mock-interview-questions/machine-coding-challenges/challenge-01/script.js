const main = document.getElementById("main");

main.addEventListener("click", (e) => handleClick(e));

let clicked = 0;
let circle1 = null;
let circle2 = null;

function handleClick(e) {
  clicked++;

  const radius = parseInt(Math.random() * 101 + 100);

  if (clicked === 1) {
    circle1 = [e.clientX, e.clientX, radius];
  } else if (clicked === 2) {
    circle2 = [e.clientX, e.clientX, radius];

    const intersection = intersectionArea(...circle1, ...circle2);
    console.log("Intersection Area:", intersection);
  } else {
    main.innerHTML = "";
    clicked = 0;
    circle1 = null;
    circle12 = null;
    return;
  }

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

// Function to return area of intersection
function intersectionArea(X1, Y1, R1, X2, Y2, R2) {
  let Pi = 3.14;
  let d, alpha, beta, a1, a2;
  let ans;

  // Calculate the euclidean distance
  // between the two points
  d = Math.sqrt((X2 - X1) * (X2 - X1) + (Y2 - Y1) * (Y2 - Y1));

  if (d > R1 + R2) ans = 0;
  else if (d <= R1 - R2 && R1 >= R2) ans = Math.floor(Pi * R2 * R2);
  else if (d <= R2 - R1 && R2 >= R1) ans = Math.floor(Pi * R1 * R1);
  else {
    alpha = Math.acos((R1 * R1 + d * d - R2 * R2) / (2 * R1 * d)) * 2;
    beta = Math.acos((R2 * R2 + d * d - R1 * R1) / (2 * R2 * d)) * 2;
    a1 = 0.5 * beta * R2 * R2 - 0.5 * R2 * R2 * Math.sin(beta);
    a2 = 0.5 * alpha * R1 * R1 - 0.5 * R1 * R1 * Math.sin(alpha);
    ans = Math.floor(a1 + a2);
  }

  return ans;
}
