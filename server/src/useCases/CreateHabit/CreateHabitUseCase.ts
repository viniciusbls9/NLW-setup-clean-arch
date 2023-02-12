import { Habit } from "domain/repositories/Habit";
import { HabitsRepository } from "domain/repositories/HabitsRepository";
import CreateHabitValidate from "useCases/validators/CreateHabitValidate/CreateHabitValidate";

export class CreateHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) { }

  async execute(habitData: Habit) {
    try {
      const validate = new CreateHabitValidate(habitData)
      validate.validate()
      return this.habitsRepository.create(habitData)
    } catch (error) {
      return error
    }
  }
}