import moment from "moment";

export class DateValueConverter {
  toView(value) {
    return moment(value).format("MMMM Do YYYY");
  }

  fromView(value) {
    //
  }
}
