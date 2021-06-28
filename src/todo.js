import { EventAggregator } from "aurelia-event-aggregator";
import { inject } from "aurelia-framework";


@inject(EventAggregator)
export class Todo {
  constructor(EventAggregator) {
    this.ea = EventAggregator;
  }
  activate(params) {
    this.id = params.id;
  }

  change() {
    this.ea.publish("header", "Hello todoItem");
  }
}
