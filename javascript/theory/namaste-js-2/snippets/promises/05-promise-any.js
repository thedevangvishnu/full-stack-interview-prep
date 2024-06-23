// Play with Promise.any();

const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P1 FulFilled"), 2000);
  setTimeout(() => reject("P1 Rejected"), 2000);
});
const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 FulFilled"), 5000);
  setTimeout(() => reject("P2 Rejected"), 5000);
});
const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P3 FulFilled"), 3000);
  setTimeout(() => reject("P3 Rejected"), 3000);
});

Promise.any([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((err) => {
    console.error(err);
    console.error(err.errors);
  });
