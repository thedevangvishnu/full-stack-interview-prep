// Write a function that checks whether a number is armstrong or not.
// A number that equals the sum of its digits, each raised to a power.
// For example, if you have a number like 153, it's an Armstrong number because 1^3 + 5^3 + 3^3 equals 153

function isArmstrong(n) {
  let num = n.toString();
  let len = num.length;

  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = parseInt(num[i]) ** len + sum;
  }

  return sum === n;
}

console.log(isArmstrong(407));
