## Chapter 1: Basics

#### 01 - What is JavaScript? What is the role of JavaScript Engine?

- JavaScript is a high-level, interpreted-scripting language that is used to add interactivity and dyanmic behavior to a website or a web application.

  - Scripting language: A type of programming language that is used to automate tasks that could alternatively be handled by a human resource. In the context of JS, these tasks/actions are what happens in a browser such as updating content on the DOM, handling events and network requests.
  - Website vs Web Application:
    - Website is a collection of static web pages or web pages with minimal interactivity. The content is not very dyanmic and doesn't have much funtionality and interactivity.
    - On the other hand, web application is more complex and contains a lot of dyanmic behavior and interactivity. The client and server communicate heavily in such application.

- JavaScript Engine is a program (or an interpreter) that runs in the browser and is responsible for parsing, interpreting and executing our js code.
  - V8: Chrome
  - SpiderMonkey: FireFox
  - JavaScript Core: Safari
  - Nitro: Edge

#### 02 - Client vs Server

- Client is the entity that makes a request to access "something" over a network while the Server is the entity that serves the request made by the client by sending a response for the asked "something" back to the client.
  - Client: web browser running in laptop, mobile, desktop
  - Server: machines/programs where the requested "somthing" is hosted/running

#### 03 - What is Scope in JS? \*\*

- Scope is the context within which variables and functions are accessible. It defines where a variable is present and limits its access to a certain context depending upon where it was defined.

- There are three types of scope in js:

  - Global

    - The scope of the global context (global function).
    - Cannot access functional or block-scope variables.

  - Functonal:

    - This scope allows to access the variables and functions within a function only.
    - Accessing variables with functional-scope, outside of the function is not possible and will throw error.
    - `var` is functional scoped.
    - Function-scope has also access global-scope variables but cannot access blocked scope variables.

  - Blocked:

    - This scope allows to access variables and functions within a block only.
    - `let` and `const` are blocked scoped.
    - Blocked-scope can access variables from functional and global scope.

#### 04 - What is the "type of" a variable in JS when it is declared without using the var, let or const keyword?

- `var` is the implicit type assigned to any varible that hasn't been declared with var, let or const explicity.

#### 05 - What is hoisting in JS?

- Hoisting is a mechanism in js that moves variables and function declaration to the top of their respective execution context that allow them to be accessed before they are even initialized (or defined, in case of functions).

- Hoisting is possible because of the memory creation phase of execution context. As soon as an exeuction context is created, all the variables and function declarations are assigned memory. Hence, at compile time, even if we access these variables or functions before they are initialized or defined, js already knows them and hence, we can access them.

- Hoisting works slightly different in case of variables declared with `let` and `const` and also for function expresssions.

#### 06 - What is JSON

- JSON (JavaScript Object Notation) is a lightweight, human-readable data interchange format that allows to transmit data between different systems.
  - "Data Interchange format" is a standardized way of encoding data so that it can be easily shared and trasmitted over different systems. It allows for consistent and accurate exchange across systems.
- Widely used in the web for transmiting data between the server and the client.

- `JSON.stringify()` : converts a native js object to JSON string
- `JSON.parse()` : converts a JSON string to native js object
- `.json()` : In the context of fetch() API, this method comes from the `Response` object. It reads the response stream and parses it as JSON and returns a promise that resolves to native JS object.
