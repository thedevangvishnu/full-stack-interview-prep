// // Print a star pattern like below using a function that takes n (no. of rows) and print stars like:
// *         *
// **       **
// ***     ***
// ****   ****
// ***** *****

// Followup: Crate a function to print the pattern in reverse

function printStarsAscending(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }

    for (let j = 0; j < n + (n - (i * 2 + 1)); j++) {
      row += " ";
    }

    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }

    console.log(row);
  }
}

function betterPrintStarsAscend(n) {
  for (let i = 0; i < n; i++) {
    let stars = "*".repeat(i + 1);
    let spaces = "#".repeat(2 * (n - (i + 1)) + 1);

    console.log(stars + spaces + stars);
  }
}

betterPrintStarsAscend(5);

// printStarsAscending(6);

function printStarsDescending(n) {
  for (let i = n; i > 0; i--) {
    let row = "";

    for (let j = 0; j < i; j++) {
      row += "*";
    }

    for (let j = 0; j < 2 * n - (i + (i - 1)); j++) {
      row += " ";
    }

    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// printStarsDescending(6);
