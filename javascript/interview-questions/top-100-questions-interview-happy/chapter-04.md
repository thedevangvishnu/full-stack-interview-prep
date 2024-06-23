## Chapter 4: Arrays

#### 01 - What are arrays in js? How to get, add and remove elements from arrays?

- An array is "a list of data items" that are stored in contiguous memory locations.
- It's a non-primitive data type in js that can contain a number of primitive and non-primitive values, that are present at suceessive memory location in memory (one item is stored after the other item in the next memory location).
- Arrays are "0-indexed", meaning the position of the first element starts from 0.

```js
// Example array
const array = [20, 10, 40, 30];
```

- To get, add and remove elements

```js
// to get an element, we access the use the index passed to []
console.log(array[0]); // 20
console.log(array[3]); // 30

// to add an element, we push methods like push, unshift methods when we need to modify the existing array
array.push(60); // pushes 60 to the last position and returns total length of the new array
array.unshift(2); // adds 2 to the first position and returns the new length of the array

// new value of array: [2, 20, 10, 40, 30, 60]

// to remove elements, we use pop(), shift(), splice(), delete methods
let popped = array.pop(); // "pops out" the "last" element of the array and returns its value
console.log(popped); // 60

let shifted = array.shift(); // "shifts out" the "first element" of the array and returns its value
console.log(shifted); // 2

delete array[0]; // deletes the value provided at the index and returns true. It leaves "undefined" holes and makes the position empty.

// new value of array: [empty, 10, 40, 30]

// restore the first value
array[0] = 20;
```

#### 02 - What is the `indexOf()` method of an array? What is the difference between `indexOf()` and `lastIndexOf()` mehtods

- `indexOf()` method is used to get the index of the "first occurence of an element" in an array.

- `lastIndexOf()` methods returns the index value of the "last occurence of an element" in an array.

- Both of these methods return -1, when element doesn't exist in the array.

```js
const arr = [20, 30, 20, 50, 20, 60];
arr.indexOf(20); // 0
arr.lastIndexOf(20); // 4

arr.indexOf(100); // -1
arr.lastIndexOf(100); // -1
```

#### 03 - What is the difference between `find()` and `filter()` methods of an array?

- `find()` method

  - return the "value of the first element" that satisfies a condition.

- `filter()` method
  - returns "an array containing all the elements" that satisfy a condition in an array.

#### 05 - What is the difference between `push()` and `concat()` methods of an array?

- `push()` method

  - "adds" elements (primitive/non-primitive) to the end of the array.
  - mutates the existing array.
  - return the new length of the array.

- `concat()` method
  - "appends" elements to an array (obviously at the end).
  - doesn't mutate the original array.
  - returns the new array with appended elements.

#### 06 - What is the difference between `pop()` and `shift()`mehtods of an array?

- `pop()` method

  - removes the "last" element of an array.
  - mutates the original array.
  - returns the value of the popped out element.

- `shift()` method

  - removes the "first" element of an array.
  - mutates the original array.
  - returns the value of the shifted out element.

#### 08 - What is the difference between `slice()`, `splice()` and `toSpliced()` methods of an array? \*\*

- `slice()` method

  - `slice(start, end)`: two parameters
    - start: position number at which slicing should be done
    - end: position number (excluding) until which slicing should be done.
  - used to "get the subset" of an array.
  - doesn't mutate the original array.
  - returns a new sliced array.

- `splice()` method

  - `splice(startPosition, deletCount, ...newElements)`: multiple parameters:
    - startPosition: index position at which splicing should be done.
    - deleteCount: number of elements that should be removed in the array starting at the startPosition
    - ...newElements: new elements that can passed and added to the array, depending upon the startPosition and deletCount
  - used to "add/remove/replace" elements in an array.
  - mutates the original array.
  - return the spliced values in a array.

- `toSpliced()` method

  - This is ES2022 addition that works like "splice" but with the non-mutation quality of "slice"
  - similar parameters as the `splice()`
  - used to add/remove elements in an array without mutating the original array.
  - returns the new array with new added/removed values

#### 09 - What is the difference between `map()` and `forEach()` methods of an array?

- `map()` method

  - used to iterate over each item of each array and perform a task (do something) and then return a new array with modified items.
  - iterates over each item and to do something.
  - returns an array with new modified items

