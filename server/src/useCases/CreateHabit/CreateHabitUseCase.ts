import { Habit } from "domain/repositories/Habit";
import { HabitsRepository } from "domain/repositories/HabitsRepository";
import UseCaseValidator from "useCases/validators/UseCaseValidator";

export class CreateHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) { }

  async execute(habitData: Habit) {
    try {
      const validate = new UseCaseValidator(habitData)
      validate.createHabitValidator()
      return this.habitsRepository.create(habitData)
    } catch (error) {
      return error
    }
  }
}