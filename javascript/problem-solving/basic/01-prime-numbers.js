// Write a function that checks if a number is prime or not
// The definition of a prime number is any number that has no positive divisors other than itself and the number 1

function isPrime(num) {
  if (num <= 1) return "Not a valid number to check for prime!";

  let isAPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isAPrime = false; // because, num has now more divisors other than 1 and itself
      break;
    }
  }

  return isAPrime;
}

console.log(isPrime(25));
