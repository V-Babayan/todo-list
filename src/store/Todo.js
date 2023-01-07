import { makeAutoObservable } from "mobx";
import axios from "axios";

class Todo {
  todos = [];
  archive = [];

  trash = [];

  currentTodo = {};

  constructor() {
    makeAutoObservable(this);
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 10, _page: 1 },
      })
      .then((response) => (this.archive = response.data));
  }

  setArchive(items) {
    this.archive = items;
  }

  remove(item) {
    this.trash.push(item);
    this.archive = this.archive.filter((elem) => elem.id !== item.id);
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
  }

  setCurrentTodo(item) {
    this.currentTodo = item;
  }

  createTodo(item) {
    // this.archive.push don't change archive link and sorting alghorithm don't see changes
    this.archive = [...this.archive, { ...item, id: Date.now(), completed: false }];
  }

  changingTodo(item) {
    for (let prop of Object.keys(item)) {
      this.currentTodo[prop] = item[prop];
    }
    this.currentTodo = {};
    console.log(this.currentTodo);
  }

  removeTodo() {
    this.trash.push(this.currentTodo);
    this.archive = this.archive.filter((elem) => elem.id !== this.currentTodo.id);
    this.currentTodo = {};
  }
}

export default new Todo();
