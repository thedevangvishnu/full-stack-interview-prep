const student = {
  name: "Devang",
  age: 24,
};

function introduce(greet, message) {
  console.log(
    `${greet}, My name is ${this.name} and I'm ${this.age}! ${message}`
  );
}

const intro = introduce.bind(student, "Hello", "How are you doing?");
intro();

// implement polyfill for bind method

if (!Function.prototype.customBind) {
  Function.prototype.customBind = function (...args) {
    const fn = this;
    const restArgs = args.slice(1);

    return function (...args2) {
      if (args.length > 0) {
        fn.apply(args[0], [...restArgs, ...args2]);
      } else {
        const params = args2.slice(1);
        fn.apply(args2[0], params);
      }
    };
  };
}

const intro2 = introduce.customBind();
intro2(student, "Hii", "What's happening?");

// practice polyfill for bind

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (...args) {
    const fn = this;
    const initialObj = args[0];
    const initialArgs = args.slice(1);

    return function (...args2) {
      const finalObj = args.length > 0 ? initialObj : args2[0];
      const finalArgs =
        args.length > 0 ? [...initialArgs, ...args2] : args2.slice(1);

      fn.apply(finalObj, finalArgs);
    };
  };
}

const intro3 = introduce.myBind();
intro3(student, "Hey everyone", "What's up?");
