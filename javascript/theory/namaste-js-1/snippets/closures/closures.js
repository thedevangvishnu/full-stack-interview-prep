function outmost() {
  var d = 40;

  function outer(b) {
    var a = 10;

    function inner() {
      console.log(a, b, c, d);
    }

    let c = 30;
    return inner;
  }
  return outer;
}

var a = 100;
var inner = outmost()(20); // or outer()();
inner(); // 10 20 30 40