- `forEach()` method\

  - used to iterate over each item and perform a task
  - just iteration and no return value (returns `undefined`)

#### 10 - How to sort and reverse an array()?

- `sort()` method

  - sorts the elements of an array in the ASCII order, which means, numbers are converted to strings and then they are compared for their ASCII values

#### 11 - What is "array destrcuturing" in js? \*\*

- It is a technique of extracting elements of an array and assign them to individual variables in a single statement.
- It's a ES6 addition

```js
const users = ["Devang", "Vishnu"];
const [firstUser, secondUser] = user;
console.log(firstUser); // Devang
console.log(secondUser); // Vishnu
```

#### 12 - What are array like objects in js? \*\*

- "Array-like" objects are those objects in JS that have some resemblance to arrays but do not contain native array methods. These are objects that have "indexed elements" and do have "length" property similar to array and we can get these inidividual elements using similar array-like syntax of arr[];

- These objects are not instance of `Array.prototype`

- Down below are some array like objects:

  - Strings: strings also have indexed elements (each character) and we do have a length property on strings.

  ```js
  const name = "Devang";
  console.log(name.length); // 6
  console.log(name[0]); // D
  ```

  - Arguments Object: The `arguments` object (a special keyword in js, used to refer to the passed arguments) inside a function is also such an object.

  ```js
  function example() {
    console.log(arguments); // ["Devang", 24, "Hello everyone!", ...andSomePrototypeInfo]
    console.log(arguments.length); // 3
    console.log(arguments[0]); // "Devang"
  }

  example("Devang", 24, "Hello everyone!");
  ```

  - NodeList: the value returned from emthods like `document.querySelectorAll()` is an array-like object known as NodeList.

    ```html
    <!DOCTYPE html>

    <html>
      <body>
        <div class="test">Div 1</div>
        <div class="test">Div 2</div>
        <div class="test">Div 3</div>

        <script>
          const nodeList = document.querySelectorAll(".test");
          console.log(nodeList); // NodeList(3) [div.test, div.test, div.test]
          console.log(nodeList.length); // 3
          console.log(nodeList[0]); // <div class="test">Div 1</div>
        </script>
      </body>
    </html>
    ```

  - HTMLCollection: the value returned from methods like `document.getElementsByTagName()` are also array-like objects and these are knows as HTMLCollection

  ```html
  <!DOCTYPE html>

  <html>
    <body>
      <button class="btn">button 1</button>
      <button class="btn">button 2</button>
      <button class="btn">button 3</button>

      <script>
        const buttonCollection = document.getElementsByTagName("button");
        console.log(buttonCollection); // HTMLCollection(3) [button.btn, button.btn, button.btn]
        console.log(buttonCollection.length); // 3
        console.log(buttonCollection[0]); // <button class="btn">button 1</button>
      </script>
    </body>
  </html>
  ```

#### 13 - How to convert an array-like objects into an array?

- Array.from()

- Spread Operator

- Array.prototype.slice.call()

#### 14 - What is the `at()` method in js? Why was it introduced and what problem does it solve? What is the difference between `at()` and `[]`?

- `at()` method in array, introducts in ES2022 addition and it's used to "get the element" value at a given index

- In some languages, the last element of an array/object/string is accessed using "Negative Bracket Indexing"

  ```js
  // in some languages (not in JS)
  const array = [10, 20, 30];
  console.log(array(-1)); // 30
  ```

  - But this is not posisble in JS, because `[]` syntax is used to acess the elements in array as well as objects. In JS, obj[-1] will return the value of the key -1 and not the last element. Hence, a new method was created to access elements at any index in iterables, even allowing for negative bracket indexing.

  ```js
  const array = [10, 20, 30, 40, 50];
  console.log(array.at(0)); // 10
  console.log(array.at(1)); // 20
  console.log(array.at(4)); // 50
  console.log(array.at(-1)); // 50 (allowing for negative bracket indexing)
  ```

#### 15 - Flatening an array

- In JS, we can turn a multi-dimensinal nested array, into unidimensional array (for one level at a time) using `.flat()` method
- return a new array and doesn't mutate the original one.

```js
const nestedArr = [1, 2, [3, 4], [5, 6], [7, [8, 9], [10, 11, 12]]];
const newArr = nestedArr.flat();
conosole.log(newArr); // [1, 2, 3, 4, 5, 6, 7, Array(2), Array(3)]
```
