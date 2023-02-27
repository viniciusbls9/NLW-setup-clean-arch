import { HabitsRepository } from "domain/repositories/HabitsRepository";
import UseCaseValidator from "useCases/validators/UseCaseValidator";

export class ToggleHabitUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute(habitId: { id: string }) {
        const validate = new UseCaseValidator(habitId)
        validate.toggleHabitValidator()
        return this.habitsRepository.toggleHabit(habitId.id)
    }
}