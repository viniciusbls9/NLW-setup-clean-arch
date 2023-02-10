import HttpServer from 'infra/api/http/HttpServer';
import { HabitsRepository } from 'domain/repositories/HabitsRepository';
import { ListHabitsUseCase } from 'useCases/ListHabits/ListHabitsUseCase';
import { CreateHabitUseCase } from 'useCases/CreateHabit/CreateHabitUseCase';

interface RequestProps {
  body: { [key: string]: any }
  params: { [key: string]: any }
}

export default class Router {
  constructor(readonly httpServer: HttpServer, readonly habitsRepository: HabitsRepository) { }

  async init () {
    this.httpServer.on('get', '/', async () => {
      const listHabitsUseCase = new ListHabitsUseCase(this.habitsRepository)
      const habits = await listHabitsUseCase.execute()

      return habits
    });

    this.httpServer.on('post', '/habits', async (request: RequestProps) => {
      const createHabit = new CreateHabitUseCase(this.habitsRepository)
      const { title, weekDays } = request.body
      await createHabit.execute({ title, weekDays })
    });
  }
}
