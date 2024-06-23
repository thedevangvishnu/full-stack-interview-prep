// "use strict";

// this is global space

console.log(this); // Window object

// this inside a function

function check() {
  console.log(this);
}

check();
// in strcit mode: undefined
// in non-strict mode: Window object

// this keyword value depends upon how `this` is being called

window.check(); // Window object

// the value of "this" inside an object's method

const user = {
  name: "Devang",
  skills: {
    skill: "JS",
    years: 1,

    showSkills() {
      console.log(
        `${user.name} has skill of ${this.skill} with ${this.years} of experience!`
      );
    },
  },

  showUser() {
    console.log(this);
  },
};

user.skills.showSkills();
user.showUser();

// call, bind, apply methods

const student = {
  name: "Devang",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Vishnu",
};

student.printName.call(student2);

// this inside arrow function

// example 1
const developer = {
  name: "Devang",
  skills: {
    skill: "JS",
    printSkill: () => {
      console.log(this);
    },
  },
  printName: () => {
    console.log(this);
  },
};

developer.printName(); // Window object
developer.skills.printSkill(); // Window object

// example 2
const developer2 = {
  name: "Devang",
  skills: {
    skill: "JS",
    printSkill() {
      const print = () => {
        console.log(this);
      };
      print();
    },
  },
  printName: function () {
    const print = () => {
      console.log(this);
    };
    print();
  },
};

developer2.printName(); // developer2 object
developer2.skills.printSkill(); // skills object

// example 3
function local() {
  const user = {
    name: "Amika",
    printName: () => {
      console.log(this);
    },
  };

  user.printName();
}

local();

// example 4
function local2() {
  const user = {
    name: "Amika",
    printName: function () {
      const print = () => {
        console.log(this);
      };
      print();
    },
  };

  user.printName();
}

local2();

// example 5

const arrowLocal = () => {
  const user = {
    name: "Amika",
    printName: () => {
      console.log(this);
    },
  };

  user.printName();
};

arrowLocal(); // Window object

// example 6

const arrowLocal2 = () => {
  const user = {
    name: "Amika",
    printName: function () {
      const print = () => {
        console.log(this);
      };
      print();
    },
  };

  user.printName();
};

arrowLocal2(); // Window object
