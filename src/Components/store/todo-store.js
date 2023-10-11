import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

class TodoStore {
  todos = []

  constructor() {
    makeAutoObservable(this);
  }

  addNewTodo(title) {
    let newTodo = {
      id: nanoid(),
      title,
      completed: false,
    };

    this.todos = [...this.todos,newTodo];
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    //в массив попадут те элементы которые не равны removeTodo(id)
  }

  completedTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  clearAllTodo() {
    this.todos = [];
  }
}

export default TodoStore = new TodoStore()