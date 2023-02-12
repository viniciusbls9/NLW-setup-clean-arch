import { HabitsRepository } from "domain/repositories/HabitsRepository";
import { CreateHabitDTO } from "./CreateHabitDTO";

export class CreateHabitUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute(habitData: CreateHabitDTO) {
        return this.habitsRepository.create(habitData)
    }
}