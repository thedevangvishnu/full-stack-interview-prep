// Print a star pattern like below using a function that takes n (no. of rows) and print n stars for nth row each, like:
// ****
// ***
// **
// *

function printStars(n) {
  if (n <= 0) {
    console.log("Input must be greater than 0!");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// printStars(5);

function recursivePrintStars(n) {
  if (n <= 0) {
    console.log("Input must be greater than 0!");
    return;
  }

  function printStars(current) {
    if (current < 1) return;

    console.log("*".repeat(current));
    printStars(current - 1);
  }

  printStars(n);
}

// recursivePrintStars(6);

function recursivePrintStars2(n) {
  if (n <= 0) {
    console.log("Input must be greater than 0!");
    return;
  }

  let stars = "*".repeat(n);
  function printStars(num) {
    if (num < 1) return;

    console.log(stars);
    stars = stars.slice(0, num - 1);
    printStars(num - 1);
  }

  printStars(n);
}

// recursivePrintStars2(4);

function pureRecursivePrintStars(n) {
  if (n < 1) return;

  console.log("*".repeat(n));
  pureRecursivePrintStars(n - 1);
}

pureRecursivePrintStars(7);
