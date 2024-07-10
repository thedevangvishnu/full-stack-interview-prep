import { useState } from "react";
import EXPLORER_DATA from "./data/data";
import FileExplorer from "./components/FileExplorer";

import "./App.css";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [fileExplorerData, setFileExplorerData] = useState(EXPLORER_DATA);
  const { insertNode } = useTraverseTree();

  const handleInsert = (folderId, newItemName, isFolder) => {
    const updatedTree = insertNode(
      fileExplorerData,
      folderId,
      newItemName,
      isFolder
    );
    setFileExplorerData(updatedTree);
  };

  // const handleInsert = (folderId, newItemName, isFolder) => {
  //   const updatedTree = insertNode(
  //     fileExplorerData,
  //     folderId,
  //     newItemName,
  //     isFolder
  //   );
  //   setFileExplorerData(updatedTree);
  // };

  return (
    <>
      <h2 className="title">File explorer</h2>
      <div className="file__explorer">
        <FileExplorer
          explorerData={fileExplorerData}
          handleInsert={handleInsert}
        />
      </div>
    </>
  );
}

export default App;
