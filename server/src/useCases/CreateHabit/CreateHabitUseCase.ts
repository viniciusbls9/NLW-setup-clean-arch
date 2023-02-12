import { Habit } from "domain/repositories/Habit";
import { HabitsRepository } from "domain/repositories/HabitsRepository";
import CreateHabitValidate from "useCases/validators/CreateHabitValidate";

export class CreateHabitUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute(habitData: Habit) {
        const validate = new CreateHabitValidate(habitData)
        validate.validate()
        return this.habitsRepository.create(habitData)
    }
}