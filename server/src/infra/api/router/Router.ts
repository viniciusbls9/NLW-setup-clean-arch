import HttpServer from 'infra/api/http/HttpServer';
import { HabitsRepository } from 'domain/repositories/HabitsRepository';
import { ListHabitsUseCase } from 'useCases/ListHabits/ListHabitsUseCase';

export default class Router {
  constructor(readonly httpServer: HttpServer, readonly habitsRepository: HabitsRepository) { }

  async init () {
    this.httpServer.on('get', '/', async () => {
      const listHabitsUseCase = new ListHabitsUseCase(this.habitsRepository)
      const habits = await listHabitsUseCase.execute()

      return habits
    });
  }
}
