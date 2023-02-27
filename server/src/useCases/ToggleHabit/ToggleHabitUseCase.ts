import { HabitsRepository } from "domain/repositories/HabitsRepository";

export class ToggleHabitUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute() {
        return this.habitsRepository.toggleHabit()
    }
}