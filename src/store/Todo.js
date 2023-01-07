import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];
  archive = [
    {
      id: 1,
      title: "Todos project is completed again over of dead line",
      description: "Create react app 'Todos list'.",
      created: new Date(2022, 2, 12),
      expected: new Date(2022, 3, 12),
      priority: "low",
      isActive: true,
    },
    {
      id: 2,
      title: "Calculator",
      description: "Create react app 'Calculator'.",
      created: new Date(2022, 2, 13),
      expected: new Date(2022, 2, 18),
      priority: "high",
      isActive: false,
    },
    {
      id: 3,
      title: "Physics",
      description: "Run 5kms.",
      created: new Date(2022, 2, 18),
      expected: new Date(2022, 3, 1),
      priority: "medium",
      isActive: true,
    },
    {
      id: 4,
      title: "Practics",
      description: "Practics react styled-components.",
      created: new Date(2022, 2, 10),
      expected: new Date(2022, 2, 15),
      priority: "low",
      isActive: false,
    },
  ];
  trash = [];
  constructor() {
    makeAutoObservable(this);
  }

  remove(item) {
    this.trash.push(item);
    this.archive = this.archive.filter((elem) => elem.id !== item.id);
  }
}

export default new Todo();
