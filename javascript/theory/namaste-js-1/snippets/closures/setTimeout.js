// Case 1

function fn1() {
  var i = 1;

  setTimeout(function () {
    console.log(i);
  }, 2000);
}

// fn1();
// 1 after 2sec

// Case 2

function fn2() {
  var i = 2;

  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("hello world");
}

// fn2();
// hello world
// 2 after 3sec

// Case 3

function fn3() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("hello world");
}

// fn3();
/*
    hello world
    6 (after 1sec) 
    6 (after 2sec) 
    6 (after 3sec) 
    6 (after 4sec) 
    6 (after 5sec) 

    explanation:
        - 

*/

// Case 4

function fn4() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("hello world");
}

// fn4();
/*
    hello world
    1 (after 1sec) 
    2 (after 2sec) 
    3 (after 3sec) 
    4 (after 4sec) 
    5 (after 5sec) 

    explanation:
    - 
  */

// Case 5

function fn5() {
  let i = 0;

  while (i <= 5) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);

    i++;
  }

  console.log("hello world");
}

// fn5();
/*
    hello world
    6 (after 1sec) 
    6 (after 2sec) 
    6 (after 3sec) 
    6 (after 4sec) 
    6 (after 5sec) 
  
    explanation:
      - 
    */

// Case 6

function fn6() {
  for (var i = 1; i <= 5; i++) {
    function loop(num) {
      setTimeout(function () {
        console.log(num);
      }, num * 1000);
    }

    loop(i);
  }

  console.log("hello world");
}

fn6();
/*
    hello world
    1 (after 1sec) 
    2 (after 2sec) 
    3 (after 3sec) 
    4 (after 4sec) 
    5 (after 5sec) 
    
    explanation:
        - 
*/
