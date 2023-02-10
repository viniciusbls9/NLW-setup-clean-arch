import HttpServer from 'infra/api/http/HttpServer';
import { HabitsRepository } from 'domain/repositories/HabitsRepository';
import { ListHabitsUseCase } from 'useCases/ListHabits/ListHabitsUseCase';
import { CreateHabitUseCase } from 'useCases/CreateHabit/CreateHabitUseCase';
import { DayDetailsUseCase } from 'useCases/DayDetails/DayDetailsUseCase';

interface RequestProps {
  body: { [key: string]: any }
  params: { [key: string]: any }
  query: { [key: string]: any }
}

export default class Router {
  constructor(readonly httpServer: HttpServer, readonly habitsRepository: HabitsRepository) { }

  async init () {
    this.httpServer.on('get', '/', async () => {
      const listHabitsUseCase = new ListHabitsUseCase(this.habitsRepository)
      const habits = await listHabitsUseCase.execute()

      return habits
    });

    this.httpServer.on('post', '/habits', async (request: RequestProps, response: any) => {
      const createHabit = new CreateHabitUseCase(this.habitsRepository)
      const { title, weekDays } = request.body
      await createHabit.execute({ title, weekDays })
      return response.status(201).send('Great! Habit created with success')
    });

    this.httpServer.on('get', '/day', async (request: RequestProps) => {
      const getDayDetails = new DayDetailsUseCase(this.habitsRepository)
      const { date } = request.query
      return await getDayDetails.execute(date)
    });
  }
}
