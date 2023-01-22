export const Paths = {
  TODOS: "/todos",
  ARCHIVES: "/archives",
  TRASH: "/trash",
};

export const options = [
  { value: "title", name: "Title" },
  { value: "description", name: "Description" },
  { value: "created", name: "Created date" },
  { value: "expected", name: "Expected date" },
  { value: "priority", name: "Priority" },
];

export const headingInEmpty = {
  [Paths.TODOS]: "Don't have tasks",
  [Paths.ARCHIVES]: "Archive is empty",
  [Paths.TRASH]: "Trash is empty",
};

export const Titles = {
  [Paths.ARCHIVES]: "Archive",
  [Paths.TRASH]: "Trash",
  [Paths.TODOS]: "Todo list",
  "/": "Main Page",
};
