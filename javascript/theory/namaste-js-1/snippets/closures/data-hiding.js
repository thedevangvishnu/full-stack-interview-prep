function counter() {
  var count = 0;

  return function incrementCounter() {
    count++;
  };
}

var c1 = counter();
console.log(c1()); // undefined

////////////////

function counter2() {
  var count = 0;

  return function incrementCounter() {
    return count++;
  };
}

var c2 = counter2();
console.log(c2()); // 0

////////////////

function counter3() {
  var count = 0;

  return function incrementCounter() {
    return ++count;
  };
}

var c3 = counter3();
console.log(c3()); // 1
