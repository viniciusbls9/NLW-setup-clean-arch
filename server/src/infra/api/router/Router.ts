import HttpServer from 'infra/api/http/HttpServer';
import { HabitsRepository } from 'domain/repositories/HabitsRepository';
import { ListHabitsUseCase } from 'useCases/ListHabits/ListHabitsUseCase';
import { CreateHabitUseCase } from 'useCases/CreateHabit/CreateHabitUseCase';
import { DayDetailsUseCase } from 'useCases/DayDetails/DayDetailsUseCase';
import { ToggleHabitUseCase } from 'useCases/ToggleHabit/ToggleHabitUseCase';
import { SummaryUseCase } from 'useCases/Summary/SummaryUseCase';

export default class Router {
  constructor(readonly httpServer: HttpServer, readonly habitsRepository: HabitsRepository) { }

  async init () {
    this.httpServer.on('get', '/', async (request: any, response: any) => {
      try {
        const listHabitsUseCase = new ListHabitsUseCase(this.habitsRepository)
        const habits = await listHabitsUseCase.execute()
        return habits
      } catch (error) {
        return response.status(500).send(error)
      }
    });

    this.httpServer.on('post', '/habits', async (request: any, response: any) => {
      try {
        const createHabit = new CreateHabitUseCase(this.habitsRepository)
        await createHabit.execute(request.body)
        return response.status(201).send('Great! Habit created with success')
      } catch (error) {
        return response.status(500).send(error)
      }
    });

    this.httpServer.on('get', '/day', async (request: any, response: any) => {
      try {
        const getDayDetails = new DayDetailsUseCase(this.habitsRepository)
        
        return await getDayDetails.execute(request.query)
      } catch (error) {
        return response.status(500).send(error)
      }
    });

    this.httpServer.on('patch', '/habits/:id/toggle', async (request: any, response: any) => {
      try {
        const toggleHabit = new ToggleHabitUseCase(this.habitsRepository)
        return await toggleHabit.execute(request.params)
      } catch (error) {
        return response.status(500).send(error)
      }
    });

    this.httpServer.on('get', '/summary', async (request: any, response: any) => {
      try {
        const summaryUseCase = new SummaryUseCase(this.habitsRepository)
        return await summaryUseCase.execute()
      } catch (error) {
        return response.status(500).send(error)
      }
    });
  }
}
