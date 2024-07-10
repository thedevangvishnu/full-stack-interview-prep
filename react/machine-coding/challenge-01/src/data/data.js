import { v4 as uuidv4 } from "uuid";

const explorer = {
  id: uuidv4(),
  name: "root",
  isFolder: true,
  items: [
    {
      id: uuidv4(),
      name: "public",
      isFolder: true,
      items: [
        {
          id: uuidv4(),
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: uuidv4(),
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: uuidv4(),
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: uuidv4(),
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      items: [
        {
          id: uuidv4(),
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: uuidv4(),
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: uuidv4(),
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
