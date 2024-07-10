import { v4 as uuidv4 } from "uuid";

const useTraverseTree = () => {
  const insertNode = (tree, folderId, newItemName, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: uuidv4(),
        name: newItemName,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items?.map((item) =>
      insertNode(item, folderId, newItemName, isFolder)
    );

    return { ...tree, items: latestNode };
  };

  return { insertNode };
};

export default useTraverseTree;
