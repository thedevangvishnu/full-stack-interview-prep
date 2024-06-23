## Chapter 2: Variables & Data Types

#### 01 - What are variables? What is the difference between var, let and const keywords? \*\*

- Variables are "named placeholders" store any data/value.
- Variables can be declared with var, let const const.

  - var:
    - functional scope
    - hoisted to the top and can be accessed before initialization.
    - variables with `var` can be declared without initialization.
    - `var` is assinged implicity to variables that are not assigned with var, let or const keyword explicity.
  - let:

    - blocked scope
    - hoisted but TDZ restricts from accessing before initialization
    - variables with `let` can be declared without initialization.

  - const:
    - blocked scope
    - hoisted but TDZ restricts from accessing before initialization.
    - variables declared with `const` cannot change their values after initialization.
    - variables with `const` cannot be declared without initialization. Doing so, throws a `SyntaxError`.

#### 02 - What are data types in JS? What is the difference between primitive and non-primitive data type? \*\*

- In programming, we work with variety of values. Some are numbers, other character, others are yes/no values like true/false. Data types are the "different categories of values" that we use while programming.

- In JS, we have 6 primitive and a lot of non-primitive data types:

  - Primitive Data Types:

    - Number, String, Boolean, BigInt, undefined, null
    - Can hold only single values.
    - These are immutable and their values cannot be changed.

  - Non-primitive Data Types:

    - Some of them:

      - Objects: A group of related data and functionality.
      - Arrays: A group of data items stored in contiguous memory location.
      - Functions: A piece of code that performs a particular task.
      - Date: A derived data-type from the native Object type that deals with date and time.
      - RegExp: A data-type used for pattern maching.
      - Map: A collection of "keyed data items." Similar to objects but different in ways for how keys are handled.
      - Set: A collection of unique items. They are like Arrays with only unique items.

    - can hold a lot of values, which can be primitive and non-primitive.
    - are mutable and hence their values can be changed.

#### 03 - What is the difference between null and undefined in JS?

- `undefined` is a data-type in js which means that a particular variable hasn't been assigned any value explicitly. There is no value that is defined for that variable for now. In future, you may reassign it some other value.

  - assigned to variables without initialization
  - return value for functions that do no explicitly return anything.

- `null` is a data-type in js which when assigned to a variable means that the variable is valid but has an empty value for now. In future, it could be reassigned to any other value.
  - explicit assignment to a varible
  - used to clear or reset valuesss

#### 04 - What is the use of typeof operator?

- `typeof` operator is used to get the data-type of the variable or a value
- use it in front of a varible or a value to get its data-type

#### 05 - What is type coercion in JS?

- Type coercion is the automatic conversion of one data type to another during certain operations or comparisons
