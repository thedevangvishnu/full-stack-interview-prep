import React, { useEffect, useState } from "react";

import EXPLORER_DATA from "./data/data";
import FileExplorer from "./components/FileExplorer";
import useExplorer from "./hooks/use-explorer";

import "./App.css";

const App = () => {
  const [explorerData, setExplorerData] = useState(EXPLORER_DATA);
  const { insertItem, deleteItem, renameItem } = useExplorer();

  const handleInsert = (itemId, newItemName, isFolder) => {
    const newExplorerData = insertItem(
      explorerData,
      itemId,
      newItemName,
      isFolder
    );
    setExplorerData(newExplorerData);
  };

  // useEffect(() => {
  //   console.log("Object:", explorerData);
  // }, [explorerData]);

  const handleDelete = (itemId) => {
    const newExplorerData = deleteItem(explorerData, itemId);
    setExplorerData(newExplorerData);
  };

  const handleRename = (itemId, newName) => {
    const newExplorerData = renameItem(explorerData, itemId, newName);
    setExplorerData(newExplorerData);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar__title">
          <h2>File explorer</h2>
        </div>
        <FileExplorer
          explorerData={explorerData}
          level={0}
          handleInsert={handleInsert}
          handleDelete={handleDelete}
          handleRename={handleRename}
        />
      </div>
      <div className="main">
        <h2>Main Window</h2>
      </div>
    </div>
  );
};

export default App;
