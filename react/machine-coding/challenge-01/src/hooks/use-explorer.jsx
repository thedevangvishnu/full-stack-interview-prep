import { v4 as uuidv4 } from "uuid";

function useExplorer() {
  // add functionality
  let added = false;
  function insertItem(currentObj, itemId, newItemName, isFolder) {
    if (currentObj.id === itemId && currentObj.isFolder) {
      currentObj.items.unshift({
        id: uuidv4(),
        name: newItemName,
        isFolder,
        items: [],
      });

      added = true;
      return currentObj;
    }

    for (const subObj of currentObj.items) {
      if (added) {
        added = false;
        break;
      }
      insertItem(subObj, itemId, newItemName, isFolder);
    }

    return currentObj;
  }

  return { insertItem };
}

export default useExplorer;
