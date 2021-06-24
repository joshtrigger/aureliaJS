import { PLATFORM } from "aurelia-pal";
import moment from "moment"

export class App {
  constructor() {
    this.message = `Hello ${moment().format('YYYY')}!`;
  }

  attached() {
    console.log('init')
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Hello World!";
    config.map([
      {
        route: "",
        name: "home",
        moduleId: PLATFORM.moduleName("index"),
        title: "Home",
      },
      {
        route: "about",
        name: "about",
        moduleId: PLATFORM.moduleName("about"),
        title: "About us",
      },
      {
        route: "todo/:id",
        name: "todo",
        moduleId: PLATFORM.moduleName("todo"),
        title: "Todo",
      },
    ]);
  }
}
