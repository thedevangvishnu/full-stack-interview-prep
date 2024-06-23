# Hoisting

- It is a mechanism in Javascript to put all the variable declarations and function declarations on top in their respective execution context during the compilation phase (technically during the memory creation phase). This allows to access them before they are even decalred when the code is executed.

- In the creation phase of execution context, all the variables and functions within the context are allocated memory and assigned values (variables are assigned undfined and functions are assigned their activation object (arguments, parameters, declaration)).

- Hoisting is only possible for variables declared with `var` and function declarations. Not possible for variables declared with `let` or `const` and function expresssion (arrow functions). Both the latter throws `ReferenceError` or even typeError

  - In memory creation phase, arrow functions behave just like other variables decalred with var
