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
      .then((response) => (this.todos = response.data));
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
  }

  setCurrentTodo(item) {
    this.currentTodo = item;
  }

  createTodo(item) {
    // this.todos.push don't change todos link and sorting alghorithm don't see changes
    this.todos = [...this.todos, { ...item, id: Date.now(), completed: false }];
  }

  changingTodo(item) {
    for (let prop of Object.keys(item)) {
      this.currentTodo[prop] = item[prop];
    }
    this.currentTodo = {};
    console.log(this.currentTodo);
  }

  removeTodo(path) {
    let property;
    path === "/todos" ? (property = "todos") : (property = "archive");
    this.trash.push(this.currentTodo);
    this[property] = this[property].filter((elem) => elem.id !== this.currentTodo.id);
    this.currentTodo = {};
  }

  delete() {
    this.trash = this.trash.filter((elem) => elem.id !== this.currentTodo.id);
    // this.currentTodo = {};
  }
}

export default new Todo();

// const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetching = useCallback(
//     async (...args) => {
//       setIsLoading(true);
//       try {
//         await callback(...args);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [callback]
//   );

//   const result = useMemo(() => [fetching, isLoading, error], [fetching, isLoading, error]);

//   return result;
