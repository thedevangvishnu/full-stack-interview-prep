import React, { useState, useEffect, useRef } from "react";

import {
  Copy,
  Delete,
  DeleteIcon,
  Edit,
  File,
  Folder,
  Trash,
} from "lucide-react";

const FileExplorer = ({ explorerData, level = 0, handleInsert }) => {
  const [expand, setExpand] = useState(false);
  const [toggleContextMenu, setToggleContextMenu] = useState(false);
  const [newItem, setNewItem] = useState({ visible: false, isFolder: false });

  const contextMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setToggleContextMenu(false);
    }
  };

  const createNewItem = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setNewItem({
      visible: true,
      isFolder,
    });
    setToggleContextMenu(false);
  };

  const onAddNewItem = (e, itemId) => {
    if (e.target.value && e.keyCode === 13) {
      setNewItem({ ...newItem, visible: false });
      handleInsert(itemId, e.target.value, newItem.isFolder);
    }
  };

  useEffect(() => {
    if (toggleContextMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleContextMenu]);

  return (
    <div className="explorer">
      <div
        className="explorer__item"
        style={{ paddingLeft: `${level ? level * 20 + 20 : 20}px ` }}
        onClick={() => setExpand(!expand)}
        onContextMenu={(e) => {
          e.preventDefault();
          setToggleContextMenu(true);
        }}
      >
        {/* icon of current item */}
        <div className="item__icon">
          {explorerData.isFolder ? (
            <Folder className="icon" />
          ) : (
            <File className="icon" />
          )}
        </div>
        {/* name of current item */}
        <div className="item__name">
          <p>{explorerData.name}</p>
        </div>

        {/* popup on right click */}
        {toggleContextMenu && (
          <div className="item__popup" ref={contextMenuRef}>
            {explorerData.isFolder && (
              <>
                <div
                  className="new__folder popup__item"
                  onClick={(e) => createNewItem(e, true)}
                >
                  <Folder className="icon" />
                  <span>New Folder</span>
                </div>
                <div
                  className="new__file popup__item"
                  onClick={(e) => createNewItem(e, false)}
                >
                  <File className="icon" />
                  <span>New File</span>
                </div>
              </>
            )}

            <div className="divider"></div>
            <div className="popup__item">
              <Edit className="icon" />
              <span>Rename</span>
              <span className="short__cut">F2</span>
            </div>
            <div className="popup__item">
              <Trash className="icon" />
              <span>Delete</span>
              <span className="short__cut">Del</span>
            </div>
          </div>
        )}
      </div>
      {/* children items of explorerData object */}
      {newItem.visible && (
        <div
          className="explorer__item"
          style={{ paddingLeft: `${level === 0 ? 40 : level * 20 + 40}px ` }}
        >
          <div className="item__icon">
            {newItem.isFolder ? (
              <Folder className="icon" />
            ) : (
              <File className="icon" />
            )}
          </div>
          <input
            type="text"
            autoFocus
            onBlur={() => setNewItem({ visible: false, isFolder: false })}
            onKeyDown={(e) => onAddNewItem(e, explorerData.id)}
          />
        </div>
      )}

      {explorerData.isFolder &&
        expand &&
        explorerData.items.map((itemData) => (
          <div className="explorer" key={itemData.id}>
            <FileExplorer
              explorerData={itemData}
              level={level + 1}
              handleInsert={handleInsert}
            />
          </div>
        ))}
    </div>
  );
};

export default FileExplorer;
