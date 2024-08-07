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

    return { ...currentObj };
  }

  function deleteItem(currentObj, itemId) {
    if (currentObj.id === itemId) {
      currentObj = null;
      return currentObj;
    }

    let items = [];

    for (const subObj of currentObj.items) {
      if (deleteItem(subObj, itemId)) {
        items.push(subObj);
      }
    }

    currentObj.items = items;
    return { ...currentObj };
  }

  let updated = false;
  function renameItem(currentObj, itemId, newName) {
    if (currentObj.id === itemId) {
      currentObj.name = newName;
      updated = true;

      return currentObj;
    }

    for (const subObj of currentObj.items) {
      if (updated) {
        updated = false;
        break;
      }
      renameItem(subObj, itemId, newName);
    }

    return { ...currentObj };
  }

  return { insertItem, deleteItem, renameItem };
}

export default useExplorer;
