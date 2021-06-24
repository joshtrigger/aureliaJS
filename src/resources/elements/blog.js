import {bindable} from 'aurelia-framework';

export class Blog {
  @bindable name;

  valueChanged(newValue, oldValue) {
    //
  }
}
