const input = document.getElementById("input");

function getData(counter, ...args) {
  console.log("Fetching data...", counter);
}

function debounce(fn, delay) {
  let timer;
  let count = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      count++;
      fn(count, ...args);
    }, delay);
  };
}

const debouncedGetData = debounce(getData, 300);

input.addEventListener("keyup", debouncedGetData);
