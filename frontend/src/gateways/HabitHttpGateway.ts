import Habits from '@entities/Habits';
import HttpServer from '@infra/api/http/HttpServer';
import { DayDetails, Habit, HabitsRepository } from '@gateways/HabitGateway';

export default class HabitHttpGateway implements HabitsRepository {
  constructor(readonly httpClient: HttpServer, readonly baseUrl: string) {}

  async findAll(): Promise<any> {
    const habitData = await this.httpClient.get(`${this.baseUrl}/`);
    const habits = new Habits(habitData);
    return habits;
  }

  async create(habitData: Habit): Promise<any> {
    await this.httpClient.post('/habits', habitData);
  }

  findDayDetails(date: string): Promise<DayDetails> {
    throw new Error('Method not implemented.');
  }

  toggleHabit(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  summary(): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}
