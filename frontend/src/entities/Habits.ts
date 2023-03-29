import { Habit } from '@gateways/HabitGateway';
import Observable from './Observable';

export default class Habits extends Observable {
  items: Habit[];

  constructor(items?: any) {
    super();
    this.items = [];
    if (items) {
      for (const item of items) {
        this.items.push({
          id: item.id,
          title: item.title
        });
      }
    }
  }

  async create(habitData: Habit) {
    this.items.push(habitData);
    this.notify('create', habitData);
  }

  // async toggleHabit(item: any) {
  //   item.done = !item.done;
  //   this.notify('toggleDone', item);
  // }

  // summary(description: string) {
  //   return this.items.find((item: any) => item.description === description);
  // }

  // findDayDetails() {}

  findAll(): Habit[] {
    return this.items;
  }
}
