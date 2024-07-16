// Print the fibonacci sequence of given number n.
// Fibonacci sequence (f(n)) is a series on numbers in which each number is the sum of its preceeding two numbers starting from 0 and 1;
// 0, 1, 1, 2, 3, 5, 8..., which can be mathematically represented as f(n) = f(n - 1) + f(n - 2);

function printFibonnaci(n) {
  if (n <= 1) return n;

  let previous = 0,
    next = 1,
    sum;
  for (let i = 0; i < n; i++) {
    console.log(previous);

    sum = previous + next;
    previous = next;
    next = sum;
  }
}

printFibonnaci(5);

console.log("........................");

// Write a function that calculates f(n) for a fibonacci sequence of n
function calFibonacci(n) {
  if (n <= 1) return n;

  let prev = 0,
    next = 1,
    sum;

  for (let i = 2; i <= n; i++) {
    sum = prev + next;
    prev = next;
    next = sum;
  }

  return sum;
}

console.log("Output:", calFibonacci(5));
