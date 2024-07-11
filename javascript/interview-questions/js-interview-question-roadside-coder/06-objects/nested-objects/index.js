let explorer = {
  id: 123,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 123.1,
      name: "public",
      isFolder: true,
      // items: [],
      items: [
        {
          id: 123.11,
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: 123.111,
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: 123.112,
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: 123.12,
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 123.2,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 123.21,
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: 123.22,
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: 123.23,
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 123.3,
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

// Create a function that takes in the itemId and returns the item details
function getDetails(currentObj, itemId) {
  let foundItem = null;
  if (currentObj.id === itemId) {
    foundItem = currentObj;
    return foundItem;
  }

  for (const subObj of currentObj.items) {
    foundItem = getDetails(subObj, itemId);

    if (foundItem) break;
  }

  return foundItem;
}

// console.log("Item:", getDetails(explorer, 123.111));

// 2 - Create a function that allows to add a new item at the correct position.
let inserted = false;
function insertNewItem(currentObj, itemId, newItemName, isFolder) {
  if (currentObj.id === itemId && currentObj.isFolder) {
    currentObj.items.unshift({
      id: new Date().getTime(),
      name: newItemName,
      isFolder,
      items: [],
    });

    inserted = true;
  }

  // let newItems = [];
  for (let subObj of currentObj.items) {
    insertNewItem(subObj, itemId, newItemName, isFolder);
    if (inserted) break;
  }

  return currentObj;
}
// console.log(insertNewItem(explorer, 123.11, "newFolder", true));

// 3 - Create a function that allows to delete an existing item

function deleteItem(currentObj, itemId) {
  if (currentObj.id === itemId) {
    currentObj = null;
    deleted = true;

    return currentObj;
  }

  let items = [];
  for (const subObj of currentObj.items) {
    if (deleteItem(subObj, itemId)) {
      items.push(subObj);
    }
  }

  currentObj.items = items;
  return currentObj;
}

// console.log("Data:", deleteItem(explorer, 123.112));

// 4 - Create a function to update the name of an existing item

let updated = false;
function updateItem(currentObj, itemId, updatedName) {
  if (currentObj.id === itemId) {
    currentObj.name = updatedName;
    updated = true;

    return currentObj;
  }

  for (const subObj of currentObj.items) {
    console.log("Sub obj id:", subObj.id);
    updateItem(subObj, itemId, updatedName);

    if (updated) break;
  }

  return currentObj;
}

// console.log(updateItem(explorer, 123.23, "myStyles.scss"));
