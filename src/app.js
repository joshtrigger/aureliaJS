import { Todo } from "./todo";

export class App {
  constructor() {
    this.message = "Hello World!";
    this.todoList = [];
    this.todoList.push(new Todo("Clean my room"));
    this.todoList.push(new Todo("Do the dishes"));
    this.todoList.push(new Todo("Wash the car"));
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem = "";
  }

  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
