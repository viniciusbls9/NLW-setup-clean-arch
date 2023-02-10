import { HabitsRepository } from "domain/repositories/HabitsRepository";

export class DayDetailsUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute(date: string) {
        return this.habitsRepository.findDayDetails(date)
    }
}