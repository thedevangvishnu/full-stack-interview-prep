# Chapter 2: React Basics II

#### 01 - What is Arrow Functions Expression in JSX?

- Arrow function Expressions are nothing but React components that written using the arrow function syntax.

#### 02 - How to setup React first project?

- Install nodejs
- Install code editor
- Use CRA: npm create-react-app nameOfApp
  - or use Vite: npm create vite@latest nameOfApp
- install node modules: npm install
- Run dev server: npm run dev

#### 03 - What are the main files in a react prjoect?

-

#### 04 - How does react app load and display components in browser? \*\*

- When a client makes a request to a React-based website/web-application, then the server responds with a bundle of index.html file, css files, js files and public assets such as images, videos, or other media files.
- The index.html file contains script tags which link to those sent js files and starts loading these js file as soon as the index.html is rendered.
- Loading js files initializes React and React detects the element node (div with id of "root" or "app") and mounts the rendered App component which contains all the other components.
- Further changes to the UI are handled internally by React.

#### 05 - What is the difference between React and Angular?

- React
  - library
  - faster
  - greater demand
  - needs other dependencies to do complex tasks
- Angular
  - framework
  - slower than react
  - lesser demand
  - contains default solutions/utilities for many complex tasks (routing, working with forms, etc)

#### 06 - What are the other JS frameworks other than React?

- Angular
- Vuejs
- Nextjs
- Emberjs

#### 07 - Is react a framework or a library? What is the difference?

- React is a JS library.

- Module

  - A module is "an isolated piece of code" that encapsulates a particular functionality and can be anywhere inside an application.
  - EJS or CommonJS syntax for importing/exporting modules.

- Package

  - A bundle of code that contains one or more libraries, modules or other required files. A package is distributed using a package manager.
    - npm for nodejs/js
    - pip for Python
  - It is through successfull installation of a package, that we get access to those libraries and modules.

- Library

  - A library is a collection of pre-written code that you can call and use inside your application.
  - It is designed to perform specific tasks and to offer specific functionalites.
  - More flexible, less opinionated than framework
  - Often needs more dependencies to achieve complex tasks.
  - Reactjs, jQuery, Lodash

- Framework

  - A framework is a comprehensive collection of libraries, modules and tools that provide you a definitive structure to develop applications.
  - Stricter in structure and syntax (opinionated)
  - Lesser flexibility
  - Offers in-built solution to handle complex problems of routing, state management, etc.
  - AngularJS, NextJS

#### 08 - How react provides resuability and composition?

#### 09 - Define these terms: "state", "stateless", "stateful" and "state management"

- State

  - State refers to "data" or "memory snapshot" of the component at a particular moment of time. It contains the "information" that determines the behavior and rendering of the component.

- Stateless

  - Stateless components are those components that do not hold or manage their own state. These components just receive data (via props) that they use and work with to render the UI.

- Stateful

  - Stateful components are those components that hold and manage they own state internally. These components contain information that determines the behavior of that particular component.

- State Management
  - It refers to the process of managing and maintaining the state of an applicaton. It involves handling how the state is created, modified and shared across various parts of the application and how all of this will impact UI.

#### 10 - What are Props? How are they different from state?

- Props are the read-only properties that are passed to a child component by the parent component. These are immutable and can only be used directly inside the child component.
