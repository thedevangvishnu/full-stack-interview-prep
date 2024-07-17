// Print a star pattern like below using a function that takes n (no. of rows) and print n stars for nth row each, like:
// *
// **
// ***
// ****
// *****

function printStars(n) {
  if (n <= 0) {
    console.log("Input must be greater than 0!");
    return;
  }
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function recursivePrintStars(n) {
  if (n <= 0) {
    console.log("Input must be greater than 0!");
    return;
  }

  function printStars(current) {
    if (current > n) return;

    console.log("*".repeat(current));
    printStars(current + 1);
  }

  printStars(1);
}

// recursivePrintStars(5);

function recursivePrintStars2(n) {
  if (n <= 0) {
    console.log("Input must be greater than 0!");
    return;
  }

  let stars = "*";
  function printStars(current) {
    if (current > n) return;

    console.log(stars);
    stars += "*";
    printStars(current + 1);
  }

  printStars(1);
}

recursivePrintStars2(5);
