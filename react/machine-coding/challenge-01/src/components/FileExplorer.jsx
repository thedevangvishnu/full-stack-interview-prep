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

const FileExplorer = ({ explorerData, level = 0 }) => {
  const [expand, setExpand] = useState(false);
  const [toggleContextMenu, setToggleContextMenu] = useState(false);

  const contextMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setToggleContextMenu(false);
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <Folder className="icon" />
                  <span>New Folder</span>
                </div>
                <div className="new__file popup__item">
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

      {explorerData.isFolder &&
        expand &&
        explorerData.items.map((itemData) => (
          <div className="explorer" key={itemData.id}>
            <FileExplorer explorerData={itemData} level={level + 1} />
          </div>
        ))}
    </div>
  );
};

export default FileExplorer;
