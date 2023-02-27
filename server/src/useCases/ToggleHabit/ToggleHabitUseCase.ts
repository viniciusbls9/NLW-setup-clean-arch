import { HabitsRepository } from "domain/repositories/HabitsRepository";

export class ListHabitsUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute() {
        return this.habitsRepository.toggleHabit()
    }
}