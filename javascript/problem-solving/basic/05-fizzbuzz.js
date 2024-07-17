/**
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 */

function fizzbuzz(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      arr[i] = "FizzBuzz";
    } else if ((i + 1) % 3 === 0) {
      arr[i] = "Fizz";
    } else if ((i + 1) % 5 === 0) {
      arr[i] = "Buzz";
    } else {
      arr[i] = (i + 1).toString();
    }
  }

  console.log(arr);
}

fizzbuzz(15);
