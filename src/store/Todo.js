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
      .then((response) => {
        this.todos = response.data;
      });
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
  }

  setCurrentTodo(item) {
    this.currentTodo = item;
  }

  archivingTodo() {
    this.archive.push(this.currentTodo);
    this.todos = this.todos.filter((elem) => elem.id !== this.currentTodo.id);
    this.currentTodo = {};
  }

  createTodo(item) {
    // this.todos.push don't change todos link and sorting alghorithm don't see changes because object link don't changed
    this.todos = [...this.todos, { ...item, id: Date.now(), completed: false }];
  }

  changingTodo(item) {
    for (let prop of Object.keys(item)) {
      this.currentTodo[prop] = item[prop];
    }
    this.currentTodo = {};
  }

  removeTodo(path) {
    let colection;
    path === "/todos" ? (colection = "todos") : (colection = "archive");
    this.trash.push(this.currentTodo);
    this[colection] = this[colection].filter((elem) => elem.id !== this.currentTodo.id);
    this.currentTodo = {};
  }

  delete() {
    this.trash = this.trash.filter((elem) => elem.id !== this.currentTodo.id);
    this.currentTodo = {};
  }

  recoverTodo(path) {
    let colection;
    path === "/trash" ? (colection = "trash") : (colection = "archive");
    this.todos.push(this.currentTodo);
    this[colection] = this[colection].filter((item) => item.id !== this.currentTodo.id);

    this.currentTodo = {};
  }
}

export default new Todo();
