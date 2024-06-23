```js
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

/*
x from one 20
x from two 30
x from one 40
30

*/
```
