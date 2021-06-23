import { Todo } from "./todo";

export class App {
  constructor() {
    this.message = "Hello World!";
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Joshua";
    config.map([
      { route: "", name: "home", moduleId: "index", title: "home" },
      { route: "about", name: "about", moduleId: "about", title: "about us" },
    ]);
  }
}
