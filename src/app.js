import { inject } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import moment from "moment";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(EventAggregator)
export class App {
  constructor(EventAggregator) {
    this.message = `Hello ${moment().format("YYYY")}!`;
    this.ea = EventAggregator;
  }

  attached() {
    this.ea.subscribe("header", (text) => {
      this.message = text;
    });
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
