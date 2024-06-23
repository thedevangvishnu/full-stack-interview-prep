# Chapter 1: React Basics I

#### 01 - What is React? What is the role of React in software development?

- React is an open-source JavaScript library for creating user interfaces. It simplies the creation of building complex user interfaces by building modular, reusable and composable building blocks known as "components."

#### 02 - What are the key features of React?

- Virtual DOM
- Declarative and "output" based syntax
- Component based architecture
- HTML-Like syntax (JSX)
- Huge ecosystem
- React Hooks

#### 03 - Waht is DOM? What is the difference between HTML and DOM?

- Document Object Model (DOM) is a Web-API that creates a "tree-like representation" of markup documents (HTML or XML documents) that comprise of "nodes" made up the elements defined inside in the markup document. It allows JavaScript to dyanmically access and manipulate the structure, content and style of the document.

- HTML is a markup language that provides structure to a document that is rendered on the web while DOM is a Web-API that takes that HTML document and creates its tree like representation in a browser.

#### 04 - What is Virtual DOM? Difference between DOM and Virtual DOM?

- Virtual DOM is a programming concept where a virtual tree-like representation of UI is kept in memory and synced with the actual DOM. This is one of the key concepts in React and it is what makes React extremely powerful.

- It is a lightweight copy of the actual DOM, which React uses to resolve the conflict with the real DOM, allowing it to update only the necessary parts of the actual DOM.

- Any change in user interface is first represented in virtual DOM, where React calculates the differences with the previous representation adn then goes onto reconciling it with the actual DOM.

#### 05 - What are React Components? What are the main elements of it?

- React Components are resuable, composable and stateful building-blocks of UI. These are primarily classes or functions that return JSX

#### 06 - What is SPA (Single Page Application)?

- SPAs are a type of web application that return a single HTML file, in which all of the interactions and dynamic updation happens without hard reload. In such applicaton leverage the power of JS to dyanmically update the content, handle navigation, respond to events and handle interactions without hard-loading the page, hence creating a very seamless experience.

#### 07 - What are the 5 advantages of React? \*\*

Advantages can be formulated using the core features of React.

- Lightweight and extremely fast (Virtual DOM)
- Can be used to create large and complex SPAs (Component-based architecture and JSX)
- Open source and free to use, massive ecosystem. Supports a lot of other helpful packages (Ecosystem and community)
- Cross paltform (Core concepts of React can be used to create web/mobile application using ReactDOM or React Native)

#### 08 - What are the disadvantages of React?

- Major learning curve
- Complexity in state management in large and complex applications
- Hard for beginners to understand react optimization techniques and performance related issues.
- SEO challenge
- If you remove build tools that provide React support (like CRA and Vite), then settingup React can be daunting as it requires heavy knowledge for configuring tools like Babel and Webpack.

#### 09 - What is the role of JSX in React?

#### 10 - What is the difference between "declarative" and "imperative" system?

- Declarative syntax is
  - telling "what"
  - using JSX to just "describe" what the UI outcome needs to be and what should be rendered on the DOM.
- Imperative is
  - telling "how"
  - using React.createElement() calls to define "how" should React go about creating UI and update the DOM
