import React, { useState } from "react";

import { File, Folder } from "lucide-react";

const FileExplorer = ({ explorerData, level = 0 }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="explorer">
      <div
        className="explorer__item"
        style={{ paddingLeft: `${level ? level * 20 + 20 : 20}px ` }}
        onClick={() => setExpand(!expand)}
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
