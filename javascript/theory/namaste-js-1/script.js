var x = 10;
one();
console.log(x);

function one() {
  x = 20;
  console.log("x from one", x);

  two();
  console.log("x from one", x + 10);

  function two() {
    x = 30;
    console.log("x from two", x);
  }
}
