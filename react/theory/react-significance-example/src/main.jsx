import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const renderHTMLRoot = () => {
  document.getElementById("root2").innerHTML = `
  <div>Hello</div>
  <input />
  <pre>${new Date().toLocaleTimeString()}</pre>
  `;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setInterval(renderHTMLRoot, 1000);
