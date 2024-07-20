// Implement a calculator that performs +, -, *, /, %. Your implementation should allow for chaining multiple operations

// Approach 1: Using constructor function

function Calculator() {
  let value = 0;

  function add(num) {
    value = value + num;
    return this;
  }

  function subtract(num) {
    value = value - num;
    return this;
  }

  function multiply(num) {
    value *= num;
    return this;
  }

  function divide(num) {
    if (num === 0) throw Error("Cannot divide by 0");
    value /= num;
    return this;
  }

  function modulus(num) {
    if (num === 0) throw Error("Cannot divide by 0 to find remainder");
    value %= num;
    return this;
  }

  function result() {
    return value;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    result,
  };
}

// const calc = new Calculator();
// console.log(calc.add(20).subtract(10).multiply(4).divide(2).result());

// More optimized and shorter function using Constructor, callback and closure

function Calculator2() {
  let value = 0;

  function operate(cb) {
    return function (num) {
      value = cb(value, num);
      return this;
    };
  }

  return {
    add: operate((v, n) => v + n),
    subtract: operate((v, n) => v - n),
    multiply: operate((v, n) => v * n),
    divide: operate((v, n) => {
      if (n === 0) throw new Error("Cannot divide by 0");
      return v / n;
    }),
    modulus: operate((v, n) => {
      if (n === 0) throw new Error("Cannot divide by 0 to find remainder");
      return v % n;
    }),
    result: () => value,
  };
}

const calc = new Calculator2();
console.log(
  calc.add(20).subtract(10).multiply(4).divide(2).modulus(3).result()
);
