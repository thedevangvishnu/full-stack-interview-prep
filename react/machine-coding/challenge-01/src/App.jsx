import React, { useState } from "react";

import EXPLORER_DATA from "./data/data";

import "./App.css";
import FileExplorer from "./components/FileExplorer";

const App = () => {
  const [explorerData, setExplorerData] = useState(EXPLORER_DATA);

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar__title">
          <h2>File explorer</h2>
        </div>
        <FileExplorer explorerData={explorerData} level={0} />
      </div>
      <div className="main">
        <h2>Main Window</h2>
      </div>
    </div>
  );
};

export default App;
