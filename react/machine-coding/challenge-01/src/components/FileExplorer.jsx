import React, { useEffect, useRef, useState } from "react";
import { Folder, File, FolderPlus, FilePlus } from "lucide-react";

const FileExplorer = ({ explorerData, handleInsert = () => {} }) => {
  const [expand, setExpand] = useState(false);
  const [newItem, setNewItem] = useState({
    visible: false,
    isFolder: false,
  });
  const inuptRef = useRef(null);

  const createNewItem = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setNewItem({ visible: true, isFolder });
    setTimeout(() => {
      if (inuptRef.current) {
        console.log("focus");
        inuptRef.current.focus();
      }
    }, 0);
  };

  const onAddNewItem = (e, folderId, isFolder) => {
    if (e.target.value && e.keyCode === 13) {
      setNewItem({ ...newItem, visible: false });
      handleInsert(folderId, e.target.value, isFolder);
    }
  };

  //   const onAddNewItem = (e, folderId, isFolder) => {
  //     if (e.target.value && e.keyCode === 13) {
  //       setNewItem({ ...newItem, visible: false });
  //       handleInsert(folderId, e.target.value, isFolder);
  //     }
  //   };

  if (explorerData.isFolder) {
    return (
      <>
        {/* main item with name and buttons */}
        <div className="explorer__item" onClick={() => setExpand(!expand)}>
          <span className="icon__container">
            <Folder className="icon" />
          </span>
          <p>{explorerData.name}</p>

          <div className="buttons">
            <button onClick={(e) => createNewItem(e, true)}>
              <FolderPlus className="icon" />
            </button>
            <button onClick={(e) => createNewItem(e, false)}>
              <FilePlus className="icon" />
            </button>
          </div>
        </div>

        {/* expanded child section, if any or if new item needs to be added */}
        <div
          className="explorer__children"
          style={{
            paddingLeft: "2rem",
            display: `${expand ? "block" : "none"}`,
          }}
        >
          {/* new item */}
          {newItem.visible && (
            <div className="explorer__item">
              <span className="icon__container">
                {newItem.isFolder ? (
                  <Folder className="icon" />
                ) : (
                  <File className="icon" />
                )}
              </span>
              <input
                type="text"
                ref={inuptRef}
                onBlur={() => setNewItem({ ...newItem, visible: false })}
                onKeyDown={(e) =>
                  onAddNewItem(e, explorerData.id, newItem.isFolder)
                }
              />
            </div>
          )}

          {explorerData.items?.map((expItem) => (
            <div key={expItem.id} className="file__explorer">
              <FileExplorer
                key={expItem.id}
                explorerData={expItem}
                handleInsert={handleInsert}
              />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="explorer__item">
        <span className="icon__container">
          <File className="icon" />
        </span>
        <p>{explorerData.name}</p>
      </div>
    );
  }
};

export default FileExplorer;
