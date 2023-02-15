import dayjs from 'dayjs';

export class GenerateDateFromYearBeginning {
  helperDay: any;

  constructor() {
    this.helperDay = dayjs;
  }

  generateDate() {
    const firstDayOfTheYear = this.helperDay().startOf('year');
    const today = new Date();

    const dates = [];
    let compareDate = firstDayOfTheYear;

    while (compareDate.isBefore(today)) {
      dates.push(compareDate.toDate());
      compareDate = compareDate.add(1, 'day');
    }
    return dates;
  }
}
